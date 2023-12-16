import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaBell, FaUser,FaHome,FaPen } from "react-icons/fa";
import SideBarComponent from '../component/HeaderComponents/SideBarComponent';
import { getSubProjectDetails, updateDescription } from '../services/API';
import LoaderComponent from '../component/loaders/LoaderComponent';
import SpinnerComponents from '../component/loaders/SpinnerComponents';
import { ToastContainer } from 'react-toastify';

const EditSubProjectPage = () => {
    const navigate = useNavigate()
    const {subProjectId} = useParams();
    const [subProject,setSubProject]=useState({});
    const [loader,setLoader]=useState(true)
    const [edit,setEdit]=useState(false)
    const [updateLoading,setUpdateLoading]=useState(false)
    const [ newDescription,setNewDescription]=useState('')
    const [currentProject,setCurrentProject]=useState()

    useEffect(()=>{
        getSubProjectDetails(subProjectId).then(res=>{
            console.log(res.data.singleSubProject);
            setSubProject(res.data.singleSubProject);
            setCurrentProject(res.data.currentProject.projectName)
            setNewDescription(res.data.singleSubProject.description)
            setLoader(false)
        })
    },[])

    const handleDiscard=()=>{
        setNewDescription(subProject.description)
        setEdit(!edit)
    }
    const handleEdit=()=>{
        setNewDescription(subProject.description)
        setEdit(!edit)
    }
    const handleUpdate=()=>{
        setUpdateLoading(true)
        if(newDescription===subProject.description){
            setUpdateLoading(false);
            console.log('no changes');
        }else{
            const data={
                id:subProject._id,
                description:newDescription
            }
            updateDescription(data).then(res=>{
                setUpdateLoading(false);
                navigate(res.data.redirect)
            }).catch(e=>{
            })
        }
    }
  return (

    <div className="w-full h-[100vh] flex flex-row text-black">
        {loader?<LoaderComponent/>:''}
      <SideBarComponent/>
      <div className="w-full lg:w-9/12 h-[100vh] text-black px-10 pt-10 ">
        <div className="w-full flex justify-between mb-10">
                <div className="flex items-center">
                    <FaHome className="ml-4 lg:text-2xl text-gray-500 mr-1 hover:text-gray-800" onClick={()=>navigate('/')}/>
                    <h1 className="sm lg:text-lg text-gray-500 mt-1 font-medium">{`/${currentProject}`}<span className="text-blue-700">/Transcript</span></h1>
                </div>
                <div className="flex items-center pr-10">
                    <FaUser className="ml-4 text-2xl text-gray-700"/>
                    <FaBell className="ml-4 text-2xl text-gray-700"/>
                </div>
        </div>
        <div className='w-full mb-6 lg:mb-0 flex flex-col lg:flex-row justify-between items-center'>
            <div>
                <h1 className="text-2xl lg:text-4xl font-bold text-blue-700 mb-10">Edit Discription</h1>
            </div>
            <div className={`${edit?'visible':'hidden'} flex`}>
                <button className='w-28 h-10 rounded border border-red-400 text-red-400 hover:bg-red-600 hover:text-white font-semibold mr-4' onClick={handleDiscard}>Discard</button>
                <button className='w-28 h-10 rounded bg-[rgb(33,25,53)] font-semibold text-white hover:bg-[rgb(66,50,105)] mr-4' onClick={handleUpdate}>{updateLoading?<SpinnerComponents/>:'Save & Exit'}</button>
            </div>
        </div>
        <div className='relative w-full h-3/5 lg:h-2/3'>
            <textarea className={`absolute w-full h-full resize-none rounded-xl border border-blue-700 bg-white pt-20 px-4 ${edit?'block':'cursor-not-allowed'} myscroll box-border`} value={newDescription} onChange={(e)=>{setNewDescription(e.target.value)}} disabled={!edit}/>
            <button className={`absolute mt-6 ml-6 w-36 h-8 ${edit?'bg-green-700':'bg-[rgb(33,25,53)]'} hover:bg-[rgb(64,49,104)] rounded-full flex items-center justify-center text-white ${edit?'visible':'visible'}`}  onClick={handleEdit}><FaPen className='mr-3' /><span>{edit?'Edit Mode':'Enable'}</span></button>
        </div>
      </div>
    </div>
  )
}

export default EditSubProjectPage