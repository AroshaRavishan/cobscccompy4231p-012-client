"use client";
import { useState, useRef, useEffect } from "react";
import logo from "../assests/logo.png"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleServices = () => {
        setIsServicesOpen(!isServicesOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsServicesOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const serviceItems = [
        { name: "LMS Solutions", href: "#solutions" },
        { name: "Custom e-Learning", href: "#e-Learning" },
        { name: "Certification Programmes ", href: "#Certification" },
    ];
    const closeMobileMenu = () => {
        setIsOpen(false);
        // You can also close other mobile-specific menus here if needed
    };
    return (
        <>
            <nav className="bg-white py-4 sticky w-full top-0 z-10 rounded-br-10">
                <div className="container flex items-center justify-between">
                    <div className="flex-shrink-0">
                        <a href="/">
                            <img className=" h-[50px]" src={logo} alt="logo" />
                        </a>
                    </div>
                    <div className="hidden xl:block">
                        <ul className="flex space-x-4 items-center">
                            <li>
                                <a href="#chooseus" className="text-black-900 text-base font-medium mx-4">Why choose us</a>
                            </li>
                            <li>
                                <a href="#services" className="text-black-900 text-base font-medium mx-4">Essential Offerings</a>
                            </li>
                            <li className="py-4 relative flex items-center" onMouseEnter={() => setOpen(true)}
                                onMouseLeave={() => setOpen(false)}
                            >
                                <a className="text-black-900 text-base font-medium" href="#0" aria-expanded={open}>
                                    Services
                                </a>
                                <button className="shrink-0 p-1" aria-expanded={open} onClick={(e) => {
                                    e.preventDefault();
                                    setOpen(!open);
                                }}
                                >
                                    <span className="sr-only">Show submenu for "Flyout Menu"</span>
                                    <svg className={`fill-current h-4 w-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </button>
                                {/* 2nd level menu */}
                                <div className="relative">
                                    <ul className={`absolute top-[30px] left-[-50px] left-1/2 transform -translate-x-1/2 min-w-[300px] bg-white border border-slate-200 p-2 rounded-lg shadow-xl ${open ? 'block' : 'hidden'}`}>
                                        <div className="grid p-2 gap-x-4">
                                            {serviceItems.map((item, index) => (
                                                <li key={item.name}>
                                                    <a href={item.href} className={`bg-white hover:bg-beige-100 py-3 px-4 block whitespace-no-wrap rounded-xl ${index === 0 ? '' : index === serviceItems.length - 1 ? '' : ''}`}>
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </div>
                                    </ul>
                                </div>
                            </li>

                            <li>
                                <a href="#reviews" className="text-black-900 text-base font-medium mx-4">Testimonials</a>
                            </li>
                            <li>
                                <a href="#faqs" className="text-black-900 text-base font-medium mx-4">FAQ's</a>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden xl:block">
                        <div className="flex items-center space-x-4">
                            <a href="#contact" className="rounded-lg border border-black-800 text-black-900 text-base font-semibold py-2.5 px-6 hover:text-black-500">Contact</a>
                        </div>
                    </div>
                    <div className="xl:hidden">
                        <button onClick={toggleMenu} className="block text-black-500 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
                {/* mobile menu */}
                <div className={`${isOpen ? "absolute right-0 mt-2 w-full bg-white rounded-xl shadow-lg z-50 px-3 py-3" : "hidden"} xl:hidden mt-4`}>
                    <ul className="flex flex-col space-y-2 items-center">
                        <li className="py-3 w-full">
                            <a href="#chooseus" onClick={closeMobileMenu} className=" text-black-900 text-base font-medium block">
                                Why choose us
                            </a>
                        </li>
                        <li className="py-3 w-full">
                            <a href="#services" onClick={closeMobileMenu} className=" text-black-900 text-base font-medium block">
                                Essential Offerings
                            </a>
                        </li>
                        <li className="py-3 w-full">
                            <button onClick={toggleServices} className=" text-black-900 text-base font-medium w-full text-left flex justify-between items-center">
                                Services
                                <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? "transform rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            {isServicesOpen && (
                                <ul className="mt-2 ml-4">
                                    {serviceItems.map((item) => (
                                        <li key={item.name} className="py-2">
                                            <a href={item.href} onClick={closeMobileMenu} className="text-black-900 text-sm font-medium block">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        <li className="py-3 w-full">
                            <a href="#reviews" onClick={closeMobileMenu} className=" text-black-900 text-base font-medium block">
                                Testimonials
                            </a>
                        </li>
                        <li className="py-3 w-full">
                            <a href="#faqs" onClick={closeMobileMenu} className=" text-black-900 text-base font-medium block">
                                FAQ's
                            </a>
                        </li>
                        <li className="py-3 w-full">
                            <a href="#contact" onClick={closeMobileMenu} className=" text-black-900 text-base font-medium block">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;