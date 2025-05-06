import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { SessionContext } from "../context/SessionContext";
import TitleImg from "../assets/restaurants_components/titleimg.png"
import FilterSideBarRestaurants from "../assets/restaurants_components/filtersidebar_restaurants";
import RestaurantCards from "../assets/restaurants_components/cards_restaurant"
import Axios from 'axios';
const SERVER_URL = 'http://127.0.0.1:5000';

function Restaurants(){
    const [ responseData, setResponseData ] = useState('');
    
    // GET sessionValue
    const { sessionValue, setSessionValue } = useContext(SessionContext);
    
    console.log(sessionValue)

    // Navigation
    const navigate = useNavigate();

    const handleclickHome = () => {
        navigate('/');
    }

    const handleclickRestaurants = () => {
        navigate('/restaurants');
    }

    const handleclickFashion = () => {
        navigate('/fashion');
    }

    const handleclickWellness = () => {
        navigate('/wellness');
    }

    const handleclickLogin = () => {
        navigate('/login');
    }

    const handleclickSignup = () => {
        navigate('/signup');
    }

    const handleclickProfile = () => {
        navigate('/profile');
    }

    const handleclickLogout = () => {
        setSessionValue(null); // update state
        navigate('/');
    };

    // NavBar consts
    const country = [
        { label: "Sri Lanka", value: "country1" }
    ];

    const city = [
        { label: "Colombo", value: "city1" },
        { label: "Kandy", value: "city2" },
        { label: "Galle", value: "city3" }
    ];

    const [selectedCountry, setSelectedCountry] = useState("country1");

    const getCountryLabel = (value) => {
        const match = country.find((loc) => loc.value === value);
        return match ? match.label : "";
    };

    const [selectedCity, setSelectedCity] = useState("city1");

    const getCityLabel = (value) => {
        const match = city.find((loc) => loc.value === value);
        return match ? match.label : "";
    };

    return(
        <div className="overflow-x-hidden">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
                <div className="max-w-screen-xl mx-auto py-2">
                    <div className="flex h-16 justify-between items-center">
                        <div className="flex space-x-8 items-center">
                            <button onClick={handleclickHome} className="text-3xl text-indigo-500 font-bold">Moodify</button>
                            <div class="flex items-center w-full max-w-xl bg-white rounded-full shadow overflow-hidden">
                                <select class="flex-grow w-32 px-4 py-2 text-md text-gray-700 placeholder-gray-500 focus:outline-none appearance-none bg-white"
                                value={selectedCountry}
                                onChange={(e) => setSelectedCountry(e.target.value)}>
                                    {country.map((loc) => (
                                        <option key={loc.value} value={loc.value}>
                                            {loc.label}
                                        </option>
                                    ))}
                                </select>
                                <div class="h-6 w-px bg-gray-300 mx-2"></div>
                                <select class="w-40 px-2 py-2 text-md text-gray-700 placeholder-gray-500 focus:outline-none appearance-none bg-white"
                                value={selectedCity}
                                onChange={(e) => setSelectedCity(e.target.value)}>
                                    {city.map((loc) => (
                                        <option key={loc.value} value={loc.value}>
                                            {loc.label}
                                        </option>
                                    ))}
                                </select>
                                <button class="bg-indigo-500 hover:bg-indigo-700 p-3 flex items-center justify-center">
                                    <svg class="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fill-rule="evenodd"
                                            d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <button onClick={handleclickRestaurants} className="text-lg text-gray-600 hover:text-indigo-600 font-semibold">Restaurants</button>
                            <button onClick={handleclickFashion} className="text-lg text-gray-600 hover:text-indigo-600 font-semibold">Fashion</button>
                            <button onClick={handleclickWellness} className="text-lg text-gray-600 hover:text-indigo-600 font-semibold">Wellness</button>
                            <button href="#" className="text-lg text-gray-600 hover:text-indigo-600 font-semibold">Moodify&nbsp;for&nbsp;Buiness</button>
                        </div>
                        <div className="flex space-x-8 items-center">
                            {sessionValue ? (
                                <>
                                    <button onClick={handleclickProfile} className="text-lg text-gray-600 hover:text-indigo-600 font-semibold">Profile</button>
                                    <button onClick={handleclickLogout} className="text-lg px-3 py-2 rounded-md text-white bg-indigo-500 hover:bg-indigo-600 font-semibold">Log&nbsp;Out</button>
                                </>
                            ) : (
                                <>
                                    <button onClick={handleclickLogin} className="text-lg text-gray-600 hover:text-indigo-600 font-semibold">Log&nbsp;In</button>
                                    <button onClick={handleclickSignup} className="text-lg px-3 py-2 rounded-md text-white bg-indigo-500 hover:bg-indigo-600 font-semibold">Sign&nbsp;Up</button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Title, Subtitle */}
            <div className="fixed top-2 left-0 right-0 bg-white z-40 shadow-md px-4 pb-4">
                <div className="flex items-center justify-between">
                    <div className="text-left pt-20 pb-4 mx-10">
                        <h2 className="text-4xl font-bold mb-2">Top Restaurants in {getCityLabel(selectedCity)}, {getCountryLabel(selectedCountry)}</h2>
                        <p className="text-sm font-semibold">What’s Cooking in {getCityLabel(selectedCity)} – Top Picks Right Now</p>
                    </div>
                    <div className="ml-4 pt-20 pb-4 mx-10">
                        <img src={TitleImg} className="w-20 h-20"/>
                    </div>
                </div>
            </div>

            
            <div className="flex pt-52 z-30">
                {/* Filters */}
                <aside className="w-90 pt-4 pl-6 pr-4 -mt-4 border-l border-gray-200 shadow-[4px_0_10px_-2px_rgba(0,0,0,0.1)]">
                    <FilterSideBarRestaurants />
                </aside>
                
                {/* Cards */}
                <div className="flex-1 mt-4 pl-14 pr-12 py-2 pb-10">
                    <RestaurantCards />
                </div>
            </div>


            {/* Footer */}
            <footer className="bg-gray-900 text-white pt-10 pb-5 z-20">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 space-x-8 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Moodify</h3>
                        <p className="text-sm text-gray-400">
                            Real reviews from real people. Discover the best in food, fashion, and grooming with confidence.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-md font-semibold mb-3">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">Write a Review</a></li>
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-md font-semibold mb-3">Follow Us</h4>
                        <div className="flex space-x-4 text-gray-400">
                            <a href="#"><svg className="w-5 h-5 hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 5.924a8.847 8.847 0 01-2.546.698 4.432 4.432 0 001.946-2.448 8.868 8.868 0 01-2.812 1.074A4.418 4.418 0 0015.447 4c-2.452 0-4.44 1.987-4.44 4.437 0 .348.038.687.11 1.011A12.553 12.553 0 013.1 5.13a4.418 4.418 0 001.372 5.915A4.39 4.39 0 012.8 10v.056a4.437 4.437 0 003.56 4.351 4.43 4.43 0 01-1.167.156c-.286 0-.563-.027-.833-.08a4.444 4.444 0 004.147 3.079 8.885 8.885 0 01-6.566 1.835A12.526 12.526 0 008.29 21c8.153 0 12.605-6.754 12.605-12.605 0-.192-.004-.384-.012-.574A9.01 9.01 0 0024 5.491a8.938 8.938 0 01-2.57.703 4.42 4.42 0 001.942-2.45 8.875 8.875 0 01-2.77 1.08z" /></svg></a>
                            <a href="#"><svg className="w-5 h-5 hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.596 0 0 .592 0 1.324v21.352C0 23.408.596 24 1.325 24H12.82v-9.294H9.692V11.01h3.128V8.412c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.588l-.467 3.696h-3.121V24h6.116C23.404 24 24 23.408 24 22.676V1.324C24 .592 23.404 0 22.675 0z" /></svg></a>
                            <a href="#"><svg className="w-5 h-5 hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.51 0-9.96 4.45-9.96 9.96 0 5.51 4.45 9.96 9.96 9.96 5.51 0 9.96-4.45 9.96-9.96 0-5.51-4.45-9.96-9.96-9.96zm0 18.24c-4.564 0-8.28-3.716-8.28-8.28s3.716-8.28 8.28-8.28 8.28 3.716 8.28 8.28-3.716 8.28-8.28 8.28zm3.666-11.736c-.404 0-.782.09-1.127.246a2.165 2.165 0 00-.642.492c-.158.19-.28.407-.357.641a2.132 2.132 0 00-.135.816c0 .284.05.561.144.825a2.165 2.165 0 00.357.641c.158.19.353.35.57.482.218.13.457.23.707.296a2.142 2.142 0 001.418-.049 2.133 2.133 0 00.57-.296 2.165 2.165 0 00.642-.492c.158-.19.28-.407.357-.641.094-.264.144-.541.144-.825s-.05-.561-.144-.825a2.165 2.165 0 00-.357-.641 2.133 2.133 0 00-.57-.492 2.142 2.142 0 00-1.053-.246zm0 7.344h-7.332v-1.56h7.332v1.56z"/></svg></a>
                        </div>
                    </div>
                </div>
                <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
                    © 2025 Moodify. All rights reserved.
                </div>
            </footer>
        </div>
    )
}

export default Restaurants;