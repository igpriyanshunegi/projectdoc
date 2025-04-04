"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
function Home() {
  return (
    <div
      className="w-full h-full py-40 font-semibold flex flex-col justify-center items-center"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(184, 183, 183, 0.2) 1.5px, transparent 1.5px), linear-gradient(to bottom, rgba(174, 169, 169, 0.2) 1.5px, transparent 1.5px)",
        backgroundSize: "200px 200px",
      }}
    >
      <button className='fixed right-36 top-8 border px-2 py-1 font-semibold text-gray-700 transition delay-50 duration-300 ease-in-out rounded-md hover:bg-slate-100 '>  <Link href="/register">Register</Link> </button>
            <button className='fixed right-12 top-8 text-blue-500 font-semibold flex gap-1 px-2 py-1 transition delay-50 duration-300 ease-in-out hover:text-blue-600 '> <Link href="/login"> <span>Login</span></Link><ArrowRight width={20} /></button>
      <div>

        <h1 className="text-8xl text-gray-700  px-8 lg:px-16 xl:px-80 text-center">
          Turn Chaos into Clarity Manage Your Tasks with Ease
        </h1>
      </div>
      <div className="pt-6 text-lg text-gray-700 px-8 lg:px-16 xl:px-80 text-center">
        <p>
          Stay organized and in control with ease. Break down your tasks and
          turn your goals into achievable steps
        </p>
      </div>
      <div className="pt-6">
        <Link href="/documents/123">
          <button className="bg-sky-500 py-2 px-4 rounded-md text-gray-100 shadow-lg">
            Get started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
