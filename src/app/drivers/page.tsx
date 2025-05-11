'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FaTruck, FaCheckCircle, FaUser, FaPhone, FaEnvelope, FaIdCard, FaCalendar, FaFileAlt } from 'react-icons/fa';

// Form validation schema
const schema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    phone: yup.string().required('Phone number is required'),
    address: yup.string().required('Address is required'),
    city: yup.string().required('City is required'),
    state: yup.string().required('State is required'),
    zip: yup.string().required('ZIP code is required'),
    driverLicense: yup.string().required('Driver\'s license number is required'),
    driverLicenseState: yup.string().required('Driver\'s license state is required'),
    experience: yup.number().required('Years of experience is required'),
    cdlClass: yup.string().required('CDL class is required'),
    dob: yup.string().required('Date of birth is required'),
    acceptTerms: yup.boolean().oneOf([true], 'You must accept the terms and conditions')
});

export default function DriversPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: any) => {
        console.log(data);
        // Here you would typically send the data to your backend
        // For now, we'll just set the submitted state to display a success message
        setIsSubmitted(true);
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
                        Join Our Team of Professional Drivers
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl max-w-3xl mx-auto"
                    >
                        At ShodExpress LLC, we value our drivers and provide competitive compensation, benefits, and a supportive work environment.
                    </motion.p>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-light">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Drive With Us?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-lg shadow-md"
                        >
                            <div className="text-primary text-4xl mb-4">
                                <FaTruck />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Modern Fleet</h3>
                            <p className="text-gray-600">
                                Drive well-maintained, late-model trucks equipped with the latest technology for comfort and safety.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-lg shadow-md"
                        >
                            <div className="text-primary text-4xl mb-4">
                                <FaCheckCircle />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Competitive Pay</h3>
                            <p className="text-gray-600">
                                Earn competitive wages with regular increases based on performance and experience.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-lg shadow-md"
                        >
                            <div className="text-primary text-4xl mb-4">
                                <FaUser />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Driver Support</h3>
                            <p className="text-gray-600">
                                Enjoy 24/7 support from our dedicated team to ensure your success on the road.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Application Form Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-4">Driver Application</h2>
                    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6">
                        Fill out the form below to apply for a driving position with ShodExpress LLC.
                        We'll review your application and contact you shortly.
                    </p>

                    <div className="text-center mb-12">
                        <a
                            href="https://intelliapp.driverapponline.com/c/shodexpressllc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-medium rounded-md transition-colors duration-300 inline-flex items-center"
                        >
                            <FaTruck className="mr-2" /> Apply via IntelliApp
                        </a>
                        <p className="mt-4 text-gray-600">
                            Click the button above to apply through our official driver application platform.
                        </p>
                    </div>

                    {isSubmitted ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg max-w-3xl mx-auto text-center"
                        >
                            <FaCheckCircle className="mx-auto text-green-500 text-5xl mb-4" />
                            <h3 className="text-2xl font-bold mb-2">Application Submitted!</h3>
                            <p className="mb-4">
                                Thank you for applying to join the ShodExpress team. We've received your application and will contact you soon.
                            </p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="px-6 py-2 bg-primary hover:bg-primary-dark text-white font-medium rounded-md transition-colors duration-300"
                            >
                                Submit Another Application
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-3xl mx-auto"
                        >
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="text-xl font-semibold text-primary mb-4">Personal Information</div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* First Name */}
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-700">First Name *</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                                                <FaUser />
                                            </div>
                                            <input
                                                type="text"
                                                {...register('firstName')}
                                                className={`pl-10 w-full p-2.5 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                                            />
                                        </div>
                                        {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>}
                                    </div>

                                    {/* Last Name */}
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-700">Last Name *</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                                                <FaUser />
                                            </div>
                                            <input
                                                type="text"
                                                {...register('lastName')}
                                                className={`pl-10 w-full p-2.5 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                                            />
                                        </div>
                                        {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-700">Email *</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                                                <FaEnvelope />
                                            </div>
                                            <input
                                                type="email"
                                                {...register('email')}
                                                className={`pl-10 w-full p-2.5 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                            />
                                        </div>
                                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-700">Phone *</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                                                <FaPhone />
                                            </div>
                                            <input
                                                type="tel"
                                                {...register('phone')}
                                                className={`pl-10 w-full p-2.5 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                            />
                                        </div>
                                        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
                                    </div>

                                    {/* Date of Birth */}
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-700">Date of Birth *</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                                                <FaCalendar />
                                            </div>
                                            <input
                                                type="date"
                                                {...register('dob')}
                                                className={`pl-10 w-full p-2.5 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none ${errors.dob ? 'border-red-500' : 'border-gray-300'}`}
                                            />
                                        </div>
                                        {errors.dob && <p className="mt-1 text-sm text-red-600">{errors.dob.message}</p>}
                                    </div>
                                </div>

                                {/* Address Section */}
                                <div className="text-xl font-semibold text-primary mb-4 pt-4">Address</div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Street Address *</label>
                                    <input
                                        type="text"
                                        {...register('address')}
                                        className={`w-full p-2.5 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                                    />
                                    {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-700">City *</label>
                                        <input
                                            type="text"
                                            {...register('city')}
                                            className={`w-full p-2.5 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                                        />
                                        {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>}
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-700">State *</label>
                                        <input
                                            type="text"
                                            {...register('state')}
                                            className={`w-full p-2.5 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none ${errors.state ? 'border-red-500' : 'border-gray-300'}`}
                                        />
                                        {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>}
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-700">ZIP Code *</label>
                                        <input
                                            type="text"
                                            {...register('zip')}
                                            className={`w-full p-2.5 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none ${errors.zip ? 'border-red-500' : 'border-gray-300'}`}
                                        />
                                        {errors.zip && <p className="mt-1 text-sm text-red-600">{errors.zip.message}</p>}
                                    </div>
                                </div>

                                {/* Driver Information */}
                                <div className="text-xl font-semibold text-primary mb-4 pt-4">Driver Information</div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-700">Driver's License Number *</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                                                <FaIdCard />
                                            </div>
                                            <input
                                                type="text"
                                                {...register('driverLicense')}
                                                className={`pl-10 w-full p-2.5 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none ${errors.driverLicense ? 'border-red-500' : 'border-gray-300'}`}
                                            />
                                        </div>
                                        {errors.driverLicense && <p className="mt-1 text-sm text-red-600">{errors.driverLicense.message}</p>}
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-700">License State *</label>
                                        <input
                                            type="text"
                                            {...register('driverLicenseState')}
                                            className={`w-full p-2.5 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none ${errors.driverLicenseState ? 'border-red-500' : 'border-gray-300'}`}
                                        />
                                        {errors.driverLicenseState && <p className="mt-1 text-sm text-red-600">{errors.driverLicenseState.message}</p>}
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-700">Years of Driving Experience *</label>
                                        <input
                                            type="number"
                                            min="0"
                                            {...register('experience')}
                                            className={`w-full p-2.5 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none ${errors.experience ? 'border-red-500' : 'border-gray-300'}`}
                                        />
                                        {errors.experience && <p className="mt-1 text-sm text-red-600">{errors.experience.message}</p>}
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-700">CDL Class *</label>
                                        <select
                                            {...register('cdlClass')}
                                            className={`w-full p-2.5 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none ${errors.cdlClass ? 'border-red-500' : 'border-gray-300'}`}
                                        >
                                            <option value="">Select CDL Class</option>
                                            <option value="A">Class A</option>
                                            <option value="B">Class B</option>
                                            <option value="C">Class C</option>
                                        </select>
                                        {errors.cdlClass && <p className="mt-1 text-sm text-red-600">{errors.cdlClass.message}</p>}
                                    </div>
                                </div>

                                {/* Resume Upload */}
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-700">Resume/CV (Optional)</label>
                                    <div className="flex items-center justify-center w-full">
                                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <FaFileAlt className="text-gray-400 text-3xl mb-3" />
                                                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                <p className="text-xs text-gray-500">PDF, DOC, or DOCX (MAX. 5MB)</p>
                                            </div>
                                            <input type="file" className="hidden" />
                                        </label>
                                    </div>
                                </div>

                                {/* Terms and Conditions */}
                                <div className="flex items-start mt-6">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="terms"
                                            type="checkbox"
                                            {...register('acceptTerms')}
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-medium text-gray-700">
                                            I agree to the <a href="#" className="text-primary hover:underline">Terms and Conditions</a> *
                                        </label>
                                        {errors.acceptTerms && <p className="mt-1 text-sm text-red-600">{errors.acceptTerms.message}</p>}
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="w-full px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-md transition-colors duration-300"
                                    >
                                        Submit Application
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
} 