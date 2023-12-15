import { useLocation } from 'react-router-dom'
import logo from '../../assets/react.svg'
import { useEffect } from 'react';
const SideBarComponent = () => {
    const location = useLocation();
    const routes=['projects','widget configurations','Deployment','Pricing']
    useEffect(()=>{
        console.log(location.pathname);
    },[])
  return (
    <div className='w-3/12 h-[100vh] bg-[rgb(243,232,255)] flex flex-col justify-between p-6'>
    <div>
        <img src={logo} alt="" />
        <h1 className='text-[rgb(73,69,79)] mt-6'>Podcast Upload Flow</h1>
        {
            routes.map((val,idx)=>{
                return (
                    <div className={`p-1 mt-3 rounded-full flex flex-row items-center pl-3`} key={idx}>{/*blue on path else ''*/}
                        <div className='w-9 h-9 bg-slate-300 rounded-full flex items-center justify-center mr-3'>{/*dark on path else light grey*/}
                            <h1 className='font-semibold'>{idx+1}</h1>  {/*white on path else dark*/}
                        </div>
                        <h1 className='mt-3 text-[rgb(73,69,79)] text-lg capitalize h-10'>{val}</h1>
                    </div>
                )
            })
        }
        <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-400"></hr>
    </div>

    </div>
  )
}

export default SideBarComponent