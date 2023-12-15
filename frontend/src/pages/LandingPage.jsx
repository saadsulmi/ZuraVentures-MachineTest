import { Player } from '@lottiefiles/react-lottie-player';
import { IoIosAddCircle } from "react-icons/io";
import RegisterComponent from "../component/RegisterComponent"
import podcast from '../assets/Animation - 1702617371672.json'
import MainHeader from "../component/MainHeader"
import { useEffect, useState } from 'react';
import CreateProjectComponent from '../component/CreateProjectComponent';
import { getProjects } from '../services/API';
const LandingPage = () => {
    const [open,setOpen] = useState(false)
    const [projects,setProjects] = useState([])
    useEffect(()=>{
        getProjects().then(res=>{
            console.log(res.data.projects);
        })
    },[])
    const handleCreateProject=()=>{
        setOpen(!open)
    }
  return (
    <>
      {!projects?(
      <RegisterComponent/>):(
          <div className="w-full text-black h-[100vh] flex flex-col items-center">
            {open?<CreateProjectComponent handleCreateProject={handleCreateProject} setProjects={setProjects} setOpen={setOpen}/>:''}
            <MainHeader/>
            <div className='w-3/4'>
                <button className='border border-gray-300 rounded-full p-1'>Go to home</button>
            </div>
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
        </div>
      )}
    </>
  )
}

export default LandingPage