import React from "react";
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
                <div className="footer p-10 flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-5 relative z-10">
                    {/* CS Ticket System Info */}
                    <nav>
                        <h6 className="footer-title">CS - Ticket System</h6>
                        <p className="text-sm leading-relaxed">
                            This CS Ticket System is a software tool used to centralize, manage,
                            and track customer inquiries from various channels into a single dashboard.
                        </p>
                    </nav>

                    {/* Company Links */}
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About Us</a>
                        <a className="link link-hover">Our Mission</a>
                        <a className="link link-hover">Contact Sales</a>
                    </nav>

                    {/* Services Links */}
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Products and Services</a>
                        <a className="link link-hover">Customer Stories</a>
                        <a className="link link-hover">Download Apps</a>
                    </nav>

                    {/* Information Links */}
                    <nav>
                        <h6 className="footer-title">Information</h6>
                        <a className="link link-hover">Privacy Policy</a>
                        <a className="link link-hover">Terms and Conditions</a>
                        <a className="link link-hover">Join Us</a>
                    </nav>

                    {/* Social Links */}
                    <nav>
                        <h6 className="footer-title">Social Links</h6>
                        <a className="link link-hover flex items-center gap-2" href="#">
                            <svg
                                fill="currentColor"
                                viewBox="0 0 512 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                            </svg>
                            <span>@CS - Ticket System</span>
                        </a>

                        <a className="link link-hover flex items-center gap-2" href="#">
                            <svg
                                fill="currentColor"
                                viewBox="0 0 448 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                            </svg>
                            <span>@CS - Ticket System</span>
                        </a>

                        <a className="link link-hover flex items-center gap-2" href="#">
                            <svg
                                fill="currentColor"
                                viewBox="0 0 320 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                            </svg>
                            <span>@CS - Ticket System</span>
                        </a>

                        <a className="link link-hover flex items-center gap-2" href="mailto:support@cst.com">
                            <svg
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path>
                            </svg>
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