import axiosInstance from "./axios";

export const test=async ()=> await axiosInstance.post('/test',{message:"test message"})

export const userRegister = async (data)=> await axiosInstance.post('/createUser',data);

export const createProject = async (data)=> await axiosInstance.post('/createProject',data);

export const getProjects = async ()=> await axiosInstance.get('/getProjects');

export const uploadSubProjects = async (data)=> await axiosInstance.post('/uploadSubProjects',data);

export const getSubProjects = async (id)=> await axiosInstance.get(`/getSubProjects/${id}`);

export const getSubProjectDetails = async (id)=> await axiosInstance.get(`/subProjectDetails/${id}`);

export const deleteSubProject = async (id)=> await axiosInstance.delete(`/deleteSubProject/${id}`)

export const updateDescription = async (data) => await axiosInstance.patch('/updateDescription',data);

export const getUserDetails = async ()=> await axiosInstance.get('/getUserDetails')

export const updateUser = async (data)=> await axiosInstance.patch('/updateUser',data)
