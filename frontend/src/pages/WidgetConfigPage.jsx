import { useEffect, useState } from "react"
import ProjectHeaderComponent from "../component/HeaderComponents/ProjectHeaderComponent"
import SideBarComponent from "../component/HeaderComponents/SideBarComponent"
import { getSubProjects } from "../services/API"
import { useSelector } from "react-redux"
import LoaderComponent from "../component/loaders/LoaderComponent"
import GeneralComponent from "../component/WidgetComponents/General/GeneralComponent"
import DisplayComponent from "../component/WidgetComponents/Display/DisplayComponent"
import AdvancedComponent from "../component/WidgetComponents/Advanced/AdvancedComponent"

const WidgetConfigPage = () => {
    const projectId=useSelector(state=>state.project.project)
    const [currentProject,setcurrentProject]=useState('')
    const [option,setOption]=useState(1)
    const [loader,setLoader]=useState(true)
    useEffect(()=>{
        getSubProjects(projectId).then(res=>{
            setLoader(false)
            setcurrentProject(res.data.currentProject.projectName)
        })
    },[])
  return (
    <div className="w-full h-[100vh] flex flex-row text-black">
        {loader?<LoaderComponent/>:''}
        <SideBarComponent/>
        <div className="w-full lg:w-9/12 h-[100vh] text-black px-10 pt-10 ">
          <ProjectHeaderComponent currentProject={currentProject} heading={'Configuration'} route={'/ widget configuration'}/>
          <div className="relative flex mb-5">
            <h1 className={`mr-1 w-32 text-center h-10 ${option===1?'border-b-4 rounded-sm text-blue-600 font-bold border-blue-600':''}`} onClick={()=>setOption(1)}>General</h1>
            <h1 className={`mr-1 w-32 text-center h-10 ${option===2?'border-b-4 rounded-sm text-blue-600 font-bold border-blue-600':''}`} onClick={()=>setOption(2)}>Display</h1>
            <h1 className={`w-32 text-center h-10 ${option===3?'border-b-4 rounded-sm text-blue-600 font-bold border-blue-600':''}`} onClick={()=>setOption(3)}>Advanced</h1>
          <hr className="absolute mt-9 border-1 border-gray-300 w-full rounded-2xl " />
          </div>
          {
            option===1?(<GeneralComponent/>):''
          }
          {
            option===2?(<DisplayComponent/>):''
          }
          {
            option===3?(<AdvancedComponent/>):''
          }
        </div>
    </div>
  )
}

export default WidgetConfigPage