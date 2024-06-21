"use client";
import React from "react";
import Login from "./Login";
import { GraphAnimation, RupeeAnimation } from "./LoginAnimation";

const HeroLoginPage = () => {
  return (
    <>
      <div className="h-screen md:py-12 bg-gray-100 darks:bg-gray-900 darks:bg-opacity-40 flex items-center justify-center">
        <div className="md:w-1/2">
          <Login />
        </div>
      </div>
    </>
  );
};

export default HeroLoginPage;
