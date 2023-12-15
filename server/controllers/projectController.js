const ProjectModel = require("../models/projectModel");
const { createToken, verifyToken } = require("../middlewares/jwt");
const subProjectModel = require("../models/subProjectModel");

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
        "-createdAt -__v"
        );
    console.log(userProjects);
    res.status(202).json({ projects:userProjects });
  } catch (error) {
    console.log(error);
  }
}


const uploadFileData=async (req, res) => {
  try {
    const { filename, description, projectId, uploadType } = req.body;
    console.log(projectId,'==>');
    const newUpload = new subProjectModel({
      filename,
      description,
      projectId,
      uploadType,
    });
    await newUpload.save();
    const subProjects= await subProjectModel.find({projectId})
    res.status(201).json({ message: "file uploaded successfully",subProjects });
  } catch (error) {
    console.log(error);
  }
}

const getUploadFilesData=async (req, res) => {
  try {
    const projectId = req.params.id;
    const subprojectFiles = await subProjectModel
      .find({ projectId })
      .select("-createdAt -__v");
    const currentProject = await ProjectModel.findOne({_id:projectId})
    res.status(202).json({ subProjects:subprojectFiles,currentProject });
  } catch (error) {
    console.log(error);
  }
}

const editUploadData=async (req, res) => {
  try {
    const { uploadId, description } = req.body;
    console.log(uploadId, description);
    const uploadFileDetails = await subProjectModel.findOne({ _id: uploadId });
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
    uploadFileData,
    getUploadFilesData,
    editUploadData
}