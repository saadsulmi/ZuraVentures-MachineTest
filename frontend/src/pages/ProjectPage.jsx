import { useState,useEffect } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
import UploadProjectComponent from "../component/ProjectComponents/UploadProjectComponent";
import SideBarComponent from "../component/HeaderComponents/SideBarComponent"
import { deleteSubProject, getSubProjects} from '../services/API'
import SubProjectsComponent from "../component/ProjectComponents/SubProjectsComponent";
import LoaderComponent from "../component/Loaders/LoaderComponent";
import { useSelector } from "react-redux";
import ProjectHeaderComponent from "../component/HeaderComponents/ProjectHeaderComponent";
import UploadTypeComponents from "../component/ProjectComponents/UploadTypeComponents";
const ProjectPage = () => {
    const projectId=useSelector(state=>state.project.project)
    const [loader,setLoader]=useState(true)
    const [open,setOpen]=useState(false)
    const [type,setType]=useState('')
    const [currentProject,setcurrentProject]=useState('')
    const [subProjects,setSubProjects]=useState([])
    const [uploadLogo,setLogo]=useState('')

    const uploadFile=(data)=>{
        setType(data.type);
        if(data.type==='youtube'){
            setLogo(data.logo)
        }else if(data.type==='spotify'){
            setLogo(data.logo)
        }else{
            setLogo(data.logo)
        }
        setOpen(true)
    }

    useEffect(()=>{
        getSubProjects(projectId).then(res=>{
            setSubProjects(res.data.subProjects);
            setcurrentProject(res.data.currentProject.projectName)
            setLoader(false)
        })
    },[])

    const deleteHandler=(id)=>{
        deleteSubProject(id).then(res=>{
            setSubProjects(res.data.subprojects)
        })
    }


  return (

    <div className="w-full h-[100vh] flex flex-row">
        {loader&&<LoaderComponent/>}
        {open?<UploadProjectComponent uploadType={type} setOpen={setOpen} logo={uploadLogo} projectId={projectId} setSubProjects={setSubProjects}/>:''}
        <SideBarComponent/>
        <div className="w-full lg:w-9/12 h-[100vh] text-black px-10 pt-10 ">
            <ProjectHeaderComponent currentProject={currentProject} route={'/ upload'} />
            <UploadTypeComponents uploadFile={uploadFile} />
            {
                subProjects.length>0?(
                    <SubProjectsComponent subProjects={subProjects} deleteHandler={deleteHandler}/>
                ):
                (
                    <>
                        <h1 className="w-11/12 flex flex-col pb-2 items-center my-10"> <h1 className="text-gray-400">or</h1> </h1>
                        <div className="w-11/12 h-2/6 flex flex-col items-center border-2 border-dashed rounded-xl border-gray-400 justify-center">
                            <MdOutlineCloudUpload className="text-8xl text-blue-800" />
                            <h1 className="text-[rgb(73,69,79)]">Select a file or drag and drop here (Podcast Media or Transcription Text)</h1>
                            <h1 className="text-[rgb(153,153,153)]">MP4, MOV, MP3, WAV, PDF, DOCX or TXT file </h1>
                            <button className="w-1/6 rounded-full p-2 mt-5 border-2 text-blue-800 border-blue-800">Save file</button>
                        </div>
                    </>
                )
            }
        </div>
    </div>
  )
}

export default ProjectPage