import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('user');
        setIsLoggedIn(!!user);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token"); // Optionally remove token
        setIsLoggedIn(false);
        navigate("/"); // Redirect to homepage or login page
    };

    return (
        <nav className="bg-black p-4">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                <div className="text-white font-bold text-3xl mb-4 lg:mb-0 hover:text-orange-600 hover:cursor-pointer">

                    <NavLink to={"/"}>InspireLearn</NavLink>
                </div>

                {/* Hamburger menu for small screens */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>

                {/* Navigation links */}
                <div
                    className={`lg:flex flex-col lg:flex-row ${isOpen ? 'block' : 'hidden'} lg:space-x-4 lg:mt-0 mt-4 flex flex-col items-center text-xl`}
                >
                    <a href="/" className="text-white px-4 py-2 hover:text-orange-600">
                        Home
                    </a>

                    {!isLoggedIn ? (
                        <><NavLink to={"/login"}><h1 className='text-white'>Login</h1></NavLink></>
                    ) : (
                        <>
                       <NavLink to={"/aptitude"}>
                       <div className="text-white px-4 py-2 hover:text-orange-600">
                            Aptitude test
                        </div>
                       </NavLink>
                            <button onClick={logout} className="text-white px-4 py-2 hover:text-orange-600">
                                Logout
                            </button>
                        </>
                    )}
                    <a href="/" className="text-white px-4 py-2 hover:text-orange-600">
                        Contact Us
                    </a>
                </div>
            </div>
        </nav>
    );
};
