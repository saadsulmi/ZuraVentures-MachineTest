import logo from '../../assets/lamaLogo.png'
import { IoSettings } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
const MainHeader = () => {
  return (
    <div className="w-full h-[60px] flex justify-between items-center px-10 mb-10">
        <img className='w-1/12 mt-2' src={logo} alt="" />
        <div className='flex items-center'>
            <IoSettings className='mr-5 text-blue-950 text-[25px]' />
            <FaBell className='font-bold text-blue-950 text-[25px]' />
        </div>
    </div>
  )
}

export default MainHeader