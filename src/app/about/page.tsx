'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaTruck, FaUsers, FaHandshake, FaStar } from 'react-icons/fa';

export default function AboutPage() {
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
                        About ShodExpress
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl max-w-3xl mx-auto"
                    >
                        Learn about our history, mission, and the team behind our reliable transportation services
                    </motion.p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                            <p className="text-gray-700 mb-4">
                                Founded in 2023, SHOD EXPRESS LLC was established by a group of trucking industry
                                veterans who saw an opportunity to provide a higher level of service to clients.
                                Starting with just three trucks and a commitment to excellence, we've grown to become
                                a trusted name in the transportation industry.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Our founders recognized that many transportation companies were struggling to
                                deliver reliable service while maintaining competitive pricing. With decades of
                                combined experience, they created ShodExpress with a mission to revolutionize
                                the industry by focusing on reliability, customer satisfaction, and technological innovation.
                            </p>
                            <p className="text-gray-700">
                                Today, we operate a modern fleet of trucks and serve clients across the United States,
                                while remaining true to our original vision of providing exceptional service at
                                competitive rates.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                                <Image
                                    src="/images/company-story.jpg" // We'll add this image later
                                    alt="ShodExpress Company Story"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-16 bg-light">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center mb-12"
                    >
                        Our Core Values
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-lg shadow-md text-center"
                        >
                            <div className="text-primary text-4xl mb-4 flex justify-center">
                                <FaTruck />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Reliability</h3>
                            <p className="text-gray-600">
                                We deliver on our promises, ensuring your cargo arrives safely and on time, every time.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-lg shadow-md text-center"
                        >
                            <div className="text-primary text-4xl mb-4 flex justify-center">
                                <FaHandshake />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                            <p className="text-gray-600">
                                We conduct business with honesty, transparency, and a strong ethical foundation.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-lg shadow-md text-center"
                        >
                            <div className="text-primary text-4xl mb-4 flex justify-center">
                                <FaStar />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                            <p className="text-gray-600">
                                We strive for excellence in every aspect of our operations, continually improving our service.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-lg shadow-md text-center"
                        >
                            <div className="text-primary text-4xl mb-4 flex justify-center">
                                <FaUsers />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Teamwork</h3>
                            <p className="text-gray-600">
                                We foster collaboration among our team members to deliver the best possible service to our clients.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Team */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center mb-4"
                    >
                        Our Leadership Team
                    </motion.h2>

                    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                        Meet the experienced professionals who lead ShodExpress with a commitment to excellence and innovation.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Team Member 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                        >
                            <div className="relative h-80 w-full">
                                <Image
                                    src="/images/team-member-1.jpg" // We'll add this image later
                                    alt="Team Member"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-1">John Doe</h3>
                                <p className="text-primary mb-3">Chief Executive Officer</p>
                                <p className="text-gray-600">
                                    With over 20 years of experience in the transportation industry, John brings a wealth of knowledge and leadership to ShodExpress.
                                </p>
                            </div>
                        </motion.div>

                        {/* Team Member 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                        >
                            <div className="relative h-80 w-full">
                                <Image
                                    src="/images/team-member-2.jpg" // We'll add this image later
                                    alt="Team Member"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-1">Jane Smith</h3>
                                <p className="text-primary mb-3">Operations Director</p>
                                <p className="text-gray-600">
                                    Jane oversees all operational aspects of ShodExpress, ensuring efficient and reliable service delivery to our clients.
                                </p>
                            </div>
                        </motion.div>

                        {/* Team Member 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                        >
                            <div className="relative h-80 w-full">
                                <Image
                                    src="/images/team-member-3.jpg" // We'll add this image later
                                    alt="Team Member"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-1">Michael Johnson</h3>
                                <p className="text-primary mb-3">Fleet Manager</p>
                                <p className="text-gray-600">
                                    Michael is responsible for maintaining our modern fleet of trucks, ensuring they are safe, efficient, and environmentally friendly.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-16 bg-primary text-white text-center">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                        <p className="text-xl mb-0">
                            "To provide reliable, efficient, and cost-effective transportation solutions that exceed
                            our clients' expectations while maintaining the highest standards of safety, integrity,
                            and environmental responsibility."
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
} 