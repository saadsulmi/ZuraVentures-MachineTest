import youtubeLogo from '../../assets/youtube.png'
import spotifyLogo from '../../assets/spotify.png'
import rssLogo from '../../assets/RSS.png'
const UploadTypeComponents = ({uploadFile}) => {
  return (
    <div className="w-full lg:w-11/12 h-2/5 lg:h-1/5 flex flex-col lg:flex-row mb-14 lg:mb-0">
     <div className="w-full lg:w-1/3 h-24 lg:h-[120px] rounded-lg border shadow-lg mr-4 border-gray-400 flex items-center p-4" onClick={()=>uploadFile({type:'youtube',logo:youtubeLogo})}>
                    <div className="w-16 h-16 rounded-full mr-4">
                        <img className="w-fit" src={youtubeLogo} alt="" />
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold">Upload</h1>
                        <h1 className="font-semibold">Youtube Video</h1>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 h-24 lg:h-[120px] rounded-lg border shadow-lg mr-4 border-gray-400 flex items-center p-4" onClick={()=>uploadFile({type:'spotify',logo:spotifyLogo})}>
                    <div className="w-16 h-16 rounded-full mr-4">
                        <img className="w-fit" src={spotifyLogo} alt="" />
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold">Upload</h1>
                        <h1 className="font-semibold">Spotify podcast</h1>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 h-24 lg:h-[120px] rounded-lg border shadow-lg border-gray-400 flex items-center p-4" onClick={()=>uploadFile({type:'RSS',logo:rssLogo})}>
                    <div className="w-16 h-16 rounded-full mr-4">
                        <img className="w-fit" src={rssLogo} alt="" />
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold">Upload</h1>
                        <h1 className="font-semibold">RSS Feed</h1>
                    </div>
                </div>
    </div>
  )
}

export default UploadTypeComponents