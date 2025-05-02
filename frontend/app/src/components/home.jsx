import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import FoodImg from '../assets/home_carousel/foods_banner.png'
import ClothesImg from '../assets/home_carousel/clothes_banner.png'
import GroomImg from '../assets/home_carousel/grooming_banner.png'
import FoodTRS_1 from '../assets/top_rated/foods_1.png'
import FoodTRS_2 from '../assets/top_rated/foods_2.png'
import ClothesTRS_1 from '../assets/top_rated/clothes_1.png'
import ClothesTRS_2 from '../assets/top_rated/clothes_2.png'
import GroomingTRS_1 from '../assets/top_rated/grooming_1.png'
import GroomingTRS_2 from '../assets/top_rated/grooming_2.png'

function Home(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false, 
        pauseOnFocus: false, 
        pauseOnDotsHover: false,   
    };

    // Sample data for top-rated shops
    const topRatedShops = [
        { name: "Foods1", image: FoodTRS_1, rating: 4.9 },
        { name: "Clothes1", image: ClothesTRS_1, rating: 4.8 },
        { name: "Grooming1", image: GroomingTRS_1, rating: 4.7 },
        { name: "Foods2", image: FoodTRS_2, rating: 4.9 },
        { name: "Clothes2", image: ClothesTRS_2, rating: 4.8 },
        { name: "Grooming2", image: GroomingTRS_2, rating: 4.7 },
    ];

    const loopingShops = [...topRatedShops, ...topRatedShops];
    
    const categories = ["Clothes", "Foods", "Grooming"];

    const topRatedProducts = [
        { name: "Vintage Denim Jacket", category: "Clothes", rating: 4.8 },
        { name: "Organic Dog Treats", category: "Foods", rating: 4.7 },
        { name: "Beard Oil Set", category: "Grooming", rating: 4.6 },
    ];

    return(
        <div className="overflow-x-hidden">
            {/* Navigation */}
            <nav className="relative z-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between bg-transparent h-16 items-center">
                        <div className="flex space-x-12">
                            <a href="#" className="text-xl text-indigo-500 font-bold">Moodify</a>
                            <a href="#" className="text-lg text-white hover:text-indigo-600 font-bold">Foods</a>
                            <a href="#" className="text-lg text-white hover:text-indigo-600 font-bold">Clothes</a>
                            <a href="#" className="text-lg text-white hover:text-indigo-600 font-bold">Grooming</a>
                            <a href="#" className="text-lg text-white hover:text-indigo-600 font-bold">Moodify for Buiness</a>
                        </div>
                        <div className="flex space-x-12">
                            <a href="#" className="text-lg text-white hover:text-indigo-600 font-bold">Log In</a>
                            <a href="#" className="text-lg text-white hover:text-indigo-600 font-bold">New User</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Carousel: Offers! */}
            <div className="flex overflow-hidden pb-10 -mt-20">
                <div className="mx-auto w-screen h-screen">
                    <Slider {...settings}>
                        <div>
                            <div className="relative flex w-screen h-[700px] bg-cover bg-center text-left text-xl font-bold"
                            style={{ backgroundImage: `url(${FoodImg})` }}
                            >
                                <div className="absolute inset-0 bg-black/10 z-0"></div>
                                <div className="relative z-10 items-start justify-start mx-10 px-2 my-6 pt-16">
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
                            <div className="relative flex w-screen h-[700px] bg-cover bg-center text-left text-xl font-bold"
                            style={{ backgroundImage: `url(${ClothesImg})` }}
                            >
                                <div className="absolute inset-0 bg-black/10 z-0"></div>
                                <div className="relative z-10 items-start justify-start mx-10 px-2 my-6 pt-16">
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
                            <div className="relative flex w-screen h-[700px] bg-cover bg-center text-left text-xl font-bold"
                            style={{ backgroundImage: `url(${GroomImg})` }}
                            >
                                <div className="absolute inset-0 bg-black/10 z-0"></div>
                                <div className="relative z-10 items-start justify-start mx-10 px-2 my-6 pt-16">
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

            {/* Hero: Top Rated Shops This Week */}
            <section className="overflow-x-hidden py-12">
                <h2 className="text-4xl font-bold text-center my-2 pt-4">Top Rated Shops This Week</h2>
                <p className="text-sm font-semibold text-center mb-6 pb-6">Shops everyone’s talking about – highest rated by real users this week!</p>
                <div className="flex animate-scroll-x w-max space-x-14 overflow-x-hidden px-12 py-4 mb-8 justify-between">
                    {[...topRatedShops, ...topRatedShops].map((shop, idx) => (
                        <card key={idx} className="min-w-[18rem] h-[22rem] relative rounded-2xl overflow-x-hidden shadow-md border border-gray-200 bg-cover bg-center"
                        style={{ backgroundImage: `url(${shop.image})` }}>
                            <div className="absolute inset-0 bg-black/20 z-0"></div>
                            <cardcontent className="relative z-10 h-full flex flex-col justify-end text-white p-4">
                                <h4 className="text-2xl text-center font-bold">{shop.name}</h4>
                                <div className="flex items-center justify-center gap-1 mt-2 text-white">
                                    <p className="text-sm text-center font-bold">Rating: {shop.rating}</p>
                                </div>
                                <button className="mt-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm font-semibold">
                                    View Reviews
                                </button>
                            </cardcontent>
                        </card>
                    ))}
                </div>
            </section>

            {/* Secondary Hero: Discover Honest Reviews */}
            <section className="text-center text-black pb-20">
                <h2 className="text-4xl font-bold mb-2">Discover Honest Reviews</h2>
                <p className="text-sm font-semibold">Trusted feedback on foods, clothes, and grooming shops</p>
                <div className="flex justify-center bg-transparent h-12 mt-8 items-center space-x-8">
                    <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-800 text-white rounded-md text-base font-semibold">
                        Start Reviewing
                    </button>
                    <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-800 text-white rounded-md text-base font-semibold">
                        Browse Categories
                    </button>
                </div>
            </section>
            
            {/* Secondary Hero: Discover Honest Reviews */}
            <section className="text-center text-black pb-20">
                <h2 className="text-4xl font-bold mb-2">Discover Honest Reviews</h2>
                <p className="text-sm font-semibold">Trusted feedback on foods, clothes, and grooming shops</p>
                <div className="flex flex-wrap justify-center mt-8 items-center space-x-8">
                    {/* Clothes */}
                    <button className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-md border hover:bg-gray-50 transition">
                    <img src="/icons/clothes-icon.png" alt="Clothes" className="w-6 h-6" />
                    <span className="text-base font-medium text-gray-700">Clothes</span>
                    </button>

                    {/* Foods */}
                    <button className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-md border hover:bg-gray-50 transition">
                    <img src="/icons/food-icon.png" alt="Foods" className="w-6 h-6" />
                    <span className="text-base font-medium text-gray-700">Foods</span>
                    </button>

                    {/* Grooming */}
                    <button className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-md border hover:bg-gray-50 transition">
                    <img src="/icons/grooming-icon.png" alt="Grooming" className="w-6 h-6" />
                    <span className="text-base font-medium text-gray-700">Grooming</span>
                    </button>
                </div>
            </section>






            {/* Top Rated Products */}
            <section>
                <h3 className="text-xl font-semibold mb-4">Top Rated Products</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {topRatedProducts.map((item, idx) => (
                    <card key={idx} className="rounded-2xl shadow-sm">
                    <cardcontent className="p-4">
                        <h4 className="text-lg font-bold">{item.name}</h4>
                        <p className="text-sm text-gray-500">{item.category}</p>
                        <div className="flex items-center gap-1 mt-2 text-yellow-500">
                        {/* <star size={16} fill="currentColor" /> */}
                        <span>{item.rating}</span>
                        </div>
                        <button variant="outline" className="mt-4 w-full">
                        Read Reviews
                        </button>
                    </cardcontent>
                    </card>
                ))}
                </div>
            </section>

            <footer className="text-center text-gray-500 text-sm mt-10">
                &copy; 2025 Reviewify. All rights reserved.
            </footer>
        </div>
    )
}

export default Home;