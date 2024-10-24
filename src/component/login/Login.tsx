import axios from "axios";
import React, { useContext, useState } from "react";
import { FiEye } from "react-icons/fi";
import { baseApi } from "../../../config";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setSetPassword] = useState("");
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const hendleSummit = async () => {
    const authdata = {
      email: email,
      password: password,
    };
    try {
      const { data } = await axios.post(`${baseApi}/auth/login`, authdata);
      if (data?.token) {
        localStorage.setItem("accessToken", data.token);
        setToken(data.token);
        toast.success("login successFully ! ");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  return (
    <div className="font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
          <div className="md:max-w-md w-full px-4 py-4">
            <div>
              <div className="mb-12">
                <h3 className=" text-3xl font-extrabold">Sign in</h3>
              </div>

              <div>
                <p className=" text-xs block mb-2">Email</p>
                <div className="relative flex items-center">
                  <input
                    className="w-full p-2 bg-bodyColor outline-none border-gray-500 rounded border "
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-8">
                <p className="text-xs block mb-2">Password</p>
                <div className="relative flex items-center">
                  <input
                    className="w-full p-2 bg-bodyColor outline-none border-gray-500 rounded border"
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                    onChange={(e) => setSetPassword(e.target.value)}
                  />
                  <FiEye className="w-[18px] h-[18px] absolute right-2 cursor-pointer" />
                </div>
              </div>

              <div className="mt-12">
                <button
                  className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                  onClick={() => hendleSummit()}
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>

          <div className="md:h-full  rounded-xl lg:p-12 p-8">
            <img
              alt="login-image"
              className="w-full h-full object-contain"
              src="https://readymadeui.com/signin-image.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
