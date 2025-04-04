"use client";

import React from "react";
import Link from "next/link";
import { FaApple, FaGoogle, FaTwitter } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-2xl font-semibold">Welcome back</h2>
        <p className="text-gray-600 text-sm mb-4">Please enter your details to sign in</p>
        
        <div className="flex justify-center gap-4 mb-4">
          <button className="p-3 bg-white rounded-lg shadow-md">
            <FaApple size={20} />
          </button>
          <button className="p-3 bg-white rounded-lg shadow-md">
            <FaGoogle size={20} className="text-blue-500" />
          </button>
          <button className="p-3 bg-white rounded-lg shadow-md">
            <FaTwitter size={20} className="text-blue-400" />
          </button>
        </div>

        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-2 text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>

        <input
          type="email"
          placeholder="E-mail Address"
          className="w-full p-2 mt-3 border rounded-lg focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mt-3 border rounded-lg focus:outline-none"
        />

        <div className="flex justify-between items-center mt-3">
          <label className="flex items-center text-sm text-gray-600">
            <input type="checkbox" className="mr-1" /> Remember Me
          </label>
          <Link href="/forgot-password" className="text-sm text-gray-500 hover:underline">
            Forget Password?
          </Link>
        </div>

        <button className="w-full bg-black text-white py-2 mt-4 rounded-lg">
          Sign In
        </button>

        <p className="text-sm text-gray-600 mt-4">
         {"Don't"} have an account yet? <Link href="/signup" className="text-black font-semibold hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
