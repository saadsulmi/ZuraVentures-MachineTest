import { useEffect } from "react";
import { useState } from "react";
import { getUserDetails, updateUser } from "../../services/API";
import logo from "../../assets/spotify.png";
import ToastifyComponent from "../BoilerPlates/ToastifyComponent";

const EditProfileComponent = ({ handleLoading }) => {
  const [userData, setUserData] = useState({});
  const [toast, setToast] = useState({ message: "", status: 0 });
  const [newuserName, setNewUserName] = useState("");
  const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    getUserDetails().then((res) => {
      console.log(res.data.userData);
      handleLoading(false);
      setUserData(res.data.userData);
      setNewUserName(res.data.userData.username);
    });
  }, []);
  const handleSubmit = () => {
    setSpinner(true);
    const data = {
      email: userData.email,
      username: newuserName,
    };
    updateUser(data)
      .then((res) => {
        console.log(res.data);
        setToast((prev) => ({
          ...prev,
          message: "username updated successfully",
          status: 200,
        }));
        setUserData(res.data.userDetails);
        setTimeout(() => {
          setToast((prev) => ({ ...prev, message: "", status: 0 }));
        }, 200);
      })
      .catch((e) => {
        setToast((prev) => ({
          ...prev,
          message: "something went wrong",
          status: 400,
        }));
      });
  };
  return (
    <>
      <div className="w-full h-80">
        <div className="w-full h-40 flex items-center justify-between pr-10">
          <img
            className="bg-zinc-300 w-36 h-36 p-4 rounded-full"
            src={
              userData.img
                ? userData.img
                : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
            }
            alt="userProfile"
          />
          <div className="w-1/3 flex flex-col">
            <label
              className="mt-3 text-xl font-bold text-zinc-700"
              htmlFor="username"
            >
              User Name
            </label>
            <input
              className="w-full h-10 rounded-lg border text-zinc-700 border-gray-400 bg-white focus:outline-none p-3 mt-1"
              value={newuserName}
              type="text"
              id="username"
              onChange={(e) => {
                setNewUserName(e.target.value);
              }}
            />
          </div>
          <div className="w-1/3 flex flex-col">
            <label
              className="mt-3 text-xl font-bold text-zinc-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full h-10 rounded-lg border text-zinc-500 border-gray-400 bg-zinc-200 focus:outline-none p-3 mt-1"
              type="text"
              value={userData.email}
              id="email"
              disabled
            />
          </div>
        </div>
        <div className="w-full h-20 flex flex-col items-end pr-10">
          <button
            className={`${
              newuserName === userData.username ? "hidden" : ""
            } w-1/5 h-10 rounded-lg bg-blue-900 hover:bg-blue-700 text-white`}
            onClick={handleSubmit}
          >
            {" "}
            Save Change
          </button>
        </div>
        <h1 className="text-2xl font-bold text-blue-800 mb-3">Subscriptions</h1>
        <div className="w-full pr-10 mb-8">
          <div className="flex w-full bg-blue-950 h-16 rounded-lg justify-between px-10 items-center">
            <h1 className="text-white">
              You are currently on the{" "}
              <span className="underline font-bold">Ques AI Basic Plan!</span>
            </h1>
            <button className="bg-white w-40 h-10 rounded-lg text-blue-800">
              Upgrade
            </button>
          </div>
        </div>
        <h1 className="text-red-600 underline font-semibold">
          Cancel Subscription
        </h1>
      </div>
      <ToastifyComponent message={toast.message} status={toast.status} />
    </>
  );
};

export default EditProfileComponent;
