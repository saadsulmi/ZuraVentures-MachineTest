import { useState } from "react";
import { userRegister } from "../../services/API";
import { useDispatch } from "react-redux";
import { authUser } from "../../features/authReducer";
import { useNavigate } from "react-router-dom";

const RegisterComponent = () => {
  const [user, setUser] = useState({ username: "", email: "" });
  const [error, setError] = useState({ nameErr: false, emailErr: false });
  const dispatch = useDispatch();
  const navigate = useNavigate("");
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleRegister = () => {
    if (user.username && user.email) {
      let isValid = validateEmail(user.email);
      if (isValid) {
        userRegister(user).then((res) => {
          let data = JSON.stringify(res.data.token);
          localStorage.setItem("auth-data", data);
          dispatch(authUser(data));
          windows.location.reload();
        });
      } else {
        setError((prev) => ({ ...prev, emailErr: true }));
      }
    }
  };
  return (
    <>
      <div className="fixed w-full lg:w-full lg:h-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="absolute w-full h-full lg:w-1/3 lg:h-2/4 rounded-lg pt-7 bg-white shadow-lg flex flex-col items-center text-[rgb(126,34,206)] ">
          <h1 className="text-4xl capitalize font-bold mt-52 lg:mt-5">
            user registration
          </h1>
          <input
            className="w-4/5 h-[50px] rounded-lg mt-10 bg-white border border-1 border-slate-300 focus:outline-none focus:bg-slate-200 p-4"
            type="text"
            onChange={(e) => {
              setUser((prev) => ({ ...prev, username: e.target.value }));
            }}
            placeholder="Enter your username"
          />
          <input
            className="w-4/5 h-[50px] rounded-lg mt-6 bg-white border border-1 border-slate-300 focus:outline-none focus:bg-slate-200 p-4"
            type="text"
            onChange={(e) => {
              setUser((prev) => ({ ...prev, email: e.target.value }));
            }}
            placeholder="Enter your email"
          />
          <h1
            className={`mt-3 text-sm text-red-600 ${
              error.emailErr ? "" : "hidden"
            }`}
          >
            Please enter a valid email
          </h1>
          <button
            className="w-4/5 h-[50px] bg-blue-600 mt-6 duration-300 text-white rounded-lg hover:bg-blue-800"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default RegisterComponent;
