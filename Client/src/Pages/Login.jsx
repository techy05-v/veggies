import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import ApiService from "../services/api";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      setLoading(true);

      console.log("Google Response:", credentialResponse);

      const response = await ApiService.post("/auth/google", {
        token: credentialResponse.credential,
      });

      console.log(response.data);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      alert("Login Successful");
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Google Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center text-white text-3xl">
            🥗
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center text-gray-800">
          VeggieBites
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Welcome Back
        </p>

        <div className="mt-8">
          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mt-2 p-3 rounded-lg border"
          />
        </div>

        <div className="mt-5">
          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full mt-2 p-3 rounded-lg border"
          />
        </div>

        <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg">
          Login
        </button>

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>

          <span className="px-3 text-gray-500">
            OR
          </span>

          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => alert("Google Login Failed")}
          />
        </div>

        {loading && (
          <p className="text-center mt-4 text-green-600">
            Signing in...
          </p>
        )}

        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?
          <span className="text-green-600 ml-1 cursor-pointer">
            Register
          </span>
        </p>

      </div>
    </div>
  );
};

export default Login;