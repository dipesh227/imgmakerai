import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/2">
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Name:</label>
                            <Input type="text" id="name" name="name" required className="w-full" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email:</label>
                            <Input type="email" id="email" name="email" required className="w-full" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message:</label>
                            <Textarea id="message" name="message" required className="w-full h-32" />
                        </div>
                        <Button type="submit" className="w-full">Send Message</Button>
                    </form>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">Contact Details</h2>
                        <p>Tanakpur, Champawat, Uttarakhand, India</p>
                        <p>Phone: +91 123 456 7890</p>
                        <p>Email: info@example.com</p>
                    </div>
                    <div className="mt-6">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55944.00073826903!2d80.07679664863282!3d29.073453400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0c2c5d4e5a8b7%3A0x7f82be3d8c0c1f1d!2sTanakpur%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1652345678901!5m2!1sen!2sin"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}