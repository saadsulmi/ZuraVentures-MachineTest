import { useState } from 'react'
import { IoMdCloseCircleOutline } from "react-icons/io";
import { uploadSubProjects } from '../../services/API';
import SpinnerComponents from '../Loaders/SpinnerComponents';

const UploadProjectComponent = ({setOpen,uploadType,logo,projectId,setSubProjects}) => {
    const [uploadName,setUploadName]=useState('');
    const [description,setdescription]=useState('');
    const [error,setError]=useState(false);
    const [spinner,setSpinner]=useState(false);
    const handleCreate=()=>{
        let data={
              filename:uploadName,
              description,
              projectId,
              uploadType,
        }
        setSpinner(true)
        if(uploadName===''||description==''){
            setError(true)
        }else{
            uploadSubProjects(data)
            .then(res=>{
                console.log(res.data);
                setSubProjects(res.data.subProjects)
                setOpen(false)
            }).catch(err=>{
                console.log(err)
            })
        }
    }

  return (
    <div className='absolute w-full h-full bg-black z-10 bg-opacity-40 flex justify-center items-center'>
        <div className='w-3/5 h-2/3 lg:h-1/2  p-6 rounded-lg shadow-xl bg-white px-8 '>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <img className="w-14 h-14 rounded-full mr-4" src={logo} alt="" />
                    <h1 className='text-3xl font-semibold capitalize text-blue-700'>{`Upload from ${uploadType}`}</h1>
                </div>
                <div>
                    <IoMdCloseCircleOutline className=' text-2xl text-gray-700 cursor-pointer' onClick={()=>setOpen(false)}/>
                </div>
            </div>
            <h1 className='mt-5 capitalize text-gray-700 text-md'>Name</h1>
            <input className='mt-1 w-full rounded text-black h-[50px] pl-4 bg-white border border-1 border-gray-400 focus:outline-none' value={uploadName} type="text" placeholder='Enter Title' onChange={(e)=>{
                setUploadName(e.target.value);
                if(e.target.value)setError(false)
                }}/>
            <h1 className='mt-5 capitalize text-gray-700 text-md'>Description</h1>
            <input className='mt-1 w-full rounded text-black h-[50px] pl-4 bg-white border border-1 border-gray-400 focus:outline-none' value={description} type="text" placeholder='Enter your description' onChange={(e)=>{
                setdescription(e.target.value);
                if(e.target.value)setError(false)
                }}/>
            <h1 className={`mt-1 text-sm text-red-600 ${error?'':'hidden'}`}>Need to fill both field before saving</h1>
            <div className='mt-6 w-full flex justify-end'>
                <button className='ml-6 w-2/12 duration-200 font-semibold text-white h-10 rounded bg-[rgb(33,25,53)] hover:bg-[rgb(54,41,86)] ' onClick={handleCreate}>{spinner?<SpinnerComponents/>:'save'}</button>
            </div>
        </div>
    </div>
  )
}

export default UploadProjectComponent