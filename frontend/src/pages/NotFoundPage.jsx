import { useState } from "react";
import Logo from "../assets/lamaLogo.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFoundPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-full md:w-2/3 h-full md:h-4/5 flex flex-col justify-center items-center bg-blue-200 rounded-xl">
        <img src={Logo} className="mb-3 -mt-7" alt="" />
        <h1 className="text-6xl font-bold ">404 Page Not Found</h1>
        <h1 className="text-sm font-bold mt-4">
          you will be redirected to Home page in few seconds
        </h1>
      </div>
    </div>
  );
};

export default NotFoundPage;
