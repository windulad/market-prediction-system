import React, { useState,useEffect } from "react";
// import './App.css';
import Home from './components/home';
import LogIn from './components/login';
import SignUp from './components/signup';
import Restaurants from './components/restaurants';
import Fashion from './components/fashion';
import Wellness from './components/wellness';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/restaurants" element={<Restaurants/>}/>
        <Route path="/fashion" element={<Fashion/>}/>
        <Route path="/wellness" element={<Wellness/>}/>
    </Routes>
  );
}

export default App;
