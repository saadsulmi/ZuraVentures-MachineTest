const ProjectModel = require("../models/projectModel");
const { createToken, verifyToken } = require("../middlewares/jwt");
const subProjectModel = require("../models/subProjectModel");

const createProject =  async (req, res) => {
  try {
    const { projectName } = req.body;
    let token = JSON.parse(req.header('auth-token'))
    let response = await verifyToken(token)
    const isExist = await ProjectModel.findOne({ projectName });
    if (!isExist) {
      const newProject = new ProjectModel({
        projectName,
        userId:response.id
      });
      await newProject.save();
      console.log(newProject);
      const allProject = await ProjectModel.findOne({ userId:response.id }).select(" -updatedAt -__v").sort({ createdAt: -1 });;
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
    const userProjects = await ProjectModel.find({userId:response.id}).select("-__v").sort({ createdAt: -1 });
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
      status:true
    });
    await newUpload.save();
    const subProjects= await subProjectModel.find({projectId}).sort({ createdAt: -1 });
    res.status(201).json({ message: "file uploaded successfully",subProjects });
  } catch (error) {
    console.log(error);
  }
}

const getAllsubProjectsData=async (req, res) => {
  try {
    const projectId = req.params.id;
    const subprojectFiles = await subProjectModel
      .find({ projectId }).sort({ createdAt: -1 });
    const currentProject = await ProjectModel.findOne({_id:projectId})
    res.status(202).json({ subProjects:subprojectFiles,currentProject });
  } catch (error) {
    console.log(error);
  }
}

const getSubProjectFile=async (req, res) => {
  try {
    const projectId = req.params.id;
    const singleSubProject = await subProjectModel
      .findOne({ _id:projectId })
    const currentProject = await ProjectModel.findOne({_id:singleSubProject.projectId})
    res.status(202).json({ singleSubProject,currentProject });
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

const deleteSubProject=async (req, res) => {
  try {
    const subProjectId = req.params.id;
    const data = await subProjectModel.findOne({_id:subProjectId})
    const projectId = data.projectId
    const deletedFile  = await subProjectModel.findOneAndDelete({ _id:subProjectId});
    console.log(projectId);
    if (!deletedFile) {
       res.status(404).json({ message: 'File not found.' });
    }
    const subprojects = await subProjectModel.find({ projectId }).sort({ createdAt: -1 });
    res.status(202).json({ subprojects });
  } catch (error) {
    console.log(error);
  }
}

const updateDescription= async(req,res)=>{
  try {
      const {description,id}=req.body;
      const subProject=await subProjectModel.findOne({_id:id})
      if(!subProject ){
        res.status(404).json({ message: 'File not found.' });
      }else{
        subProject.description=description;
        const updatedFile = await subProject.save();
        res.status(202).json({ redirect:`/projects` });
      }
  } catch (error) {
    console.log(error);
  }
}

module.exports={
    createProject,
    getProjects,
    uploadFileData,
    getAllsubProjectsData,
    editUploadData,
    getSubProjectFile,
    deleteSubProject,
    updateDescription
}