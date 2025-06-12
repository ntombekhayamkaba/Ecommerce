import React, { useState } from "react";
import { MoveRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandle = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      const { token } = response.data;
      localStorage.setItem("token", token);
      navigate("/");
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center py-[30px]">
      <div className="max-w-[648px] w-full min-h-[382px] p-[31px] mx-auto flex items-center justify-center flex-col rounded-lg border-[1px] border-[#9a9caa] bg-white">
        <h3 className="text-3xl text-[#000000] font-semibold font-inter mb-5 capitalize">Login</h3>

        {error && <p className="text-red-500">{error}</p>}

        <form onSubmit={submitHandle} className="flex flex-col items-center w-full space-y-4">
         <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email..."
            className="w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5 placeholder-gray-600 text-black"
        />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your Password..."
              className="w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5 placeholder-gray-600 text-black"
            />

          <button
            type="submit"
            className="w-full h-[50px] bg-[#007580] text-white rounded-lg pl-3.5 text-base font-semibold font-inter capitalize flex items-center justify-center cursor-pointer gap-2.5"
          >
            Login <MoveRight />
          </button>
        </form>

        <p className="text-base text-[#000000] font-normal font-inter flex items-center justify-center gap-2.5 mt-4">
          Don't have an account?
          <Link to={"/auth/register"} className="text-[#007580] underline">Register</Link>
    
        </p>
      </div>
    </div>
  );
};

export default Login;
