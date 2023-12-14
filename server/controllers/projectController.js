const ProjectModel = require("../models/projectModel");
const { createToken, verifyToken } = require("../middlewares/jwt");
const uploadsModel = require("../models/uploadModel");

const createProject =  async (req, res) => {
  try {
    const { projectName } = req.body;
    let token = JSON.parse(req.header('auth-token'))
    console.log(token,"==>");
    const response=await verifyToken(token)
    const isExist = await ProjectModel.findOne({ projectName });
    if (!isExist) {
      const newProject = new ProjectModel({
        projectName,
        userId:response.id
      });
      await newProject.save();
      console.log(newProject);
      const allProject = await ProjectModel.findOne({ userId:response.id });
      res
        .status(201)
        .json({ message: "project created successfully", projects:allProject });
    } else {
      res.status(409).json({ message: "project name already exist" });
    }
  } catch (error) {
    console.log(error);
  }
}

const getProjects=async (req, res) => {
  try {
    let token = JSON.parse(req.header('auth-token'))
    const response=await verifyToken(token)
    const userProjects = await ProjectModel.find({userId:response.id}).select(
        "-createdAt -updatedAt -__v"
        );
    console.log(userProjects);
    res.status(202).json({ projects:userProjects });
  } catch (error) {
    console.log(error);
  }
}

const getTypes= async (req, res) => {
  try {
    // add links for the respective ones later
    const uploadTypes = ["youtube video", "spotify podcast", "RSS feed"];
    res.status(200).json({ uploadTypes });
  } catch (error) {
    console.log(error);
  }
}


const uploadFileData=async (req, res) => {
  try {
    const { filename, description, projectId, uploadType } = req.body;
    const newUpload = new uploadsModel({
      filename,
      description,
      projectId,
      uploadType,
    });
    await newUpload.save();
    console.log(newUpload);
    res.status(201).json({ message: "file uploaded successfully" });
  } catch (error) {
    console.log(error);
  }
}

const getUploadFilesData=async (req, res) => {
  try {
    const projectId = req.params.id;
    const projectFiles = await uploadsModel
      .find({ projectId })
      .select("-createdAt -updatedAt -__v");
    console.log(projectFiles);
    res.status(202).json({ projectFiles });
  } catch (error) {
    console.log(error);
  }
}

const editUploadData=async (req, res) => {
  try {
    const { uploadId, description } = req.body;
    console.log(uploadId, description);
    const uploadFileDetails = await uploadsModel.findOne({ _id: uploadId });
    uploadFileDetails.description = description;
    await uploadFileDetails.save();
    console.log(uploadFileDetails);
    res.status(202).json({ uploadFileDetails });
  } catch (error) {
    console.log(error);
  }
}

module.exports={
    createProject,
    getProjects,
    getTypes,
    uploadFileData,
    getUploadFilesData,
    editUploadData
}