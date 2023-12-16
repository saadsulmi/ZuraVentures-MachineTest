const express = require("express");
const { createUser, updateUser } = require("../controllers/userController");
const { 
    createProject, 
    getProjects, 
    uploadFileData, 
    getAllsubProjectsData, 
    editUploadData, 
    getSubProjectFile, 
    deleteSubProject,
    updateDescription } = require("../controllers/projectController");

const userRouter = express.Router();


userRouter.post("/createUser",createUser);

userRouter.patch("/updateUser",updateUser);

userRouter.post("/createProject",createProject);

userRouter.get("/getProjects", getProjects);

userRouter.post("/uploadSubProjects", uploadFileData);

userRouter.get("/getSubProjects/:id", getAllsubProjectsData);

userRouter.get("/subProjectDetails/:id", getSubProjectFile);

userRouter.patch("/updateUploadFiles", editUploadData);

userRouter.delete("/deleteSubProject/:id",deleteSubProject)

userRouter.put("/updateDescription",updateDescription)

module.exports = userRouter;
