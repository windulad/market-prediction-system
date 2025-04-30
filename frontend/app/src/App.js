import React, { useState,useEffect } from "react";
import './App.css';
import Index from './components/index';
import LogIn from './components/login';
import SignUp from './components/signup';
import Foods from './components/foods';
import Clothes from './components/clothes';
import Grooming from './components/grooming';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/foods" element={<Foods/>}/>
        <Route path="/clothes" element={<Clothes/>}/>
        <Route path="/grooming" element={<Grooming/>}/>
    </Routes>
  );
}

export default App;
