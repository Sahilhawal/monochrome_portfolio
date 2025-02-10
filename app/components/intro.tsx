"use client";
// pages/index.js
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Intro() {
  const calculateYOE = () => {
    const careerStartDate = new Date("1-03-2019");
    const todaysDate = new Date();
    const yearsDiff = todaysDate.getFullYear() - careerStartDate.getFullYear();
    const monthsDiff = todaysDate.getMonth() - careerStartDate.getMonth();

    return Math.floor((yearsDiff * 12 + monthsDiff) / 12);
  };

  return (
    <section className="bg-black h-screen flex flex-col md:flex-row-reverse justify-between ">
      <div className="w-full h-1/2 flex items-center justify-center m-auto">
        <div>
          <h1 className="text-5xl mb:text-9xl font-bold">Sahil Hawal</h1>
          <p className="text-xl mb:text-4xl text-blue-500">Software Engineer</p>
          <p className="text-lg max-w-2xl mt-4">
            Hi! I am a software engineer with {calculateYOE()}+ years of
            experience in developing web applications and backend systems. I
            enjoy planning and building things, and I am always up for exploring
            new technologies.
          </p>
        </div>
      </div>

      <div className="relative w-full h-[300px] md:h-[500px] md:self-end">
        <div className="absolute top-2 left-1/4 md:left-1/2 md:top-10">
          <div className="bg-white p-4 rounded-lg">
            <p className="text-gray-800">{"btw, I use vim"}</p>
          </div>
          <div className="w-0 h-0 border-t-8 border-transparent border-solid border-white"></div>
        </div>
        <Image
          width={204}
          height={250}
          src="/sahil.png"
          alt="Sahil Hawal"
          className="absolute bottom-0 left-0 w-auto md:h-full object-contain"
        />
      </div>
    </section>
  );
}
