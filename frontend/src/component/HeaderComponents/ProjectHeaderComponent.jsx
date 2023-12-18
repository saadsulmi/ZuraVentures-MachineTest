import { useNavigate } from "react-router-dom";
import { FaBell, FaUser, FaHome } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetUser } from "../../features/authReducer";

const ProjectHeaderComponent = ({ currentProject, heading, route }) => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleHome = () => {
    localStorage.removeItem("project");
    navigate("/");
  };
  const logout = () => {
    localStorage.removeItem("auth-data");
    dispatch(resetUser());
  };
  return (
    <>
      <div className="w-full flex justify-between mb-10">
        <div className="flex items-center">
          <FaHome
            className="ml-4 text-2xl text-gray-500 mr-1 hover:text-gray-800"
            onClick={handleHome}
          />
          <h1
            className={`text-lg  mt-1 font-medium ${
              route ? "text-gray-500" : "text-blue-700"
            }`}
          >
            {`/ ${currentProject} `}
            <span className="text-blue-700">{route}</span>
          </h1>
        </div>
        <div className="relative flex items-center pr-10">
          <div
            className={`absolute ${
              menu ? "visible" : "hidden"
            } w-40 h-10 bg-zinc-200 border hover:bg-white  border-zinc-400 rounded mt-20 -ml-14 text-lg flex items-center justify-center`}
            onClick={logout}
          >
            <h1>Logout</h1>
          </div>
          <FaUser
            className="ml-4 text-2xl hover:text-gray-800 text-gray-700"
            onClick={() => setMenu(!menu)}
          />
          <FaBell className="ml-4 text-2xl text-gray-700" />
        </div>
      </div>
      <h1 className="text-4xl font-bold text-blue-700 mb-10">{`${
        heading ? heading : currentProject
      }`}</h1>
    </>
  );
};

export default ProjectHeaderComponent;
