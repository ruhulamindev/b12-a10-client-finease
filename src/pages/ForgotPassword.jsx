import React from 'react';
import MyContainer from './../components/MyContainer';
import { Link } from "react-router";

const ForgotPassword = () => {
    return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-200 via-purple-200 to-pink-200 p-6">
      <MyContainer>
        <div className="bg-white shadow-xl rounded-2xl w-full mx-auto max-w-md p-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-purple-600">
            Forgot Password
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-600 font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition"
            >
              Reset Password
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link
              to="/login"
              className="text-red-500 hover:underline font-medium"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </MyContainer>
    </div>
    );
};

export default ForgotPassword;