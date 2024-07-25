import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Select from 'react-select';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import Timeline from './Timeline'; // Import the Timeline component

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

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [controls]);

    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);
    const [dateTime, setDateTime] = useState(new Date());
    const [trains, setTrains] = useState([
        // Add sample train data here
    ]);

    const handleFromChange = selectedOption => {
        setFrom(selectedOption);
        updateTrains(selectedOption, to, dateTime);
    };

    const handleToChange = selectedOption => {
        setTo(selectedOption);
        updateTrains(from, selectedOption, dateTime);
    };

    const handleDateTimeChange = date => {
        setDateTime(date);
        updateTrains(from, to, date);
    };

    const updateTrains = (from, to, dateTime) => {
        // Filter and update the trains based on selected options
        // Sample logic, replace with your actual data-fetching logic
        const filteredTrains = []; // Implement your filtering logic here
        setTrains(filteredTrains);
    };

    const options = [
        { value: 'aluthgama', label: 'Aluthgama' },
        { value: 'anuradhapura', label: 'Anuradhapura' },
        { value: 'badulla', label: 'Badulla' },
        { value: 'bandarawela', label: 'Bandarawela' },
        { value: 'batticaloa', label: 'Batticaloa' },
        { value: 'beliatta', label: 'Beliatta' },
        { value: 'bentota', label: 'Bentota' },
        { value: 'colombo_fort', label: 'Colombo Fort' },
        { value: 'ella', label: 'Ella' },
        { value: 'galle', label: 'Galle' },
        { value: 'gampaha', label: 'Gampaha' },
        { value: 'haputale', label: 'Haputale' },
        { value: 'hatton', label: 'Hatton' },
        { value: 'hikkaduwa', label: 'Hikkaduwa' },
        { value: 'jaffna', label: 'Jaffna' },
        { value: 'kadugannawa', label: 'Kadugannawa' },
        { value: 'kankesanthurai', label: 'Kankesanthurai' },
        { value: 'kandy', label: 'Kandy' },
        { value: 'kalutara_south', label: 'Kalutara South' },
        { value: 'kilinochchi', label: 'Kilinochchi' },
        { value: 'kurunegala', label: 'Kurunegala' },
        { value: 'maho', label: 'Maho' },
        { value: 'matara', label: 'Matara' },
        { value: 'mirigama', label: 'Mirigama' },
        { value: 'moratuwa', label: 'Moratuwa' },
        { value: 'nanu_oya', label: 'Nanu Oya' },
        { value: 'omanthai', label: 'Omanthai' },
        { value: 'panadura', label: 'Panadura' },
        { value: 'peradeniya', label: 'Peradeniya' },
        { value: 'polgahawela', label: 'Polgahawela' },
        { value: 'polonnaruwa', label: 'Polonnaruwa' },
        { value: 'ragama', label: 'Ragama' },
        { value: 'rambukkana', label: 'Rambukkana' },
        { value: 'unawatuna', label: 'Unawatuna' },
        { value: 'vavuniya', label: 'Vavuniya' },
        { value: 'veyangoda', label: 'Veyangoda' },
        { value: 'weligama', label: 'Weligama' }
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
            <Timeline trains={trains} from={from} to={to} dateTime={dateTime} />
        </React.Fragment>
    );
}

export default Hero;
