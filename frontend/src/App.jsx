import React, { useState, useEffect, useLayoutEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";
import Aboutus from "./pages/Aboutus";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const notify = () => toast("Wow so easy!");
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/Blog"} element={<Blog />} />
        <Route path={"/Contacts"} element={<Contacts />} />
        <Route path={"/Aboutus"} element={<Aboutus />} />
        <Route path={"/Login"} element={<Login />} />
        <Route path={"/Register"} element={<Register />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
