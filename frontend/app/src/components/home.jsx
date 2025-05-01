import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import FoodImg from '../assets/foods_banner.jpg'
import ClothesImg from '../assets/clothes_banner.jpg'
import GroomImg from '../assets/grooming_banner.jpg'

function Home(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false, 
        pauseOnFocus: false, 
        pauseOnDotsHover: false,   
    };

    return(
        <div>
            <nav className="bg-white border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex space-x-12">
                            <a href="#" className="text-xl text-indigo-500 font-bold">Moodify</a>
                            <a href="#" className="text-lg text-gray-900 hover:text-indigo-600 font-medium">Foods</a>
                            <a href="#" className="text-lg text-gray-900 hover:text-indigo-600 font-medium">Clothes</a>
                            <a href="#" className="text-lg text-gray-900 hover:text-indigo-600 font-medium">Grooming</a>
                            <a href="#" className="text-lg text-gray-900 hover:text-indigo-600 font-medium">Moodify for Buiness</a>
                        </div>
                        <div className="flex space-x-12">
                            <a href="#" className="text-lg text-gray-900 hover:text-indigo-600 font-medium">Log In</a>
                            <a href="#" className="text-lg text-gray-900 hover:text-indigo-600 font-medium">New User</a>
                        </div>
                    </div>
                </div>
            </nav>
        
            <div className="flex overflow-hidden">
                <div className="mx-auto w-screen h-screen">
                    <Slider {...settings}>
                        <div>
                            <div className="w-screen h-screen bg-indigo-200 flex bg-cover bg-center opacity-90 text-left rounded-md text-xl font-bold"
                            style={{ backgroundImage: `url(${FoodImg})` }}
                            >
                                <div className="items-start justify-start mx-10 pt-10">
                                    <h1 className="text-7xl font-bold text-white drop-shadow-lg">Limited Time Offer!</h1>
                                    <h3 className="text-3xl font-medium text-white drop-shadow-lg">Get 30% off on all dishes</h3>
                                    <p className="text-xl font-medium text-white drop-shadow-lg">Offer valid until this Sunday only</p>
                                    <button className="mt-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-lg font-semibold">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="w-screen h-screen bg-indigo-200 flex bg-cover bg-center opacity-90 rounded-md text-xl font-bold"
                            style={{ backgroundImage: `url(${ClothesImg})` }}
                            >
                                <div className="items-start justify-start mx-10 pt-10">
                                    <h1 className="text-7xl font-bold text-white drop-shadow-lg">Limited Time Offer!</h1>
                                    <h3 className="text-3xl font-medium text-white drop-shadow-lg">Get 30% off on all clothes</h3>
                                    <p className="text-xl font-medium text-white drop-shadow-lg">Offer valid until this Sunday only</p>
                                    <button className="mt-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-lg font-semibold">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="w-screen h-screen bg-indigo-200 flex bg-cover bg-center opacity-90 rounded-md text-xl font-bold"
                            style={{ backgroundImage: `url(${GroomImg})` }}
                            >
                                <div className="items-start justify-start mx-10 pt-10">
                                    <h1 className="text-7xl font-bold text-white drop-shadow-lg">Limited Time Offer!</h1>
                                    <h3 className="text-3xl font-medium text-white drop-shadow-lg">Get 30% off on all skin care products</h3>
                                    <p className="text-xl font-medium text-white drop-shadow-lg">Offer valid until this Sunday only</p>
                                    <button className="mt-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-lg font-semibold">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>

            <div>
                <h3>Discover honset reviews on Shops & Products</h3>
            </div>
        </div>
    )
}

export default Home;