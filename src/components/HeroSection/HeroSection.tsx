"use client";

import monir from "@/assets/images/Monirul.jpg";

import React from "react";
import { motion } from "framer-motion"; // Optional for animations
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900"></div>

      <div className="relative  mx-auto px-[5%]  py-12 ">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 ">
          {/* Text content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Hi, I&apos;m{" "}
              <span className="text-orange-500">Monirul Hassan</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              MERN Stack Developer specializing in modern web applications with
              React, Next.js, and Node.js.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#project">
                <button className="px-8 py-2  border-2 border-orange-500 bg-orange-500 hover:bg-transparent hover:text-orange-500 text-white  rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                  View My Work
                </button>
              </a>
              <a href="#contact">
                <button className="px-8 py-2 border-2 border-orange-500 text-orange-500  dark:text-orange-500 dark:hover:text-white dark:border-orange-500 font-medium rounded-lg hover:bg-orange-500  hover:text-white transition duration-300">
                  Contact Me
                </button>
              </a>
            </motion.div>

            {/* Tech stack icons - optional */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 flex flex-wrap justify-center lg:justify-start gap-4"
            >
              {[
                { name: "React", icon: "⚛️" },
                { name: "Next.js", icon: "⏭️" },
                { name: "Node.js", icon: "🟢" },
                { name: "MongoDB", icon: "🍃" },
                { name: "TypeScript", icon: "TS" },
              ].map((tech) => (
                <span
                  key={tech.name}
                  className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  <span className="mr-2">{tech.icon}</span>
                  {tech.name}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Image/illustration */}
          <div className=" flex justify-end mt-12 lg:mt-0 ">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
            >
              <div className="absolute inset-0 bg-gray-400 dark:bg-gray-700 rounded-2xl shadow-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-gray-300 dark:border-gray-600 rounded-2xl"></div>

              {/* Replace this with your image or illustration */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <Image
                  className="rounded-2xl"
                  src={monir}
                  alt="Monir"
                  width={300}
                  height={300}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
