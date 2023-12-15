import { Player } from '@lottiefiles/react-lottie-player';
import { IoIosAddCircle } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import podcast from '../assets/Animation - 1702617371672.json'
import MainHeader from "../component/HeaderComponents/MainHeader"
import { useEffect, useState } from 'react';
import CreateProjectComponent from '../component/CreateProjectComponent';
import { getProjects } from '../services/API';
import ProjectComponent from '../component/ProjectComponent';
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
      {projects.length>0?(
            <div className='w-full flex flex-wrap pl-10 lg:pl-32 mt-10'>
                <div className='w-11/12 h-30 flex flex-row justify-between pr-16 pl-2 items-center mb-6'>
                    <h1 className='text-4xl font-bold text-blue-800'>Projects</h1>
                    <button className="capitalise w-1/6 h-[40px] p-1 rounded-lg text-white font-bold bg-[rgb(33,25,53)] capitalize hover:bg-[rgb(54,41,86)] flex justify-center items-center" onClick={handleCreateProject}><IoIosAddCircle className='text-2xl font-bold' /><span className='ml-2'>create new project</span></button>
                </div>
                {projects?.map(data=>{
                    return (<ProjectComponent key={data._id} project={data}/>)
                })}
            </div>
      ):(
            <>
                <h1 className="text-5xl text-blue-700 font-extrabold mt-4 capitalize">create new project</h1>
                <div className="w-1/5 mt-10">
                    <Player
                    autoplay
                    loop
                    src={podcast}
                    style={{ height: '300px', width: '300px' }}
                    >
                    </Player>
                </div>
                <h1 className="text-xl w-3/5 text-[rgb(99,135,167)] text-center mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</h1>
                <button className="capitalise mt-6 w-1/4 h-[50px] rounded-lg text-white font-bold bg-[rgb(33,25,53)] capitalize hover:bg-[rgb(54,41,86)] flex justify-center items-center" onClick={handleCreateProject}><IoIosAddCircle className='text-2xl font-bold' /><span className='ml-4'>create new project</span></button>
            </>
            )}
        </div>
    </>
  )
}

export default LandingPage