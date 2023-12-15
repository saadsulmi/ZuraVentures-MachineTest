import SideBarComponent from "../component/HeaderComponents/SideBarComponent"

const ProjectPage = () => {
  return (
    <div className="w-full h-[100vh] flex flex-row">
        <SideBarComponent/>
        <div className="w-9/12 h-[100vh] text-black">
            <div className="w-full flex justify-between">
                <div>
                    <h1>root</h1>
                </div>
                <div>
                    <h1>Settings</h1>
                    <h1>bellIcon</h1>
                </div>
            </div>
            <h1>Upload</h1>
            <div className="w-full">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <h1> or </h1>
            <div>
                <img src="" alt="" />
                <h1>Select a file or drag and drop here (Podcast Media or Transcription Text)</h1>
                <h1>MP4, MOV, MP3, WAV, PDF, DOCX or TXT file </h1>
                <button></button>
            </div>
        </div>
    </div>
  )
}

export default ProjectPage