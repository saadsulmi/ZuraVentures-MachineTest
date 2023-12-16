import { Player } from '@lottiefiles/react-lottie-player';
import podcast from '../../assets/Animation - 1702617371672.json'
import { IoIosAddCircle } from "react-icons/io";

const InitialLandingComponent = ({handleCreateProject}) => {

  return (
                <>
                <h1 className="text-5xl text-blue-700 font-extrabold mt-4 capitalize">create new project</h1>
                <div className="w-1/5 mt-10">
                    <Player
                    autoplay
                    loop
                    src={podcast}
                    style={{ height: '300px', width: '300px' }}
                    >
                    </Player>
                </div>
                <h1 className="text-xl w-3/5 text-[rgb(99,135,167)] text-center mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</h1>
                <button className="capitalise mt-6 w-1/4 h-[50px] rounded-lg text-white font-bold bg-[rgb(33,25,53)] capitalize hover:bg-[rgb(54,41,86)] flex justify-center items-center" onClick={handleCreateProject}><IoIosAddCircle className='text-2xl font-bold' /><span className='ml-4'>create new project</span></button>
            </>
  )
}

export default InitialLandingComponent