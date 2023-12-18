import { IoMdHome } from "react-icons/io";
import { useEffect, useState } from "react";
import { createProject, getProjects } from "../services/API";
import MainHeader from "../component/HeaderComponents/MainHeader";
import CreateProjectComponent from "../component/ProjectComponents/CreateProjectComponent";
import InitialLandingComponent from "../component/ProjectComponents/InitialLandingComponent";
import ProjectMainComponent from "../component/ProjectComponents/ProjectMainComponent";
import LoaderComponent from "../component/Loaders/LoaderComponent";
import { useSelector } from "react-redux";

const LandingPage = () => {
  const auth = useSelector(state=>state.auth.auth)
  const [projectName, setProjectName] = useState("");
  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if(auth){
      setisLoading(true);
      getProjects().then((res) => {
        setProjects(res.data.projects);
        setisLoading(false);
      }).catch(e=>{
        if(e.response.data.reload){
          window.location.reload()
        }
      })
      setisLoading(false);
    }
  },[]);
  const handleCreateProject = () => {
    setOpen(!open);
  };
  const closeCreateProject=()=>{
    setError(false)
    setOpen(!open);

  }
    const handleCreate = () => {
    if (!projectName) {
      setError(true);
    } else {
      createProject({ projectName }).then((res) => {
        setProjects(prev=>[res.data.projects,...prev]);
        setOpen(false);
      });
    }
  };
  return (
    <>
      <div className="w-full text-black h-[100vh] flex flex-col items-center">
        {isLoading && <LoaderComponent />}
        {open ? (
          <CreateProjectComponent
            setProjects={setProjects}
            projects={projects}
            error={error}
            setProjectName={setProjectName}
            handleCreate={handleCreate}
            handleCreateProject={closeCreateProject}
            setOpen={setOpen}
          />
        ) : (
          ""
        )}
        <MainHeader />
        <div className="w-11/12 px-2 md:px-16 ml-2">
          <button className="border border-gray-300 rounded-full py-1 px-2 flex flex-row items-center hover:bg-blue-200">
            <IoMdHome className="mr-2 text-[25px]" />
            <span>Back to home</span>
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
