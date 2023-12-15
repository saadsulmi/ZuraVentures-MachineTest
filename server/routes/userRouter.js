const express = require("express");
const { createUser, updateUser } = require("../controllers/userController");
const { createProject, getProjects, getTypes, uploadFileData, getUploadFilesData, editUploadData } = require("../controllers/projectController");
const userRouter = express.Router();


userRouter.post("/createUser",createUser);

userRouter.patch("/updateUser",updateUser);

userRouter.post("/createProject",createProject);

userRouter.get("/getProjects/", getProjects);

userRouter.post("/uploadSubProjects", uploadFileData);

userRouter.get("/getSubProjects/:id", getUploadFilesData);

userRouter.patch("/updateUploadFiles", editUploadData);

module.exports = userRouter;
