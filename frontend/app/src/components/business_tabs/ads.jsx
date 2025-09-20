import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate, useLocation } from 'react-router-dom';
import { useContext } from "react";
import { SessionContext } from "../../context/SessionContext";
import Axios from 'axios';
import { motion } from "framer-motion";
import Sidebar from "../../assets/business_components/sidebar";

function Ads() {
    // GET sessionValue
    const { sessionValue, setSessionValue } = useContext(SessionContext);

    console.log(sessionValue)

    // Navigation
    const navigate = useNavigate();

    const handleclickHome = () => {
        navigate('/');
    }

    return(
        <div className="overflow-x-hidden">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
                <div className="max-w-screen-xl mx-auto py-2">
                    <div className="flex justify-between bg-transparent h-16 items-center">
                        <div className="flex space-x-8 items-center">
                            <button onClick={handleclickHome} className="text-3xl text-indigo-500 font-bold">Moodify</button>
                        </div>
                        <div className="flex space-x-8 items-center">
                            <button href="#" className="text-lg text-indigo-500 hover:text-indigo-600 font-semibold">Notifications</button>
                            <button href="#" className="text-lg px-3 py-2 rounded-md text-white bg-indigo-500 hover:bg-indigo-600 font-semibold">Profile</button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Body */}
            <div className="flex flex-1 overflow-hidden mt-20">
                {/* Left side panel */}
                <aside className="w-60 h-full p-4 pl-12 bg-white border-r border-gray-200 overflow-y-auto">
                    <Sidebar />
                </aside>

                {/* Main content */}
                <main className="flex-1 mt-4 pl-12 p-6 overflow-y-auto">
                    <div className="top-0 left-60 right-0 bg-white z-40 px-2">
                        <div className="flex items-center justify-between">
                            <div className="text-left">
                                <motion.header
                                    initial={{ opacity: 0, y: -6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.45, ease: "easeOut" }}
                                    className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                                >
                                    <div>
                                        <h2 className="text-4xl font-bold mb-2">Advertisments</h2>
                                        <p className="font-semibold mb-2">Run targeted promotions and grow your audience effortlessly.</p>
                                    </div>
                                </motion.header>
                            </div>
                        </div>
                    </div>

                    <div className="mt-28">
                        {/* Your actual body content goes here */}
                        <p>Main content starts here…</p>
                    </div>
                </main>
            </div>
        </div>
    )
};

export default Ads;