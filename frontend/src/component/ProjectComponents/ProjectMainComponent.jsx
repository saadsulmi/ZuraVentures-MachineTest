import ProjectComponent from "./ProjectComponent";
import { IoIosAddCircle } from "react-icons/io";

const ProjectMainComponent = ({ handleCreateProject, projects }) => {
  return (
    <div className="w-full flex flex-col md:flex-row flex-nowrap md:flex-wrap p-2 md:p-0 md:pl-32 mt-10">
      <div className="w-full md:w-11/12 md:h-30 xs:h-40 flex flex-row justify-between pr-4 md:pr-16 pl-2 items-center mb-6">
        <h1 className="text-4xl mr-4 md:mr-0 font-bold text-blue-800">
          Projects
        </h1>
        <button
          className="capitalise w-2/3 md:w-1/6 h-[40px] md:p-1 rounded-md text-white font-bold bg-[rgb(33,25,53)] hover:bg-[rgb(54,41,86)] flex justify-center items-center"
          onClick={handleCreateProject}
        >
          <IoIosAddCircle className="text-2xl font-bold" />
          <span className="ml-1 text-sm md:text-base md:ml-2">
            create new project
          </span>
        </button>
      </div>
      {projects?.map((data) => {
        return <ProjectComponent key={data._id} project={data} />;
      })}
    </div>
  );
};

export default ProjectMainComponent;
