import ProjectComponent from './ProjectComponent'
import { IoIosAddCircle } from "react-icons/io";

const ProjectMainComponent = ({handleCreateProject,projects}) => {

  return (
    <div className='w-full flex flex-col lg:flex-row flex-nowrap lg:flex-wrap p-2 lg:p-0 lg:pl-32 mt-10'>
                    <div className='w-full lg:w-11/12 lg:h-30 xs:h-40 flex flex-row justify-between pr-4 lg:pr-16 pl-2 items-center mb-6'>
                        <h1 className='text-4xl mr-4 lg:mr-0 font-bold text-blue-800'>Projects</h1>
                        <button className="capitalise w-2/3 lg:w-1/6 h-[40px] lg:p-1 rounded-md text-white font-bold bg-[rgb(33,25,53)] hover:bg-[rgb(54,41,86)] flex justify-center items-center" onClick={handleCreateProject}><IoIosAddCircle className='text-2xl font-bold' /><span className='ml1 lg:ml-2'>create new project</span></button>
                    </div>
                    {projects?.map(data=>{
                        return (<ProjectComponent key={data._id} project={data}/>)
                    })}
   </div>
  )
}

export default ProjectMainComponent