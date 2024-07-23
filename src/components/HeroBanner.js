import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Select from 'react-select';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

function Hero({ backgroundImage, heroText, heroDescription, heroDescription2 }) {
    const sectionStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 2, delay: 0.5 } },
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 2, delay: 0.5 } },
    };

    const slideInFromBottom = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1 } },
    };

    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const offset = 200;

            if (scrollY > offset) {
                controls.start("hidden");
            } else {
                controls.start("visible");
            }
        };

        // Initial check for scroll position when the page is loaded or refreshed
        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [controls]);

    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);
    const [dateTime, setDateTime] = useState(new Date());

    const handleFromChange = selectedOption => {
        setFrom(selectedOption);
    };

    const handleToChange = selectedOption => {
        setTo(selectedOption);
    };

    const handleDateTimeChange = date => {
        setDateTime(date);
    };

    const options = [
        { value: 'new_york', label: 'New York' },
        { value: 'los_angeles', label: 'Los Angeles' },
        { value: 'chicago', label: 'Chicago' },
        { value: 'houston', label: 'Houston' },
        { value: 'miami', label: 'Miami' },
        // Add more options as needed
    ];

    return (
        <React.Fragment>
            <section>
                <div style={sectionStyle} className="w-full h-[70vh] relative flex items-center">
                    <div className="container">
                        <div className="lg:grid grid-cols-1 lg:grid-cols-12">
                            <div className="lg:col-span-4 bg-white rounded-4 p-4">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="from">
                                        From
                                    </label>
                                    <Select
                                        id="from"
                                        value={from}
                                        onChange={handleFromChange}
                                        options={options}
                                        className="basic-single"
                                        classNamePrefix="select"
                                        isClearable
                                        isSearchable
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="to">
                                        To
                                    </label>
                                    <Select
                                        id="to"
                                        value={to}
                                        onChange={handleToChange}
                                        options={options}
                                        className="basic-single"
                                        classNamePrefix="select"
                                        isClearable
                                        isSearchable
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="datetime">
                                        Date and Time
                                    </label>
                                    <Datetime
                                        id="datetime"
                                        value={dateTime}
                                        onChange={handleDateTimeChange}
                                        className="w-full"
                                    />
                                </div>
                            </div>
                            <div className="lg:col-span-8">
                                <div className="">
                                    <div className="container text-center overflow-hidden">
                                        <motion.div
                                            initial="hidden"
                                            animate={controls}
                                            variants={fadeInLeft}
                                            className="text-white"
                                        >
                                            <h1 className="text-sm md:text-lg font-normal tracking-[3px]">{heroText}</h1>
                                        </motion.div>
                                        <div className="border w-1/4 md:w-[10%] mx-auto my-5"></div>
                                        <motion.div
                                            initial="hidden"
                                            animate={controls}
                                            variants={fadeInRight}
                                            className="text-white"
                                        >
                                            <p className="text-3xl md:text-5xl font-semibold mt-4">{heroDescription}</p>
                                        </motion.div>
                                        {/* Uncomment this if you need the second description */}
                                        <motion.div
                                            initial="hidden"
                                            animate={controls}
                                            variants={slideInFromBottom}
                                            className="text-white w-3/4 mx-auto"
                                        >
                                            <p className="text-sm md:text-lg mt-4">{heroDescription2}</p>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </React.Fragment>
    );
}

export default Hero;
