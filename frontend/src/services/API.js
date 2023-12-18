import axiosInstance from "./axios";

const headers = {
  headers: {
    "auth-token": JSON.parse(localStorage.getItem("auth-data")),
  },
};

const formDataHeaders = {
  headers: {
    "auth-token": localStorage.getItem("auth-data")
      ? JSON.parse(localStorage.getItem("auth-data"))
      : null,
    "Content-Type": "multipart/formdata",
  },
};

export const userRegister = async (data) =>
  await axiosInstance.post("/createUser", data);

export const createProject = async (data) =>
  await axiosInstance.post("/createProject", data, headers);

export const getProjects = async (subHeader) =>
  await axiosInstance.get("/getProjects", subHeader?subHeader:headers);

export const uploadSubProjects = async (data) =>
  await axiosInstance.post("/uploadSubProjects", data);

export const getSubProjects = async (id) =>
  await axiosInstance.get(`/getSubProjects/${id}`);

export const getSubProjectDetails = async (id) =>
  await axiosInstance.get(`/subProjectDetails/${id}`);

export const deleteSubProject = async (id) =>
  await axiosInstance.delete(`/deleteSubProject/${id}`);

export const updateDescription = async (data) =>
  await axiosInstance.patch("/updateDescription", data);

export const getUserDetails = async (subHeader) =>
   await axiosInstance.get("/getUserDetails",subHeader?subHeader:headers);

  

export const updateUser = async (data) =>
  await axiosInstance.patch("/updateUser", data);

export const addWidgetConfiguration = async (data) =>
  await axiosInstance.post("/addwidgetConfiguration", data, formDataHeaders);

export const getConfigurationData = async (id) =>
  await axiosInstance.get(`/getConfigurationData/${id}`);
