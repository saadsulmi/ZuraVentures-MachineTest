import axiosInstance from "./axios";

export const test=async ()=> await axiosInstance.post('/test',{message:"test message"})
export const userRegister = async (data)=> await axiosInstance.post('/createUser',data);
export const createProject = async (data)=> await axiosInstance.post('/createProject',data)
export const getProjects = async ()=> await axiosInstance.get('/getProjects')