'use client'
import { motion } from 'framer-motion';

export default function GenerateNowPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-6 text-center"
            >
                Generate Now
            </motion.h1>
            <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
                <div className="w-full md:w-1/2">
                    <p className="mb-4 text-center">Write your thinking of what you want to generate below:</p>
                    <form className="mb-4">
                        <motion.input
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            type="text"
                            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2"
                            placeholder="Describe your image..."
                        />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="w-full mt-4 px-6 py-3 rounded-lg transition duration-300 ease-in-out bg-blue-500 text-white hover:bg-blue-600"
                        >
                            Generate
                        </motion.button>
                    </form>
                </div>
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="border-2 rounded-lg aspect-square flex items-center justify-center w-64 h-64 bg-opacity-80 dark:bg-opacity-80 bg-gray-100 dark:bg-gray-800"
                    >
                        <p className="text-lg">Your image will appear here</p>
                    </motion.div>
                </div>
            </div>
            <div className="mt-8 text-center">
                <p className="text-sm text-gray-600">Need help? Our team is here to support you!</p>
            </div>
        </div>
    );
}