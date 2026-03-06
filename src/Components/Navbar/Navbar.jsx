import React from 'react';

const Navbar = () => {
    return (
        <div className="sticky top-0 z-50 bg-base-100 shadow py-2">
            <div className='w-11/12 lg:w-10/12 mx-auto flex items-center py-1 lg:py-3'>

                {/* Navbar Left */}
                <div className="navbar-start">

                    {/* Mobile Dropdown Menu */}
                    <div className="dropdown">

                        {/* Hamburger Button */}
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        {/* Dropdown Items */}
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                        >
                            <li><a>Home</a></li>
                            <li><a>FAQ</a></li>
                            <li><a>ChangeLOG</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Download</a></li>
                            <li><a>Contact</a></li>

                            {/* New Ticket Button */}
                            <li>
                                <a className="bg-linear-to-r from-violet-800 to-purple-400 text-white">
                                    + New Ticket
                                </a>
                            </li>
                        </ul>

                    </div>

                    {/* Logo / Title */}
                    <a className="btn btn-ghost text-xl">
                        CS - Ticket System
                    </a>

                </div>


                {/* Desktop Menu */}
                <div className="navbar-end hidden lg:flex">

                    <ul className="menu menu-horizontal px-1">

                        <li><a>Home</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>ChangeLOG</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>

                        {/* New Ticket Button */}
                        <li>
                            <a className="bg-linear-to-r from-violet-800 to-purple-400 text-white">
                                + New Ticket
                            </a>
                        </li>

                    </ul>

                </div>

            </div>
        </div>
    );
};

export default Navbar;