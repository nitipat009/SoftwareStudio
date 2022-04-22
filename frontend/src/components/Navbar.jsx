import React, { useState, useEffect ,useLocation , useLayoutEffect} from "react";
import { Link } from "react-router-dom";
import { isAuth } from "../helpers/auth";
import { NavLink } from "react-router-dom";
function Navbar() {
  // const [isLoggedIn, setisLoggedIn] = useState(
  //     true
  // );
  // const [isLoggedIn_user, setisLoggedIn_user] = useState(false);
  // const [isLoggedIn_host, setisLoggedIn_host] = useState(false);

  // var message = "LOGIN | SIGNUP";
  // if (isAuth()) {
  //   message = isAuth().username;
  // }
  const [state,setState] = useState('Home');
  const [pathlink,setPath] = useState('');
  const handlechange = text => () =>{
    setState(text)
  }

  useLayoutEffect(() => {
    const path = location.pathname;
    setPath(path)
  },[state])
  
  return (
    <div className="flex w-full absolute vsz-[9999] ">
      <nav className="h-[8em] w-full flex flex-row bg-white bg-opacity-60 m-auto p-auto items-center pt-2 pl-16 content-center  ">
        {/* Logo */}
        <div className="basis-1/2">
          <h1 className="text-6xl">ArjanRed</h1>
        </div>


      
        {/* Nav */}
        <ul id = "mobile-menu" className="hidden md:flex md:flex-row md:space-x-[0.5em] md:text-xl md:items-center">
          <li>
            <NavLink to={"/"} onClick={handlechange("Home")}>Home</NavLink>
          </li>
          <div
            style={{
              width: "46px",
              height: "0px",
              left: "930px",
              top: "51px",
              border: "1px solid #000000",
              transform: "rotate(90deg)",
              background: "#000000",
            }}
          ></div>
          <li>
            <NavLink to={"/Aboutus"} onClick={handlechange("Aboutus")}>About us</NavLink>
          </li>
          <div
            style={{
              width: "46px",
              height: "0px",
              left: "930px",
              top: "51px",
              border: "1px solid #000000",
              transform: "rotate(90deg)",
              background: "#000000",
            }}
          ></div>
          <li>
            <NavLink to={"/Blog"} onClick={handlechange("Blog")}>Blog</NavLink>
          </li>
          <div
            style={{
              width: "46px",
              height: "0px",
              left: "930px",
              top: "51px",
              border: "1px solid #000000",
              transform: "rotate(90deg)",
              background: "#000000",
            }}
          ></div>
          <li>
            <NavLink to={"/Contacts"} onClick={handlechange("Contacts")} >Contacts</NavLink>
          </li>
          {/* Button */}
        </ul>
        {/* Button */}
        <div className="w-40 h-8 bg-orange inline-flex items-center text-white text-xl space-x-[0.5em] m-auto p-auto justify-between pl-2 pr-2 rounded">
          {/* Login */}
          <NavLink to={"/Login"} onClick={handlechange("Login")} className={pathlink==="/Login" ? "bg-white bg-opacity-30 rounded" : ""}>Login</NavLink>
          {/* Line */}
          <div
            className="h-6"
            style={{
              left: "930px",
              top: "51px",
              border: "1px solid #FFFFFF",
              background: "#FFFFFF",
            }}
          ></div>
          {/* Register */}
          <NavLink to={"/Register"} onClick={handlechange("Register")} className={pathlink==="/Register" ? "bg-white bg-opacity-30 rounded" : ""}>Register</NavLink>
        </div>

        
      </nav>
    </div>
  );
}

export default Navbar;