import React from 'react';
import MyContainer from '../components/MyContainer';
import { FcGoogle } from 'react-icons/fc';
import { Link } from "react-router";

const Signup = () => {
    return (
       <div className="min-h-md flex items-center justify-center bg-gradient-to-r from-green-200 via-blue-200 to-purple-300 p-6">
      <MyContainer>
        {/* autofill fixed */}
        <style>
          {`
      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      input:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0px 1000px white inset !important;
        -webkit-text-fill-color: #000 !important;
      }
    `}
        </style>
        <div className="w-full mx-auto max-w-md bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Sign Up
          </h2>
          <form className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block mb-1 text-gray-600 font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                className="input input-bordered w-full bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-gray-600 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="block mb-1 text-gray-600 font-medium">
                Photo URL
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Enter photo URL"
                className="input input-bordered w-full bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block mb-1 text-gray-600 font-medium">
                Password
              </label>
              <input
                name="password"
                placeholder="Enter password"
                className="input input-bordered w-full bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <span
                className="absolute right-3 top-1/2 transform translate-y-2 cursor-pointer text-gray-600 z-10 bg-white w-7"
              >
              </span>
            </div>

            <button className="btn btn-primary w-full">Sign Up</button>
          </form>
           <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="mx-2 text-gray-500">OR</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* google signup button */}
          <button
            type="button"
            className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          >
            <FcGoogle className="mr-2 text-2xl" />
            Sign in with Google
          </button>

          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </MyContainer>
    </div>
    );
};

export default Signup;