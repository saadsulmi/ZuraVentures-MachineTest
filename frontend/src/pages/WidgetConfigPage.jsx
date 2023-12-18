import { useEffect, useState } from "react";
import ProjectHeaderComponent from "../component/HeaderComponents/ProjectHeaderComponent";
import SideBarComponent from "../component/HeaderComponents/SideBarComponent";
import {
  addWidgetConfiguration,
  getConfigurationData,
  getSubProjects,
} from "../services/API";
import { useSelector } from "react-redux";
import LoaderComponent from "../component/Loaders/LoaderComponent";
import GeneralComponent from "../component/WidgetComponents/General/GeneralComponent";
import DisplayComponent from "../component/WidgetComponents/Display/DisplayComponent";
import AdvancedComponent from "../component/WidgetComponents/Advanced/AdvancedComponent";
import SpinnerComponents from "../component/Loaders/SpinnerComponents";

const WidgetConfigPage = () => {
  const [error, setError] = useState({
    chatbotname: false,
    message: false,
    placeholder: false,
    fontsize: false,
    chatheight: false,
    chaticonsize: false,
    showsource: false,
    screenposistion: false,
    distanceBottom: false,
    distanceHorizontal: false,
    image: false,
  });
  const [configData, setConfigData] = useState({});
  const [oldConfig, setOldConfid] = useState({});
  const validFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  const projectId = useSelector((state) => state.project.project);
  const [currentProject, setcurrentProject] = useState("");
  const [option, setOption] = useState(1);
  const [loader, setLoader] = useState(true);
  const [link, setLink] = useState("");
  const [isLoading, setisLoading] = useState(false);
  let form = new FormData();

  useEffect(() => {
    getSubProjects(projectId).then((res) => {
      setLoader(false);
      setcurrentProject(res.data.currentProject);
    });
    getConfigurationData(projectId).then((res) => {
      setLink(res.data.link);
      setOldConfid(res.data.configData);
      setConfigData(res.data.configData);
    });
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!validFileTypes.find((type) => type === file.type)) {
      setError((prev) => ({ ...prev, image: true }));
    } else {
      setConfigData((prev) => ({ ...prev, image: file }));
    }
  };

  const handleSubmit = () => {
    const form = new FormData();
    if (!configData.chatbotname) {
      setError((prev) => ({ ...prev, chatbotname: true }));
      return;
    } else {
      setError((prev) => ({ ...prev, chatbotname: false }));
      form.append("chatbotname", configData.chatbotname);
    }
    if (!configData.message) {
      setError((prev) => ({ ...prev, message: true }));
      return;
    } else {
      setError((prev) => ({ ...prev, message: false }));
      form.append("message", configData.message);
    }
    if (!configData.placeholder) {
      setError((prev) => ({ ...prev, placeholder: true }));
      return;
    } else {
      setError((prev) => ({ ...prev, placeholder: false }));
      form.append("placeholder", configData.placeholder);
    }
    if (!configData.fontsize) {
      setError((prev) => ({ ...prev, fontsize: true }));
      return;
    } else {
      setError((prev) => ({ ...prev, fontsize: false }));
      form.append("fontsize", configData.fontsize);
    }
    if (!configData.chatheight) {
      setError((prev) => ({ ...prev, chatheight: true }));
      return;
    } else {
      setError((prev) => ({ ...prev, chatheight: false }));
      form.append("chatheight", configData.chatheight);
    }
    if (!configData.distanceBottom) {
      setError((prev) => ({ ...prev, distanceBottom: true }));
      return;
    } else {
      setError((prev) => ({ ...prev, distanceBottom: false }));
      form.append("distanceBottom", configData.distanceBottom);
    }
    if (!configData.distanceHorizontal) {
      setError((prev) => ({ ...prev, distanceHorizontal: true }));
      return;
    } else {
      setError((prev) => ({ ...prev, distanceHorizontal: false }));
      form.append("distanceHorizontal", configData.distanceHorizontal);
    }
    if (configData.image) {
      form.append("image", configData.image);
    }
    form.append("screenposistion", configData.screenposistion);
    form.append("showsource", configData.showsource);
    form.append("chaticonsize", configData.chaticonsize);
    form.append("primarycolor", configData.primarycolor);
    form.append("fontcolor", configData.fontcolor);
    form.append("projectId", currentProject._id);
    setisLoading(true);
    addWidgetConfiguration(form)
      .then((res) => {
        setLink(res.data.link);
        setisLoading(false);
        setConfigData(res.data.widgetConfig);
        setOldConfid(res.data.widgetConfig);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <div className="w-full h-[100vh] flex flex-row text-black">
        {loader && <LoaderComponent />}
        <SideBarComponent />
        <div className="w-full lg:w-9/12 h-[100vh] text-black px-10 pt-10 ">
          <ProjectHeaderComponent
            currentProject={currentProject.projectName}
            heading={"Configuration"}
            route={"/ widget configuration"}
          />
          {!loader && (
            <div className="relative flex mb-5">
              <div className="w-4/5 flex">
                <h1
                  className={`mr-1 w-32 text-center h-10 ${
                    option === 1
                      ? "border-b-4 rounded-sm text-blue-600 font-bold border-blue-600"
                      : ""
                  }`}
                  onClick={() => setOption(1)}
                >
                  General
                </h1>
                <h1
                  className={`mr-1 w-32 text-center h-10 ${
                    option === 2
                      ? "border-b-4 rounded-sm text-blue-600 font-bold border-blue-600"
                      : ""
                  }`}
                  onClick={() => setOption(2)}
                >
                  Display
                </h1>
                <h1
                  className={`w-32 text-center h-10 ${
                    option === 3
                      ? "border-b-4 rounded-sm text-blue-600 font-bold border-blue-600"
                      : ""
                  }`}
                  onClick={() => setOption(3)}
                >
                  Advanced
                </h1>
              </div>
              <div
                className={`w-1/5 flex items-center ${
                  JSON.stringify(configData) === JSON.stringify(oldConfig)
                    ? "hidden"
                    : ""
                }`}
              >
                <button
                  className="-mt-10 w-3/4 h-10 bg-blue-800 hover:bg-blue-700 rounded-lg text-white"
                  onClick={handleSubmit}
                >
                  {isLoading ? <SpinnerComponents /> : "Save Changes"}
                </button>
              </div>
              <hr className="absolute mt-9 border-1 border-gray-300 w-full rounded-2xl " />
            </div>
          )}
          {option === 1 ? (
            <GeneralComponent
              setConfigData={setConfigData}
              configData={configData}
              error={error}
            />
          ) : (
            ""
          )}
          {option === 2 ? (
            <DisplayComponent
              setConfigData={setConfigData}
              configData={configData}
              error={error}
              link={link}
              handleImageUpload={handleImageUpload}
            />
          ) : (
            ""
          )}
          {option === 3 ? <AdvancedComponent /> : ""}
        </div>
      </div>
    </>
  );
};

export default WidgetConfigPage;
