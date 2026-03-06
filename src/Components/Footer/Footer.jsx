import React from "react";
import { Twitter, Linkedin, Facebook, Mail } from 'lucide-react';
import vector1 from '../../assets/vector1.png';
import vector2 from '../../assets/vector2.png';

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-neutral text-neutral-content py-5 lg:py-10">
            <div className="w-11/12 lg:w-10/12 mx-auto">
                {/* Background Shapes */}
                <img
                    src={vector1}
                    alt="left shape"
                    className="absolute left-0 bottom-0 w-64 md:w-96 opacity-40 animate-float-left pointer-events-none"
                />
                <img
                    src={vector2}
                    alt="right shape"
                    className="absolute right-0 bottom-0 w-64 md:w-96 opacity-40 scale-x-[-1] animate-float-right pointer-events-none"
                />

                {/* Main Footer */}
                <div className="footer p-10 grid grid-cols-1 md:grid-cols-7 gap-4 relative z-10">
                    {/* CS Ticket System Info - 30% area */}
                    <nav className="md:col-span-3 w-full">
                        <h6 className="footer-title">CS - Ticket System</h6>
                        <p className="text-sm leading-relaxed md:pr-40">
                            Streamline your customer support with our intelligent ticket management system.
                            Track priorities, manage progress, and resolve issues faster with real-time updates
                            and a clean, responsive interface. Our platform ensures
                            a seamless experience across all devices. Join hundreds of businesses that trust
                            CS Ticket System for their customer support needs.
                        </p>
                    </nav>

                    {/* Company Links */}
                    <nav className="">
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover block">About Us</a>
                        <a className="link link-hover block">Our Mission</a>
                        <a className="link link-hover block">Contact Sales</a>
                    </nav>

                    {/* Services Links*/}
                    <nav className="">
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover block">Products and Services</a>
                        <a className="link link-hover block">Customer Stories</a>
                        <a className="link link-hover block">Download Apps</a>
                    </nav>

                    {/* Information Link */}
                    <nav className="">
                        <h6 className="footer-title">Information</h6>
                        <a className="link link-hover block">Privacy Policy</a>
                        <a className="link link-hover block">Terms and Conditions</a>
                        <a className="link link-hover block">Join Us</a>
                    </nav>

                    {/* Social Links */}
                    <nav className="">
                        <h6 className="footer-title">Social Links</h6>

                        {/* X (Twitter) */}
                        <a className="link link-hover flex items-center gap-2 mb-2" href="#">
                            <Twitter size={20} />
                            <span>@CS - Ticket System</span>
                        </a>

                        {/* LinkedIn */}
                        <a className="link link-hover flex items-center gap-2 mb-2" href="#">
                            <Linkedin size={20} />
                            <span>@CS - Ticket System</span>
                        </a>

                        {/* Facebook */}
                        <a className="link link-hover flex items-center gap-2 mb-2" href="#">
                            <Facebook size={20} />
                            <span>@CS - Ticket System</span>
                        </a>

                        {/* Email */}
                        <a className="link link-hover flex items-center gap-2" href="mailto:support@cst.com">
                            <Mail size={20} />
                            <span>support@cst.com</span>
                        </a>
                    </nav>
                </div>

                {/* Footer Bottom */}
                <div className="footer footer-center p-4 border-t border-gray-700 relative z-10">
                    <p className="text-sm">© 2026 CS — Ticket System. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;