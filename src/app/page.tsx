'use client'
import React from "react";
import Spline from '@splinetool/react-spline/next';
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col md:flex-row h-screen overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-4 md:space-y-6 p-4 md:p-8 mt-8 md:mt-0"
      >
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-extrabold"
          >
            Stable Image
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-sm sm:text-base text-center text-gray-600 dark:text-gray-400 max-w-md px-4"
        >
          Experience the power of AI-driven image generation with our cutting-edge stable diffusion technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="w-full max-w-xs"
        >
          <Link href="/generatenow" className="block">
            <motion.button
              className="w-full mt-2 md:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgb(59, 130, 246)",
                textShadow: "0px 0px 8px rgb(255, 255, 255)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ background: "rgb(37, 99, 235)" }}
              animate={{ background: ["rgb(37, 99, 235)", "rgb(29, 78, 216)", "rgb(37, 99, 235)"] }}
              transition={{
                background: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                scale: { type: "spring", stiffness: 400, damping: 10 }
              }}
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-full"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative w-full h-full"
        >
          <Spline scene="https://prod.spline.design/DgMoRWma4PuKsNaO/scene.splinecode" className="absolute inset-0 w-full h-full z-0" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            <span className="text-2xl font-bold text-white"></span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
