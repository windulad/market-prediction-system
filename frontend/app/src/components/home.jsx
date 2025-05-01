import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function Home(){
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

        </div>
    )
}

export default Home;