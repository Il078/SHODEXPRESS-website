'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCheckCircle } from 'react-icons/fa';

// Form validation schema
const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    phone: yup.string().required('Phone number is required'),
    subject: yup.string().required('Subject is required'),
    message: yup.string().required('Message is required')
});

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: any) => {
        console.log(data);
        // Here you would typically send the data to your backend
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            reset();
        }, 5000);
    };

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-primary">
                <div className="container mx-auto px-4 text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl max-w-3xl mx-auto"
                    >
                        Get in touch with our team for inquiries, quotes, or any questions you may have.
                    </motion.p>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-16 bg-light">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Location */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white p-6 rounded-lg shadow-md text-center"
                        >
                            <div className="text-primary text-4xl mb-4 flex justify-center">
                                <FaMapMarkerAlt />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Our Location</h3>
                            <p className="text-gray-600">
                                6854 Founders Row, West Chester, Ohio 45069, United States
                            </p>
                        </motion.div>

                        {/* Phone */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-white p-6 rounded-lg shadow-md text-center"
                        >
                            <div className="text-primary text-4xl mb-4 flex justify-center">
                                <FaPhone />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Phone Number</h3>
                            <p className="text-gray-600">
                                <a href="tel:+15134400406" className="hover:text-primary">+1 (513) 440-0406</a>
                            </p>
                        </motion.div>

                        {/* Email */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white p-6 rounded-lg shadow-md text-center"
                        >
                            <div className="text-primary text-4xl mb-4 flex justify-center">
                                <FaEnvelope />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Email Address</h3>
                            <p className="text-gray-600">
                                <a href="mailto:dispatch@shodexpress.com" className="hover:text-primary">dispatch@shodexpress.com</a>
                            </p>
                        </motion.div>

                        {/* Hours */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-white p-6 rounded-lg shadow-md text-center"
                        >
                            <div className="text-primary text-4xl mb-4 flex justify-center">
                                <FaClock />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Working Hours</h3>
                            <p className="text-gray-600">
                                Monday - Friday: 8:00 AM - 6:00 PM<br />
                                Saturday: 9:00 AM - 2:00 PM<br />
                                Sunday: Closed
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Form and Map */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                            <p className="text-gray-600 mb-8">
                                Fill out the form below and our team will get back to you as soon as possible.
                            </p>

                            {isSubmitted && (
                                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6 flex items-center">
                                    <FaCheckCircle className="text-green-500 mr-3" />
                                    <span>Thank you! Your message has been sent successfully.</span>
                                </div>
                            )}

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name */}
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-700">Your Name *</label>
                                        <input
                                            type="text"
                                            {...register('name')}
                                            className={`w-full p-2.5 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                        />
                                        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-700">Your Email *</label>
                                        <input
                                            type="email"
                                            {...register('email')}
                                            className={`w-full p-2.5 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                        />
                                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Phone Number *</label>
                                    <input
                                        type="tel"
                                        {...register('phone')}
                                        className={`w-full p-2.5 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                    />
                                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Subject *</label>
                                    <input
                                        type="text"
                                        {...register('subject')}
                                        className={`w-full p-2.5 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                                    />
                                    {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>}
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Message *</label>
                                    <textarea
                                        rows={5}
                                        {...register('message')}
                                        className={`w-full p-2.5 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                                    ></textarea>
                                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-md transition-colors duration-300"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </motion.div>

                        {/* Map */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-3xl font-bold mb-6">Our Location</h2>
                            <p className="text-gray-600 mb-8">
                                Visit our office in West Chester, Ohio or contact us directly for any inquiries.
                            </p>
                            <div className="h-[400px] rounded-lg overflow-hidden shadow-md">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3087.5677686057246!2d-84.44245312426516!3d39.29992847135961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8840533a16bdb43d%3A0xf97e6c11ebed29f8!2s6854%20Founders%20Row%2C%20West%20Chester%20Township%2C%20OH%2045069!5e0!3m2!1sen!2sus!4v1715318436619!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
} 