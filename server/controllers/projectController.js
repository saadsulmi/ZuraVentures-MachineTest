const ProjectModel = require("../models/projectModel");
const configModel = require("../models/widgetConfigModel");
const { verifyToken } = require("../middlewares/jwt");
const subProjectModel = require("../models/subProjectModel");
const { uploadBotIcon, getBotSignedUrl } = require("../utils/s3");

const createProject = async (req, res) => {
  let token = req.header("auth-token");
  if (!token) {
    return res.status(401).json({ message: "Token must be provided" });
  }
  try {
    const { projectName } = req.body;
    let response = await verifyToken(token);
    const isExist = await ProjectModel.findOne({ projectName });
    if (!isExist) {
      const newProject = new ProjectModel({
        projectName,
        userId: response.id,
      });
      await newProject.save();
      const allProject = await ProjectModel.findOne({ userId: response.id })
        .select("-__v")
       .sort({ createdAt: -1 });
      res.status(201).json({
        message: "project created successfully",
        projects: allProject,
      });
    } else {
      res.status(409).json({ message: "project name already exist" });
    }
  } catch (error) {
    console.log(error);
  }
};

const getProjects = async (req, res) => {
  let token = req.header("auth-token");
  if (!token) {
    return res.status(401).json({ message: "Token must be provided",reload:true });
  }
  try {
    const response = await verifyToken(token);
    const userProjects = await ProjectModel.find({ userId: response.id })
      .select("-__v")
      .sort({ createdAt: -1 });
    res.status(202).json({ projects: userProjects });
  } catch (error) {
    console.log(error);
  }
};

const uploadFileData = async (req, res) => {
  try {
    const { filename, description, projectId, uploadType } = req.body;
    const newUpload = new subProjectModel({
      filename,
      description,
      projectId,
      uploadType,
      status: true,
    });
    await newUpload.save();
    const subProjects = await subProjectModel
      .find({ projectId })
      .sort({ createdAt: -1 });
    res
      .status(201)
      .json({ message: "file uploaded successfully", subProjects });
  } catch (error) {
    console.log(error);
  }
};

const getAllsubProjectsData = async (req, res) => {
  try {
    const projectId = req.params.id;
    if (!projectId) {
      res.status(404).json({ message: "Project Id not found" });
    }
    const subprojectFiles = await subProjectModel
      .find({ projectId })
      .sort({ createdAt: -1 });
    const currentProject = await ProjectModel.findOne({ _id: projectId });
    res.status(202).json({ subProjects: subprojectFiles, currentProject });
  } catch (error) {
    console.log(error);
  }
};

const getSubProjectFile = async (req, res) => {
  try {
    const projectId = req.params.id;
    if (!projectId) {
      res.status(404).json({ message: "Project Id not found" });
    }
    const singleSubProject = await subProjectModel.findOne({ _id: projectId });
    const currentProject = await ProjectModel.findOne({
      _id: singleSubProject.projectId,
    });
    res.status(202).json({ singleSubProject, currentProject });
  } catch (error) {
    console.log(error);
  }
};

const editUploadData = async (req, res) => {
  try {
    const { uploadId, description } = req.body;
    const uploadFileDetails = await subProjectModel.findOne({ _id: uploadId });
    uploadFileDetails.description = description;
    await uploadFileDetails.save();
    res.status(202).json({ uploadFileDetails });
  } catch (error) {
    console.log(error);
  }
};

const deleteSubProject = async (req, res) => {
  try {
    const subProjectId = req.params.id;
    if (!subProjectId) {
      res.status(404).json({ message: "Project Id not found" });
    }
    const data = await subProjectModel.findOne({ _id: subProjectId });
    const projectId = data.projectId;
    const deletedFile = await subProjectModel.findOneAndDelete({
      _id: subProjectId,
    });
    if (!deletedFile) {
      res.status(404).json({ message: "File not found." });
    }
    const subprojects = await subProjectModel
      .find({ projectId })
      .sort({ createdAt: -1 });
    res.status(202).json({ subprojects });
  } catch (error) {
    console.log(error);
  }
};

const updateDescription = async (req, res) => {
  try {
    const { description, id } = req.body;
    if (!id) {
      res.status(404).json({ message: "Project Id not found" });
    }
    const subProject = await subProjectModel.findOne({ _id: id });
    if (!subProject) {
      res.status(404).json({ message: "File not found." });
    } else {
      subProject.description = description;
      const updatedFile = await subProject.save();
      res.status(202).json({ redirect: `/projects` });
    }
  } catch (error) {
    console.log(error);
  }
};

const addWidgetConfiguration = async (req, res) => {
  try {
    const data = req.body;
    let isExist = await configModel.findOne({ projectId: data.projectId });
    const file = req.files[0];
    if (!isExist) {
      const widgetConfig = new configModel(data);
      if (file) {
        const value = await uploadBotIcon(file, data.projectId);
        widgetConfig.image = value;
        await widgetConfig.save();
      } else {
        await widgetConfig.save();
      }
      let link;
      if (widgetConfig.image) {
        link = await getBotSignedUrl(data.projectId, widgetConfig.image);
      }
      res.status(200).json({ message: "success", widgetConfig, link });
    } else {
      if (file) {
        const value = await uploadBotIcon(file, data.projectId);
        data.image = value;
        await configModel.updateOne(
          { projectId: data.projectId },
          { $set: data }
        );
      } else {
        await configModel.updateOne(
          { projectId: data.projectId },
          { $set: data }
        );
      }
      let widgetConfig = await configModel.findOne({
        projectId: data.projectId,
      });
      let link;
      if (widgetConfig.image) {
        link = await getBotSignedUrl(data.projectId, widgetConfig.image);
      }
      res.status(200).json({ message: "success", widgetConfig, link });
    }
  } catch (error) {
    console.log(error);
  }
};

const getConfigDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const configData = await configModel.findOne({ projectId: id });
    if (configData) {
      let link;
      if (configData.image) {
        link = await getBotSignedUrl(id, configData.image);
      }
      res.status(202).json({ configData, link });
    } else {
      let sample = {
        chatbotname: "",
        message: "",
        placeholder: "",
        primarycolor: "#ffffff",
        fontcolor: "#52ce1c",
        fontsize: 10,
        chatheight: 40,
        showsource: true,
        chaticonsize: 48,
        screenposistion: "bottom-left",
        distanceBottom: 10,
        distanceHorizontal: 10,
        image: "",
      };
      res.status(202).json({ configData: sample });
    }
  } catch (error) {}
};

module.exports = {
  createProject,
  getProjects,
  uploadFileData,
  getAllsubProjectsData,
  addWidgetConfiguration,
  editUploadData,
  getSubProjectFile,
  deleteSubProject,
  updateDescription,
  getConfigDetails,
};
