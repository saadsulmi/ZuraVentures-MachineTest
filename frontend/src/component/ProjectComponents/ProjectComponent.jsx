import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentProject } from "../../features/projectReducer";
import { useEffect, useState } from "react";
const ProjectComponent = ({ project }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [color,setColor]=useState('')
  const getRandomColorClass = () => {
    const colors = [
      "bg-blue-700",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-pink-500",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[randomIndex])
  };
  useEffect(()=>{
    getRandomColorClass()
  },[]);
  const getDate = (date) => {
    const dateObject = new Date(date);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();
    return `updated at ${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;
  };
  const getInitials = (name) => {
    if (name) {
      const words = name.split(" ");
      const initials = words
        .map((word) => word.charAt(0).toUpperCase())
        .join("");
      return initials;
    }
  };

  const handleNavigate = (id) => {
    console.log(id);
    localStorage.setItem("project", id);
    dispatch(setCurrentProject(id));
    navigate(`/projects`);
  };
  return (
    <div
      className="w-full md:w-96 shadow-xl h-32 rounded-2xl border border-1 p-2 flex flex-row items-center cursor-pointer border-blue-300 mr-10 mb-4"
      onClick={() => handleNavigate(project._id)}
    >
      <div
        className={`w-1/3 h-full rounded-xl flex items-center justify-center ${color} mr-2`}
      >
        <h1 className="font-extrabold text-5xl text-white ">
          {getInitials(project.projectName)}
        </h1>
      </div>
      <div>
        <h1 className="text-xl font-semibold capitalize">
          {project.projectName}
        </h1>
        <h1 className="text-xs font-semibold">Episode 4</h1>
        <h1 className="text-xs mt-10">{getDate(project.updatedAt)}</h1>
      </div>
    </div>
  );
};

export default ProjectComponent;
