import { useNavigate } from "react-router-dom"
import { FaBell, FaUser,FaHome } from "react-icons/fa";


const ProjectHeaderComponent = ({currentProject,heading,route}) => {
    const navigate=useNavigate();
    const handleHome=()=>{
        localStorage.removeItem('project')
        navigate('/')
    }
  return (
    <>
        <div className="w-full flex justify-between mb-10">
                <div className="flex items-center">
                    <FaHome className="ml-4 text-2xl text-gray-500 mr-1 hover:text-gray-800" onClick={handleHome}/>
                    <h1 className={`text-lg  mt-1 font-medium ${route?'text-gray-500':'text-blue-700'}`}>{`/ ${currentProject} `}<span className="text-blue-700">{route}</span></h1>
                </div>
                <div className="flex items-center pr-10">
                    <FaUser className="ml-4 text-2xl text-gray-700"/>
                    <FaBell className="ml-4 text-2xl text-gray-700"/>
                </div>
            </div>
            <h1 className="text-4xl font-bold text-blue-700 mb-10">{`${heading?heading:currentProject}`}</h1>

    </>
  )
}

export default ProjectHeaderComponent