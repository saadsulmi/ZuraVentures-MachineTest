const express = require("express");
const multer = require('multer')
const { createUser, updateUser, getUserDetails } = require("../controllers/userController");
const { 
    createProject, 
    getProjects, 
    uploadFileData, 
    getAllsubProjectsData, 
    editUploadData, 
    getSubProjectFile, 
    deleteSubProject,
    addWidgetConfiguration,
    getConfigDetails,
    updateDescription } = require("../controllers/projectController");

const userRouter = express.Router();



const upload = multer ({

})

userRouter.post("/createUser",createUser);

userRouter.patch("/updateUser",updateUser);

userRouter.post("/createProject",createProject);

userRouter.get("/getProjects", getProjects);

userRouter.post("/uploadSubProjects", uploadFileData);

userRouter.get("/getSubProjects/:id", getAllsubProjectsData);

userRouter.get("/subProjectDetails/:id", getSubProjectFile);

userRouter.patch("/updateUploadFiles", editUploadData);

userRouter.delete("/deleteSubProject/:id",deleteSubProject)

userRouter.patch("/updateDescription",updateDescription)

userRouter.get('/getUserDetails',getUserDetails)

userRouter.post('/addwidgetConfiguration',upload.any(),addWidgetConfiguration)

userRouter.get('/getConfigurationData/:id',getConfigDetails)

module.exports = userRouter;
