'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className={`header ${scrolled ? 'header-scrolled' : 'header-transparent'}`}>
            <div className="container">
                <div className="header-nav">
                    {/* Logo */}
                    <Link href="/" className="logo">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center"
                        >
                            <div className="w-10 h-10 mr-2">
                                <Image
                                    src="/logo.png"
                                    alt="ShodExpress Logo"
                                    width={40}
                                    height={40}
                                    className="w-full h-full"
                                />
                            </div>
                            <div>
                                <span className={scrolled ? 'logo-primary' : 'logo-white'}>SHOD</span>
                                <span className={scrolled ? 'text-gray-800' : 'logo-white'}>EXPRESS</span>
                            </div>
                        </motion.div>
                    </Link>

                    {/* Contact Info - Desktop */}
                    <div className="hidden md:flex items-center gap-6">
                        <a
                            href="tel:+15134400406"
                            className={`flex items-center gap-2 text-sm font-medium ${scrolled ? 'text-primary' : 'text-white'}`}
                        >
                            <FaPhone /> +1 (513) 440-0406
                        </a>
                        <a
                            href="mailto:dispatch@shodexpress.com"
                            className={`flex items-center gap-2 text-sm font-medium ${scrolled ? 'text-primary' : 'text-white'}`}
                        >
                            <FaEnvelope /> dispatch@shodexpress.com
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="nav-links">
                        {['Home', 'About', 'Services', 'Drivers', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className={scrolled ? 'nav-link-scrolled' : 'nav-link'}
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-2xl focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        style={{ color: scrolled ? 'var(--primary)' : 'var(--white)' }}
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="header-transparent md:hidden"
                    >
                        <div className="container py-4">
                            <nav className="flex flex-col space-y-4">
                                {['Home', 'About', 'Services', 'Drivers', 'Contact'].map((item) => (
                                    <Link
                                        key={item}
                                        href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                        className="nav-link"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </nav>
                            <div className="mt-4 flex flex-col gap-3">
                                <a
                                    href="tel:+15134400406"
                                    className="flex items-center gap-2 text-sm font-medium text-white"
                                >
                                    <FaPhone /> +1 (513) 440-0406
                                </a>
                                <a
                                    href="mailto:dispatch@shodexpress.com"
                                    className="flex items-center gap-2 text-sm font-medium text-white"
                                >
                                    <FaEnvelope /> dispatch@shodexpress.com
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header; 