'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaTruck, FaClock, FaShieldAlt, FaRoute, FaTemperatureHigh, FaBox, FaIndustry, FaArrowRight } from 'react-icons/fa';

export default function ServicesPage() {
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
                        Our Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl max-w-3xl mx-auto"
                    >
                        Discover our comprehensive range of reliable transportation solutions tailored to your business needs
                    </motion.p>
                </div>
            </section>

            {/* Core Services */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center mb-4"
                    >
                        Transportation Solutions
                    </motion.h2>

                    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                        ShodExpress offers a wide range of transportation services to meet the diverse needs of our clients across various industries.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                        >
                            <div className="relative h-60 w-full">
                                <Image
                                    src="/images/service-1.jpg" // We'll add this image later
                                    alt="Full Truckload"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <FaTruck className="text-primary text-2xl mr-3" />
                                    <h3 className="text-xl font-semibold">Full Truckload (FTL)</h3>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Dedicated transport for shipments that require a full trailer, providing direct delivery from pickup to destination with no additional handling.
                                </p>
                                <ul className="space-y-2 mb-4">
                                    <li className="flex items-start">
                                        <FaArrowRight className="text-primary mt-1 mr-2" />
                                        <span>Efficient point-to-point transportation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FaArrowRight className="text-primary mt-1 mr-2" />
                                        <span>Minimized handling and transit time</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FaArrowRight className="text-primary mt-1 mr-2" />
                                        <span>Ideal for time-sensitive or high-volume shipments</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Service 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                        >
                            <div className="relative h-60 w-full">
                                <Image
                                    src="/images/service-2.jpg" // We'll add this image later
                                    alt="Less Than Truckload"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <FaBox className="text-primary text-2xl mr-3" />
                                    <h3 className="text-xl font-semibold">Less Than Truckload (LTL)</h3>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Cost-effective solution for smaller shipments that don't require a full trailer, with consolidated transport alongside other shipments.
                                </p>
                                <ul className="space-y-2 mb-4">
                                    <li className="flex items-start">
                                        <FaArrowRight className="text-primary mt-1 mr-2" />
                                        <span>Economical for smaller shipments</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FaArrowRight className="text-primary mt-1 mr-2" />
                                        <span>Reduced transportation costs</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FaArrowRight className="text-primary mt-1 mr-2" />
                                        <span>Flexible shipping options</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Service 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                        >
                            <div className="relative h-60 w-full">
                                <Image
                                    src="/images/service-3.jpg" // We'll add this image later
                                    alt="Expedited Shipping"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <FaClock className="text-primary text-2xl mr-3" />
                                    <h3 className="text-xl font-semibold">Expedited Shipping</h3>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Premium service with faster transit times for urgent shipments, ensuring your time-critical freight arrives on schedule.
                                </p>
                                <ul className="space-y-2 mb-4">
                                    <li className="flex items-start">
                                        <FaArrowRight className="text-primary mt-1 mr-2" />
                                        <span>Faster transit times</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FaArrowRight className="text-primary mt-1 mr-2" />
                                        <span>Priority handling for urgent freight</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FaArrowRight className="text-primary mt-1 mr-2" />
                                        <span>Real-time tracking and updates</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Specialized Services */}
            <section className="py-16 bg-light">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center mb-4"
                    >
                        Specialized Services
                    </motion.h2>

                    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                        Our specialized transportation services cater to unique requirements and industry-specific needs.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Specialized Service 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden"
                        >
                            <div className="md:w-2/5">
                                <div className="relative h-60 md:h-full w-full">
                                    <Image
                                        src="/images/specialized-1.jpg" // We'll add this image later
                                        alt="Temperature Controlled"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="md:w-3/5 p-6">
                                <div className="flex items-center mb-3">
                                    <FaTemperatureHigh className="text-primary text-2xl mr-3" />
                                    <h3 className="text-xl font-semibold">Temperature-Controlled Transport</h3>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Specialized transport for temperature-sensitive goods, maintaining precise temperature conditions throughout transit.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <FaArrowRight className="text-primary mt-1 mr-2" />
                                        <span>Precise temperature monitoring</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FaArrowRight className="text-primary mt-1 mr-2" />
                                        <span>Ideal for food, pharmaceuticals, and chemicals</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FaArrowRight className="text-primary mt-1 mr-2" />
                                        <span>Compliance with industry regulations</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Specialized Service 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden"
                        >
                            <div className="md:w-2/5">
                                <div className="relative h-60 md:h-full w-full">
                                    <Image
                                        src="/images/specialized-2.jpg" // We'll add this image later
                                        alt="Hazardous Materials"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="md:w-3/5 p-6">
                                <div className="flex items-center mb-3">
                                    <FaShieldAlt className="text-primary text-2xl mr-3" />
                                    <h3 className="text-xl font-semibold">Hazardous Materials Transport</h3>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Certified transportation for hazardous materials with strict adherence to safety regulations and specialized handling procedures.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <FaArrowRight className="text-primary mt-1 mr-2" />
                                        <span>DOT-certified drivers and equipment</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FaArrowRight className="text-primary mt-1 mr-2" />
                                        <span>Proper documentation and placarding</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FaArrowRight className="text-primary mt-1 mr-2" />
                                        <span>Compliance with federal and state regulations</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center mb-12"
                    >
                        Additional Services
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Additional Service 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-lg shadow-md text-center"
                        >
                            <div className="text-primary text-4xl mb-4 flex justify-center">
                                <FaRoute />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Route Optimization</h3>
                            <p className="text-gray-600">
                                Advanced routing technology to minimize transit times, reduce fuel consumption, and ensure on-time deliveries.
                            </p>
                        </motion.div>

                        {/* Additional Service 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-lg shadow-md text-center"
                        >
                            <div className="text-primary text-4xl mb-4 flex justify-center">
                                <FaIndustry />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Industry-Specific Solutions</h3>
                            <p className="text-gray-600">
                                Tailored transportation solutions for unique industry requirements, including retail, manufacturing, and agriculture.
                            </p>
                        </motion.div>

                        {/* Additional Service 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-lg shadow-md text-center"
                        >
                            <div className="text-primary text-4xl mb-4 flex justify-center">
                                <FaShieldAlt />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Cargo Insurance</h3>
                            <p className="text-gray-600">
                                Comprehensive insurance coverage for your valuable freight, providing peace of mind during transit.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary text-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-6">Ready to Ship With Us?</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Contact us today to discuss your transportation needs and receive a customized quote.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="/contact"
                                className="px-6 py-3 bg-white text-primary hover:bg-gray-100 font-medium rounded-md transition-colors duration-300"
                            >
                                Get a Quote
                            </Link>
                            <Link
                                href="/contact"
                                className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-primary font-medium rounded-md transition-colors duration-300"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
} 