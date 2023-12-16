import { useLocation, useNavigate } from 'react-router-dom'
import { IoSettings } from "react-icons/io5";
import logo from '../../assets/lamaLogo.png'
import { useEffect, useState } from 'react';
const SideBarComponent = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const routes=['projects','widget configurations','deployment','pricing'];
    const [pathname,setPath]=useState('')
    useEffect(()=>{
        const parts = location.pathname.split('/');
        const path = parts[1];
        setPath(path);
        console.log(path)
    },[location])
  return (
    <div className='w-3/12 sticky h-[100vh] bg-[rgb(243,232,255)] lg:flex flex-col justify-between p-6 hidden'>
    <div>
        <img className='w-1/2 mt-0' src={logo} alt="" />
        <h1 className='text-[rgb(73,69,79)] mt-6'>Podcast Upload Flow</h1>
        {
            routes.map((val,idx)=>{
                return (
                    <div className={`p-1 mt-3 rounded-full flex flex-row items-center pl-3 ${pathname===`${val}`?'bg-blue-700':''}`} key={idx} onClick={()=>{navigate(`/${val.replace(" ",'')}`)}}>
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center mr-3 ${pathname===`${val}`?'bg-blue-950':'bg-slate-300'}`}>
                            <h1 className={`font-semibold ${pathname===`${val}`?'text-white':'text-[rgb(49,48,51)]'}`}>{idx+1}</h1> 
                        </div>
                        <h1 className={`mt-3 text-lg capitalize h-10 ${pathname===`${val}`?'text-white':'text-[rgb(73,69,79)]'}`}>{val}</h1>
                    </div>
                )
            })
        }
        <hr className="h-[1px] my-3 bg-gray-200 border-0 dark:bg-gray-300"></hr>
    </div>
    <div className='text-black'>
        <hr className="h-[2px] my-3 bg-gray-200 border-0 dark:bg-gray-300"></hr>
        <div className='flex items-center ml-2'>
            <IoSettings className='text-2xl text-gray-600 mr-4' />
            <h1 className='text-gray-600 text-lg capitalize'>settings</h1>
        </div>
    </div>

    </div>
  )
}

export default SideBarComponent