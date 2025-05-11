import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="section-primary">
            <div className="container">
                <div className="grid grid-cols-4">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 mr-2">
                                <Image
                                    src="/logo.png"
                                    alt="ShodExpress Logo"
                                    width={40}
                                    height={40}
                                    className="w-full h-full"
                                />
                            </div>
                            <h3 className="text-xl font-bold">
                                <span className="logo-white">SHOD</span> EXPRESS LLC
                            </h3>
                        </div>
                        <p className="mb-4 text-gray-200">
                            We offer reliable and cost-effective transportation services across the United States.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-gray-200 transition-colors">
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" className="text-white hover:text-gray-200 transition-colors">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="text-white hover:text-gray-200 transition-colors">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="https://l.instagram.com/?u=https%3A%2F%2Fgoldentouchus.com%2F%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaelNRhFtmxqRHuyAhhDhP7RS6Y47w94272FJsHHTMmZt0ByQwXR1RIszG3eQg_aem_t0JxqhK2ENGmB9Ov3QOUEA&e=AT0crDAt-k6pf-fnGJ44nI8ercLPxhnCQLCy948hQKPOfvhac-GSqULfnA4qiU8MzDl6lg2i6yhAX0j52_C48Zv9aqylhV0htOoWQTfe3sx3tWyJh02BHw" className="text-white hover:text-gray-200 transition-colors">
                                <FaInstagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Services', 'Drivers', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                        className="text-gray-200 hover:text-white transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <FaMapMarkerAlt className="mt-1 text-white" />
                                <span className="text-gray-200">6854 Founders Row, West Chester, Ohio 45069, United States</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaPhone className="text-white" />
                                <a href="tel:+15134400406" className="text-gray-200 hover:text-white transition-colors">
                                    +1 (513) 440-0406
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-white" />
                                <a href="mailto:dispatch@shodexpress.com" className="text-gray-200 hover:text-white transition-colors">
                                    dispatch@shodexpress.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                        <p className="mb-4 text-gray-200">
                            Subscribe to our newsletter to receive the latest updates and news.
                        </p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="px-4 py-2 rounded bg-primary-dark text-white border border-white/30 focus:border-white focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="btn btn-secondary"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-white/20 mt-12 pt-6 text-center text-gray-200">
                    <p>Copyright © {currentYear} SHOD EXPRESS LLC - All Rights Reserved.</p>
                    <div className="mt-2 flex justify-center space-x-4">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-of-service" className="hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 