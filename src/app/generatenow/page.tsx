'use client'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"

import { motion } from 'framer-motion';
import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Image from "next/image";

const formSchema = z.object({
    prompt: z.string().min(7, { message: "Prompt must be at least 7 characters" })
})

export default function GenerateNowPage() {
    const [outputImg, setOutputImg] = useState<string | null>(null)
    // const [loding, setLoding] = useState<boolean>(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: "",
        },
    })
    async function onSubmit(values: z.infer<typeof formSchema>) {
        const response = await fetch("/api/image", {
            method: "POST",
            body: JSON.stringify(values),
        });
        const data = await response.json()

        setOutputImg(data.url)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center min-h-screen w-full px-4"
        >
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl font-bold mb-6 text-center"
            >
                Generate Now
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-6xl"
            >
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="w-full md:w-[45%] flex flex-col items-center justify-center"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mb-4 text-center"
                    >
                        Write your thinking of what you want to generate below:
                    </motion.p>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full max-w-md">
                            <FormField
                                control={form.control}
                                name="prompt"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <motion.input
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: 0.6 }}
                                                type="text"
                                                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2"
                                                placeholder="Describe your image..."
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="w-full mt-4 px-6 py-3 rounded-lg transition duration-300 ease-in-out bg-blue-500 text-white hover:bg-blue-600"
                            >
                                Generate
                            </motion.button>
                        </form>
                    </Form>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="w-full md:w-[45%] p-2.5"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="w-[calc(100%-20px)] h-[calc(100%-20px)] border-2 rounded-lg aspect-square flex items-center justify-center bg-opacity-80 dark:bg-opacity-80 bg-gray-100 dark:bg-gray-800"
                    >
                        {outputImg
                            ? (<Image alt="Your image will appear here" src={outputImg} width={480} height={480} className="w-full h-full object-cover rounded-lg" />)
                            : (<p className="text-lg">Your image will appear here</p>)
                        }
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="mt-8 text-center"
            >
                <p className="text-sm text-gray-600">Need help? Our team is here to support you!</p>
            </motion.div>
        </motion.div>
    );
}