import { useState } from "react";
import { createProject } from "../../services/API";

const CreateProjectComponent = ({
  projectName,
  setProjectName,
  error,
  setError,
  handleCreate,
  handleCreateProject,
  setProjects,
  setOpen,
}) => {



  return (
    <div className="absolute w-full h-full bg-black z-10 bg-opacity-40 flex justify-center items-center">
      <div className="w-2/4 p-6 rounded-2xl h-[300px] shadow-xl bg-white px-8 ">
        <h1 className="text-3xl font-semibold capitalize text-blue-700">
          create project
        </h1>
        <h1 className="mt-6 capitalize text-gray-700 text-xl">
          enter project name
        </h1>
        <input
          className="mt-3 w-full rounded h-[50px] pl-4 bg-white border border-1 border-gray-400 focus:outline-none"
          value={projectName}
          type="text"
          placeholder="type here"
          onChange={(e) => {
            setProjectName(e.target.value);
            if (e.target.value) setError(false);
          }}
        />
        <h1 className={`mt-3 text-sm text-red-600 ${error ? "" : "hidden"}`}>
          Project name can&apos;t be empty
        </h1>
        <div className="mt-6 w-full flex justify-end">
          <button
            className=" text-red-600 font-semibold hover:text-red-500"
            onClick={() => handleCreateProject()}
          >
            Cancel
          </button>
          <button
            className="ml-6 w-[100px] duration-200 bg-blue-600 font-semibold text-white h-10 rounded-xl hover:bg-blue-500"
            onClick={handleCreate}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectComponent;
