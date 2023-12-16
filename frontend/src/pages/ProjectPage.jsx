import { useState,useEffect } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
import { FaBell, FaUser,FaHome } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import youtubeLogo from '../assets/youtube.png'
import spotifyLogo from '../assets/spotify.png'
import rssLogo from '../assets/RSS.png'
import UploadProjectComponent from "../component/ProjectComponents/UploadProjectComponent";
import SideBarComponent from "../component/HeaderComponents/SideBarComponent"
import { deleteSubProject, getSubProjects} from '../services/API'
import SubProjectsComponent from "../component/ProjectComponents/SubProjectsComponent";
import LoaderComponent from "../component/loaders/LoaderComponent";
const ProjectPage = () => {
    const [loader,setLoader]=useState(true)
    const { projectId } = useParams();
    const [open,setOpen]=useState(false)
    const [type,setType]=useState('')
    const [currentProject,setcurrentProject]=useState('')
    const [uploadLogo,setLogo]=useState('')
    const [subProjects,setSubProjects]=useState([])
    const navigate=useNavigate()

    const uploadFile=(data)=>{
        setType(data)
        if(data==='youtube'){
            setLogo(youtubeLogo)
        }else if(data==='spotify'){
            setLogo(spotifyLogo)
        }else{
            setLogo(rssLogo)
        }
        setOpen(true)
    }

    useEffect(()=>{
        getSubProjects(projectId).then(res=>{
            console.log(res.data.subProjects)
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
        {loader?<LoaderComponent/>:''}
        {open?<UploadProjectComponent uploadType={type} setOpen={setOpen} logo={uploadLogo} projectId={projectId} setSubProjects={setSubProjects}/>:''}
        <SideBarComponent/>
        <div className="w-full lg:w-9/12 h-[100vh] text-black px-10 pt-10 ">
            <div className="w-full flex justify-between mb-10">
                <div className="flex items-center">
                    <FaHome className="ml-4 text-2xl text-gray-500 mr-1 hover:text-gray-800" onClick={()=>navigate('/')}/>
                    <h1 className="text-lg text-gray-500 mt-1 font-medium">{`/${currentProject}`}<span className="text-blue-700">/uploads</span></h1>
                </div>
                <div className="flex items-center pr-10">
                    <FaUser className="ml-4 text-2xl text-gray-700"/>
                    <FaBell className="ml-4 text-2xl text-gray-700"/>
                </div>
            </div>
            <h1 className="text-4xl font-bold text-blue-700 mb-10">{`${currentProject}`}</h1>
            <div className="w-full lg:w-11/12 h-2/5 lg:h-1/5 flex flex-col lg:flex-row mb-14 lg:mb-0">
                <div className="w-full lg:w-1/3 h-24 lg:h-[120px] rounded-lg border shadow-lg mr-4 border-gray-400 flex items-center p-4" onClick={()=>uploadFile('youtube')}>
                    <div className="w-16 h-16 rounded-full mr-4">
                        <img className="w-fit" src={youtubeLogo} alt="" />
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold">Upload</h1>
                        <h1 className="font-semibold">Youtube Video</h1>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 h-24 lg:h-[120px] rounded-lg border shadow-lg mr-4 border-gray-400 flex items-center p-4" onClick={()=>uploadFile('spotify')}>
                    <div className="w-16 h-16 rounded-full mr-4">
                        <img className="w-fit" src={spotifyLogo} alt="" />
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold">Upload</h1>
                        <h1 className="font-semibold">Spotify podcast</h1>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 h-24 lg:h-[120px] rounded-lg border shadow-lg border-gray-400 flex items-center p-4" onClick={()=>uploadFile('RSS')}>
                    <div className="w-16 h-16 rounded-full mr-4">
                        <img className="w-fit" src={rssLogo} alt="" />
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold">Upload</h1>
                        <h1 className="font-semibold">RSS Feed</h1>
                    </div>
                </div>
            </div>
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