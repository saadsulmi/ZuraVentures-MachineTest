import { LuUpload } from "react-icons/lu";
import { FaUserTie } from "react-icons/fa";

const DisplayComponent = ({
  setConfigData,
  configData,
  error,
  handleImageUpload,
  link,
}) => {
  const handleToggle = () => {
    setConfigData((prev) => ({ ...prev, showsource: !configData.showsource }));
  };
  const handlePrimaryColorChange = (color) => {
    setConfigData((prev) => ({ ...prev, primarycolor: color }));
  };
  const handleFontColorChange = (color) => {
    setConfigData((prev) => ({ ...prev, fontcolor: color }));
  };

  const handleFontSize = (size) => {
    setConfigData((prev) => ({ ...prev, fontsize: size }));
  };
  const handleChatHeight = (height) => {
    setConfigData((prev) => ({ ...prev, chatheight: height }));
  };
  const handleChatIconSize = (size) => {
    setConfigData((prev) => ({ ...prev, chaticonsize: size }));
  };
  const handleScreenPos = (pos) => {
    setConfigData((prev) => ({ ...prev, screenposistion: pos }));
  };
  const handleBottomDist = (dist) => {
    setConfigData((prev) => ({ ...prev, distanceBottom: dist }));
  };
  const handleHorizontalDist = (dist) => {
    setConfigData((prev) => ({ ...prev, distanceHorizontal: dist }));
  };

  return (
    <div className="w-full max-h-[500px] overflow-auto p-3 flex flex-col myscroll pb-10">
      <div className="w-full h-2/3 flex flex-nowrap flex-col lg:flex-row lg:flex-wrap">
        <div className="w-full lg:w-1/2 mt-2">
          <h1 className="text-xl font-bold text-zinc-700 mb-2">
            Primary color
          </h1>
          <div className="flex">
            <input
              className="w-4/5 h-10 mr-2 rounded-md border-1 outline-1 bg-slate-300 focus:outline-none px-3 text-zinc-500 font-medium"
              type="text"
              value={configData.primarycolor}
              disabled
            />
            <input
              className={`w-10 h-10 border-transparent rounded-md`}
              type="color"
              value={configData.primarycolor}
              onChange={(e) => handlePrimaryColorChange(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-2">
          <h1 className="text-xl font-bold text-zinc-700 mb-2">Font Color</h1>
          <div className="flex">
            <input
              className="w-4/5 h-10 mr-2 rounded-md border-1 outline-1 bg-slate-300 focus:outline-none px-3 text-zinc-500 font-medium"
              value={configData.fontcolor}
              type="text"
              disabled
            />
            <input
              className={`w-10 h-10 border-transparent rounded-md`}
              type="color"
              value={configData.fontcolor}
              onChange={(e) => handleFontColorChange(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-4">
          <h1 className="text-xl font-bold text-zinc-700 mb-2">
            Font Size (in px)
          </h1>
          <div className="flex pr-0 lg:pr-10">
            <input
              className="w-full h-10 mr-2 rounded-md border-1 outline-1 bg-slate-300 focus:outline-none px-3"
              type="number"
              placeholder={configData.fontsize}
              onChange={(e) => handleFontSize(e.target.value)}
            />
          </div>
          {error.fontsize && (
            <h1 className="text-[10px] mt-1 text-red-600 mb-2">
              Lorem ipsuim dolor sit Lorem ipsuim dolor sit
            </h1>
          )}
        </div>
        <div className="w-full lg:w-1/2 mt-4">
          <h1 className="text-xl font-bold text-zinc-700 mb-2">
            Chat Height (in % of total screen)
          </h1>
          <div className="flex pr-0 lg:pr-10">
            <input
              className="w-full h-10 mr-2 rounded-md border-1 outline-1 bg-slate-300 focus:outline-none px-3"
              type="number"
              placeholder={configData.chatheight}
              onChange={(e) => handleChatHeight(e.target.value)}
            />
          </div>
          {error.chatheight && (
            <h1 className="text-[10px] mt-1 text-red-600 mb-2">
              Lorem ipsuim dolor sit Lorem ipsuim dolor sit
            </h1>
          )}
        </div>
      </div>
      <div className="flex w-11/12 justify-between items-center mt-2">
        <div>
          <h1 className="text-xl font-bold text-zinc-700">Show Sources</h1>
        </div>
        <div>
          <div
            className={`toggle-switch ${
              configData.showsource ? "checked" : ""
            }`}
            onClick={handleToggle}
          >
            <div
              className={`switch-inner ${
                configData.showsource ? "checked" : ""
              }`}
            />
          </div>
        </div>
      </div>
      <hr className="w-full border-2 border-zinc-300 mt-4 mb-8" />
      <div className="w-full ">
        <h1 className="text-xl font-bold text-blue-800 mb-10">Chat Icon</h1>
        <div className="w-full h-2/3 flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <h1 className="text-xl font-bold text-zinc-700 mb-2">
              Chat Icon Size
            </h1>
            <div className="flex pr-0 lg:pr-10">
              <select
                className="w-full h-10 mr-2 rounded-md border-1 outline-1 bg-slate-300 focus:outline-none px-3"
                value={configData.chaticonsize}
                onChange={(e) => {
                  handleChatIconSize(e.target.value);
                }}
              >
                <option value="48">Small (48x48 px)</option>
                <option value="60">Medium (60x60 px)</option>
                <option value="90">Large (90x90 px)</option>
              </select>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-xl font-bold text-zinc-700 mb-2">
              Position on Screen
            </h1>
            <div className="flex pr-0 lg:pr-10">
              <select
                className="w-full h-10 mr-2 rounded-md border-1 outline-1 bg-slate-300 focus:outline-none px-3"
                value={configData.screenposistion}
                onChange={(e) => {
                  handleScreenPos(e.target.value);
                }}
              >
                <option value="bottom-right">Bottom Right</option>
                <option value="bottom-left">Bottom Left</option>
                <option value="top-right">Top Right</option>
                <option value="top-left">Top Left</option>
              </select>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-3">
            <h1 className="text-xl font-bold text-zinc-700 mb-2 mt-2">
              Distance from Bottom (in px)
            </h1>
            <div className="flex pr-0 lg:pr-10">
              <input
                className="w-full h-10 mr-2 rounded-md border-1 outline-1 bg-slate-300 focus:outline-none px-3"
                type="number"
                placeholder={configData.distanceBottom}
                onChange={(e) => handleBottomDist(e.target.value)}
              />
            </div>
            {error.distanceBottom && (
              <h1 className="text-[10px] mt-1 text-red-600 mb-2">
                Lorem ipsuim dolor sit Lorem ipsuim dolor sit
              </h1>
            )}
          </div>
          <div className="w-full lg:w-1/2 mt-3">
            <h1 className="text-xl font-bold text-zinc-700 mb-2 mt-2">
              Horizontal Distance (in px)
            </h1>
            <div className="flex pr-0 lg:pr-10">
              <input
                className="w-full h-10 mr-2 rounded-md border-1 outline-1 bg-slate-300 focus:outline-none px-3"
                type="number"
                placeholder={configData.distanceHorizontal}
                onChange={(e) => handleHorizontalDist(e.target.value)}
              />
            </div>
            {error.distanceHorizontal && (
              <h1 className="text-[10px] mt-1 text-red-600 mb-2">
                Lorem ipsuim dolor sit Lorem ipsuim dolor sit
              </h1>
            )}
          </div>
        </div>
        <h1 className="text-xl font-bold text-zinc-700 mb-2 mt-2">Bot Icon</h1>
        <div className="w-full flex items-center">
          {link ? (
            <img
              src={link}
              className="w-[70px] h-[70px] bg-zinc-300 rounded-full mr-4 object-cover"
            />
          ) : (
            <FaUserTie className="w-[70px] h-[70px] bg-zinc-300 text-zinc-500 rounded-full mr-4 p-3" />
          )}
          <div className="flex w-1/2 flex-col justify-center pt-4">
            <input
              type="file"
              id="imageUpload"
              hidden
              onChange={handleImageUpload}
            />
            <label
              htmlFor="imageUpload"
              className="w-full lg:w-1/3 h-10 bg-blue-700 hover:bg-blue-600  rounded-lg text-white flex justify-center items-center"
            >
              <span className="mr-2">Upload Image</span> <LuUpload />
            </label>
            {error.image && (
              <h1 className="text-[10px] text-red-600">
                file must be in jpg/jpeg/png format
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayComponent;
