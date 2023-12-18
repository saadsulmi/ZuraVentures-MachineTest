import { useState } from "react";
import ProjectHeaderComponent from "../component/HeaderComponents/ProjectHeaderComponent";
import SideBarComponent from "../component/HeaderComponents/SideBarComponent";
import EditProfileComponent from "../component/SettingsComponents/EditProfileComponent";
import LoaderComponents from "../component/Loaders/LoaderComponent";
const SettingsPage = () => {
  const [currentProject, setcurrentProject] = useState("Account settings");
  const [loading, setLoading] = useState(true);
  useState(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });
  return (
    <div className="w-full h-[100vh] flex">
      {loading && <LoaderComponents />}
      <SideBarComponent />
      <div className="w-full md:w-9/12 h-[100vh] text-black px-10 pt-10 ">
        <ProjectHeaderComponent currentProject={currentProject} />
        <EditProfileComponent handleLoading={setLoading} />
      </div>
    </div>
  );
};

export default SettingsPage;
