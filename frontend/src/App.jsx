import React, { useState, useEffect, useLayoutEffect } from "react";
import "./App.css";
import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./PrivateRoutes";

// components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";
import Aboutus from "./pages/Aboutus";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateBlog from "./pages/CreateBlog";
import Personal from "./pages/Auth/Personal";
import ChangePassword from "./pages/Auth/ChangePassword";
import Dashboard from "./pages/Auth/Dashboard";
import Logout from "./pages/Auth/Logout";
// helpers
import { isAuth } from "./helpers/auth";

function App() {
  const permission = () => {
    if (isAuth()) {
      return true;
    } else {
      return false;
    }
  };

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
        {/* Auth */}
        <Route element={<PrivateRoute auth={permission() || true} />}> {/*Dev*/}
          <Route path={"/Createblog"} element={<CreateBlog />} />
          <Route path={"/Profile"} element={<Personal />} />
          <Route path={"/ChangePassword"} element={<ChangePassword />} />
          <Route path={"/Dashboard"} element={<Dashboard />} />
          <Route path={"Logout"} element={<Logout/>}/>
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
