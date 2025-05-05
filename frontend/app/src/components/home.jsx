import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import RestaurantImg from '../assets/home_components/home_carousel/restaurants_banner.png'
import FashionImg from '../assets/home_components/home_carousel/fashion_banner.png'
import WellnessImg from '../assets/home_components/home_carousel/wellness_banner.png'
import FoodTRS_1 from '../assets/home_components/top_rated/foods_1.png'
import FoodTRS_2 from '../assets/home_components/top_rated/foods_2.png'
import ClothesTRS_1 from '../assets/home_components/top_rated/clothes_1.png'
import ClothesTRS_2 from '../assets/home_components/top_rated/clothes_2.png'
import GroomingTRS_1 from '../assets/home_components/top_rated/grooming_1.png'
import GroomingTRS_2 from '../assets/home_components/top_rated/grooming_2.png'
import RestaurantIcon from '../assets/home_components/categories/restaurant_icon.png'
import FashionIcon from '../assets/home_components/categories/fashion_icon.png'
import WellnessIcon from '../assets/home_components/categories/wellness_icon.png'

function Home(){
    // Navigation
    const navigate = useNavigate();

    const handleclick0 = () => {
        navigate('/');
    }

    const handleclick1 = () => {
        navigate('/restaurants');
    }

    const handleclick2 = () => {
        navigate('/fashion');
    }

    const handleclick3 = () => {
        navigate('/wellness');
    }

    const handleclick4 = () => {
        navigate('/login');
    }

    const handleclick5 = () => {
        navigate('/signup');
    }

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
    
    const reviews = [
        {
            id: 1,
            reviewer: "John Doe",
            profilePic: "/images/profile-john.jpg",
            timestamp: "April 29, 2025 at 3:45 PM",
            shopName: "Cafe Bliss",
            rating: 4,
            text: "Amazing ambiance and the food was delicious. The service could be faster, but overall, great experience!, highly recommended!",
            image: "/images/review-example.jpg",
        },
        {
            id: 2,
            reviewer: "Jane Smith",
            profilePic: "/images/profile-jane.jpg",
            timestamp: "May 1, 2025 at 12:10 PM",
            shopName: "Style Studio",
            rating: 5,
            text: "Loved the variety of outfits and how helpful the staff were. Highly recommend!",
            image: "/images/review-fashion.jpg",
        },
        {
            id: 3,
            reviewer: "Jane Paul",
            profilePic: "/images/profile-john.jpg",
            timestamp: "May 1, 2025 at 12:10 PM",
            shopName: "Style Studio",
            rating: 5,
            text: "Loved the variety of outfits and how helpful the staff were. Highly recommend!",
            image: "/images/review-fashion.jpg",
        },
        {
            id: 4,
            reviewer: "John Doe",
            profilePic: "/images/profile-john.jpg",
            timestamp: "April 29, 2025 at 3:45 PM",
            shopName: "Cafe Bliss",
            rating: 4,
            text: "Amazing ambiance and the food was delicious. The service could be faster, but overall, great experience!, highly recommended!",
            image: "/images/review-example.jpg",
        },
        {
            id: 5,
            reviewer: "Jane Smith",
            profilePic: "/images/profile-jane.jpg",
            timestamp: "May 1, 2025 at 12:10 PM",
            shopName: "Style Studio",
            rating: 5,
            text: "Loved the variety of outfits and how helpful the staff were. Highly recommend!",
            image: "/images/review-fashion.jpg",
        },
        {
            id: 6,
            reviewer: "Jane Paul",
            profilePic: "/images/profile-john.jpg",
            timestamp: "May 1, 2025 at 12:10 PM",
            shopName: "Style Studio",
            rating: 5,
            text: "Loved the variety of outfits and how helpful the staff were. Highly recommend!",
            image: "/images/review-fashion.jpg",
        },
        {
            id: 4,
            reviewer: "John Doe",
            profilePic: "/images/profile-john.jpg",
            timestamp: "April 29, 2025 at 3:45 PM",
            shopName: "Cafe Bliss",
            rating: 4,
            text: "Amazing ambiance and the food was delicious. The service could be faster, but overall, great experience!, highly recommended!",
            image: "/images/review-example.jpg",
        },
        {
            id: 5,
            reviewer: "Jane Smith",
            profilePic: "/images/profile-jane.jpg",
            timestamp: "May 1, 2025 at 12:10 PM",
            shopName: "Style Studio",
            rating: 5,
            text: "Loved the variety of outfits and how helpful the staff were. Highly recommend!",
            image: "/images/review-fashion.jpg",
        },
        {
            id: 6,
            reviewer: "Jane Paul",
            profilePic: "/images/profile-john.jpg",
            timestamp: "May 1, 2025 at 12:10 PM",
            shopName: "Style Studio",
            rating: 5,
            text: "Loved the variety of outfits and how helpful the staff were. Highly recommend!",
            image: "/images/review-fashion.jpg",
        },
      ];
      
    return(
        <div className="overflow-x-hidden">
            {/* Navigation */}
            <nav className="relative z-20">
                <div className="max-w-7xl mx-auto py-2">
                    <div className="flex justify-between bg-transparent h-16 items-center">
                        <div className="flex space-x-8 items-center">
                            <button onClick={handleclick0} className="text-3xl text-indigo-500 font-bold">Moodify</button>
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
                            <button onClick={handleclick1} className="text-lg text-white hover:text-indigo-600 font-semibold">Restaurants</button>
                            <button onClick={handleclick2} className="text-lg text-white hover:text-indigo-600 font-semibold">Fashion</button>
                            <button onClick={handleclick3} className="text-lg text-white hover:text-indigo-600 font-semibold">Wellness</button>
                            <button href="#" className="text-lg text-white hover:text-indigo-600 font-semibold">Moodify&nbsp;for&nbsp;Buiness</button>
                        </div>
                        <div className="flex space-x-8 items-center">
                            <button onClick={handleclick4} className="text-lg text-white hover:text-indigo-600 font-semibold">Log&nbsp;In</button>
                            <button onClick={handleclick5} className="text-lg px-3 py-2 rounded-md text-white bg-indigo-500 hover:bg-indigo-600 font-semibold">Sign&nbsp;Up</button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Carousel: Offers! */}
            <div className="flex overflow-hidden pb-6 -mt-20">
                <div className="mx-auto w-screen h-screen">
                    <Slider {...settings}>
                        <div>
                            <div className="relative flex w-screen h-screen bg-cover bg-center text-left text-xl font-bold"
                            style={{ backgroundImage: `url(${RestaurantImg})` }}
                            >
                                <div className="absolute inset-0 bg-black/10 z-0"></div>
                                <div className="relative z-10 items-start justify-start mx-10 px-6 my-6 pt-16">
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
                            <div className="relative flex w-screen h-screen bg-cover bg-center text-left text-xl font-bold"
                            style={{ backgroundImage: `url(${FashionImg})` }}
                            >
                                <div className="absolute inset-0 bg-black/10 z-0"></div>
                                <div className="relative z-10 items-start justify-start mx-10 px-6 my-6 pt-16">
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
                            <div className="relative flex w-screen h-screen bg-cover bg-center text-left text-xl font-bold"
                            style={{ backgroundImage: `url(${WellnessImg})` }}
                            >
                                <div className="absolute inset-0 bg-black/10 z-0"></div>
                                <div className="relative z-10 items-start justify-start mx-10 px-6 my-6 pt-16">
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
            <section className="overflow-x-hidden pt-8 pb-8">
                <h2 className="text-4xl font-bold text-center my-2 pt-4"> This Week's Best in {getCityLabel(selectedCity)}, {getCountryLabel(selectedCountry)}</h2>
                <p className="text-sm font-semibold text-center mb-6 pb-6">Shops everyone’s talking about – highest rated by real users this week!</p>
                <div className="flex animate-scroll-x w-max space-x-14 overflow-x-hidden px-12 py-4 mb-8 justify-between">
                    {loopingShops.map((shop, idx) => (
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

            {/* Secondary Hero: Explore Categories */}
            <section className="text-center pb-20">
                <h2 className="text-4xl text-black font-bold mb-6 pb-6">Explore Categories</h2>
                <div className="flex flex-wrap justify-center mt-8 items-center space-x-16">
                    <a href="/" className="flex flex-col items-center justify-center w-60 h-60 px-4 py-6 bg-white rounded-2xl shadow-md border hover:bg-gray-50 transition text-center">
                        <img src={RestaurantIcon} alt="Clothes" className="w-32 h-32 mx-auto mb-2" />
                        <span className="text-base font-bold text-gray-700">Restaurants</span>
                    </a>
                    <a href="/" className="flex flex-col items-center justify-center w-60 h-60 px-4 py-6 bg-white rounded-2xl shadow-md border hover:bg-gray-50 transition text-center">
                        <img src={FashionIcon} alt="Clothes" className="w-32 h-32 mx-auto mb-2" />
                        <span className="text-base font-bold text-gray-700">Fashion</span>
                    </a>
                    <a href="/" className="flex flex-col items-center justify-center w-60 h-60 px-4 py-6 bg-white rounded-2xl shadow-md border hover:bg-gray-50 transition text-center">
                        <img src={WellnessIcon} alt="Clothes" className="w-32 h-32 mx-auto mb-2" />
                        <span className="text-base font-bold text-gray-700">Wellness</span>
                    </a>
                </div>
            </section>

            {/* Reviews */}
            <section className="text-center pb-28">
                <h2 className="text-4xl font-bold mb-2">Discover Reviews</h2>
                <p className="text-sm font-semibold mb-6 pb-12">Trusted feedback on foods, clothes, and grooming shops</p>
                <div className="grid gap-6 grid-cols-3 flex-wrap justify-start px-28">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-white rounded-2xl shadow-md border p-4 space-y-2 max-w-md w-full">
                            {/* Reviewer Info */}
                            <div className="flex items-center justify-between">
                                {/* Left: profile pic + name */}
                                <div className="flex items-left space-x-3">
                                    <img
                                        src={review.profilePic}
                                        alt={review.reviewer}
                                        className="w-12 h-12 rounded-full object-cover border"
                                    />
                                    <div>
                                        <p className="font-bold text-left text-gray-800">{review.reviewer}</p>
                                        <p className="text-sm text-left text-gray-500">{review.timestamp}</p>
                                    </div>
                                </div>
                            </div>
                            <hr className="border-t border-gray-200" />
                            {/* Shop Name */}
                            <p className="text-lg text-left font-bold text-gray-950">{review.shopName}</p>
                            {/* Star Rating */}
                            <div className="flex items-center space-x-1 ">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className={`w-5 h-5 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.184 3.63a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.184 3.63c.3.921-.755 1.688-1.54 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.784.57-1.838-.197-1.539-1.118l1.184-3.63a1 1 0 00-.364-1.118L2.32 9.057c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.184-3.63z"/>
                                    </svg>
                                ))}
                                <span className="text-sm text-gray-600">({review.rating}/5)</span>
                            </div>
                            {/* Review Text */}
                            <p className="text-sm text-left text-gray-700 pb-2">{review.text}</p>
                            {/* Review Image */}
                            <img
                                src={review.image}
                                alt="Review"
                                className="w-full h-36 object-cover rounded-md border"
                            />
                            {/* Helpful Buttons */}
                            <div className="flex justify-end space-x-3">
                                <button className="text-sm text-green-600 hover:underline">Helpful</button>
                                <button className="text-sm text-red-500 hover:underline">Not Helpful</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white pt-10 pb-5">
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

export default Home;