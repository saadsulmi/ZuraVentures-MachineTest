import { IoMdHome } from "react-icons/io";
import { useEffect, useState } from 'react';
import { getProjects } from '../services/API';
import MainHeader from "../component/HeaderComponents/MainHeader"
import CreateProjectComponent from '../component/ProjectComponents/CreateProjectComponent';
import InitialLandingComponent from "../component/ProjectComponents/InitialLandingComponent";
import ProjectMainComponent from "../component/ProjectComponents/ProjectMainComponent";

const LandingPage = () => {
    const [open,setOpen] = useState(false)
    const [projects,setProjects] = useState([])
    useEffect(()=>{
        getProjects().then(res=>{
            setProjects(res.data.projects)
        })
    },[open])
    const handleCreateProject=()=>{
        setOpen(!open)
    }
  return (
    <>
        <div className="w-full text-black h-[100vh] flex flex-col items-center">
            {open?<CreateProjectComponent handleCreateProject={handleCreateProject} setProjects={setProjects} setOpen={setOpen}/>:''}
            <MainHeader/>
            <div className='w-11/12 px-16 ml-2'>
                <button className='border border-gray-300 rounded-full py-1 px-2 flex flex-row items-center hover:bg-blue-200'><IoMdHome className='mr-2 text-[25px]' /><span>Go to home</span></button>
            </div>
            {
            projects.length>0?
            <ProjectMainComponent handleCreateProject={handleCreateProject} projects={projects} />
            : <InitialLandingComponent handleCreateProject={handleCreateProject} />
            } 
        </div>
    </>
  )
}

export default LandingPage