import { Player } from "@lottiefiles/react-lottie-player";
import loader from "../../assets/LoaderAnimation - 1702636213469.json";

const LoaderComponent = ({ initial }) => {
  return (
    <div className="absolute w-full h-full flex justify-center bg-white items-center">
      <Player
        autoplay
        loop
        src={loader}
        style={{ height: "300px", width: "300px" }}
      ></Player>
    </div>
  );
};

export default LoaderComponent;
