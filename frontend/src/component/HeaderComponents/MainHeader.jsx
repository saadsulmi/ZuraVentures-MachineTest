import logo from "../../assets/lamaLogo.png";
import { IoSettings } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetUser } from "../../features/authReducer";
import { resetCurrentProject } from "../../features/projectReducer";
import { useNavigate } from "react-router-dom";
const MainHeader = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const navigate=useNavigate()
  const handleLogout = () => {
    dispatch(resetUser());
    dispatch(resetCurrentProject());
    localStorage.removeItem("auth-data");
  };

  return (
    <div className="w-full h-[60px] flex justify-between items-center px-10 mb-10">
      <img className="w-2/5 md:w-1/12 mt-2 cursor-pointer" src={logo} onClick={()=>navigate('/')} alt="" />
      <div className="flex items-center">
        <IoSettings
          className="mr-5 cursor-pointer text-blue-950 text-[25px]"
          onClick={() => {
            setOpen(!open);
          }}
        />
        <FaBell className=" font-bold ml-6 cursor-pointer text-blue-950 text-[25px]" />
        <div
          className={`absolute cursor-pointer ${
            open ? "visible" : "hidden"
          }  w-40 rounded-md h-10 -ml-20 mt-20 border text-gray-400 hover:text-gray-600 duration-200 border-gray-700 hover:bg-blue-100 flex items-center justify-center`}
          onClick={handleLogout}
        >
          <h1 className=" font-semibold">Logout</h1>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
