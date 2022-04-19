import React, { useState, useEffect, useLayoutEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

// components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";
import Aboutus from "./pages/Aboutus";


function App() {


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/Blog"} element={<Blog/>}/>
      <Route path={"/Contacts"} element={<Contacts/>}/>
      <Route path={"/Aboutus"} element={<Aboutus/>}/>
    </Routes>
    </>
  )
}

export default App
