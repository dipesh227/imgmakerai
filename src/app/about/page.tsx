'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-8 text-center"
      >
        About Our AI Image Generation Project
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-opacity-50shadow-slate-300 p-6 rounded-lg shadow-md dark:shadow-slate-300 shadow-slate-800 "
        >
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="mb-4 leading-relaxed">
            We are a team of passionate individuals working on an innovative AI image generation project. Our goal is to push the boundaries of artificial intelligence and create a tool that empowers creativity.
          </p>
          <p className="leading-relaxed">
            Through advanced machine learning algorithms and cutting-edge technology, we aim to revolutionize the way images are created and manipulated.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-opacity-50shadow-slate-300 p-6 rounded-lg shadow-md dark:shadow-slate-300 shadow-slate-800 "
        >
          <h2 className="text-3xl font-semibold mb-4">Our Approach</h2>
          <p className="mb-4 leading-relaxed">
            We believe in the power of collaboration and innovation. Our project combines state-of-the-art AI techniques with a user-friendly interface to make image generation accessible to everyone.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Utilizing advanced neural networks</li>
            <li>Implementing user feedback for continuous improvement</li>
            <li>Ensuring ethical and responsible AI development</li>
            <li>Striving for seamless integration with existing workflows</li>
          </ul>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 "
      >
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: 'Dipesh Joshi', role: 'Team Lead', image: 'https://avatars.githubusercontent.com/u/54115006?v=4' },
            { name: 'Bhaskar Bhatt', role: 'AI Engineer', image: '/path-to-bhaskar-image.jpg' },
            { name: 'Rudresh Manral', role: 'Frontend Developer', image: '/path-to-rudresh-image.jpg' },
            { name: 'Sohil Khan', role: 'Backend Developer', image: '/path-to-shohel-image.jpg' },
          ].map((member, index) => (
            <motion.div
              key={index}
              className="bg-opacity-50shadow-slate-300 p-6 rounded-lg shadow-md dark:shadow-slate-300 shadow-slate-800  text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image src={member.image} alt={member.name} width={128} height={128} className="rounded-full mx-auto mb-4 object-cover" />
              <h3 className="font-semibold text-xl">{member.name}</h3>
              <p className="text-opacity-80">{member.role}</p>
              <div className="mt-4 flex justify-center space-x-2">
                <a href="#" className="text-opacity-80 hover:text-opacity-100 transition-opacity">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" /></svg>
                </a>
                <a href="#" className="text-opacity-80 hover:text-opacity-100 transition-opacity">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" /></svg>
                </a>
                <a href="#" className="text-opacity-80 hover:text-opacity-100 transition-opacity">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl font-semibold mb-6">Connect With Us</h2>
        <p className="mb-6">
          We&apos;d love to hear your thoughts on our project! Reach out to us or check out our code repository.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="mailto:info@aiimageproject.com"
            className="bg-opacity-80 bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-opacity-100 transition-opacity flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
            Contact Us
          </a>
          <a
            href="https://github.com/your-repo-link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-opacity-80 bg-gray-800 dark:bg-gray-600 text-white px-6 py-3 rounded-full hover:bg-opacity-100 transition-opacity flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
            GitHub Repo
          </a>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <a href="#" className="text-opacity-80 hover:text-opacity-100 transition-opacity">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" /></svg>
          </a>


          <a href="#" className="text-opacity-80 hover:text-opacity-100 transition-opacity">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" /></svg>
          </a>
          <a href="#" className="text-opacity-80 hover:text-opacity-100 transition-opacity">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default About