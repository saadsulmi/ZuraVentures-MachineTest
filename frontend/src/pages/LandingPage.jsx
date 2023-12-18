import { IoMdHome } from "react-icons/io";
import { useEffect, useState } from "react";
import { getProjects } from "../services/API";
import MainHeader from "../component/HeaderComponents/MainHeader";
import CreateProjectComponent from "../component/ProjectComponents/CreateProjectComponent";
import InitialLandingComponent from "../component/ProjectComponents/InitialLandingComponent";
import ProjectMainComponent from "../component/ProjectComponents/ProjectMainComponent";
import LoaderComponent from "../component/Loaders/LoaderComponent";
import { useSelector } from "react-redux";

const LandingPage = () => {
  const auth = useSelector(state=>state.auth.auth)
  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState("");
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    let token = localStorage.getItem("auth-data");
    if(auth){
      const headers = {
        headers: {
          "auth-token": JSON.parse(localStorage.getItem("auth-data")),
        },
      };
      console.log(headers);
      setisLoading(true);
      getProjects(headers).then((res) => {
        setProjects(res.data.projects);
        setisLoading(false);
      });
      setisLoading(false);
    }
  }, [auth]);
  const handleCreateProject = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="w-full text-black h-[100vh] flex flex-col items-center">
        {isLoading && <LoaderComponent />}
        {open ? (
          <CreateProjectComponent
            handleCreateProject={handleCreateProject}
            setProjects={setProjects}
            setOpen={setOpen}
          />
        ) : (
          ""
        )}
        <MainHeader />
        <div className="w-11/12 px-2 md:px-16 ml-2">
          <button className="border border-gray-300 rounded-full py-1 px-2 flex flex-row items-center hover:bg-blue-200">
            <IoMdHome className="mr-2 text-[25px]" />
            <span>Go to home</span>
          </button>
        </div>
        {projects ? (
          projects.length > 0 ? (
            <ProjectMainComponent
              handleCreateProject={handleCreateProject}
              projects={projects}
            />
          ) : (
            <InitialLandingComponent
              handleCreateProject={handleCreateProject}
            />
          )
        ) : (
          <LoaderComponent />
        )}
      </div>
    </>
  );
};

export default LandingPage;
