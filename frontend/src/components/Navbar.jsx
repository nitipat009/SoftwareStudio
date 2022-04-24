import React, {
  useState,
  useEffect,
  useLocation,
  useLayoutEffect,
  useContext
} from "react";
import { Link } from "react-router-dom";
import { isAuth } from "../helpers/auth";
import { NavLink } from "react-router-dom";
import logoUrl from "../assets/logo.png";

function Navbar() {
  // const [isLoggedIn, setisLoggedIn] = useState(
  //     true
  // );
  // const [isLoggedIn_user, setisLoggedIn_user] = useState(false);
  // const [isLoggedIn_host, setisLoggedIn_host] = useState(false);

  var message = false;
  
  const [state, setState] = useState("Home");
  const [pathlink, setPath] = useState("");
  const [isLogin,SetLogin] = useState(false);

  const handlechange = (text) => () => {
    setState(text);
  };
  const [showM_Nav, setShowM_Nav] = useState(false);
  useLayoutEffect(() => {
    const path = location.pathname;
    setPath(path);
    
  }, [state]);

  var scrollCheck = false;
  window.addEventListener('scroll', (e) => {
    if (!scrollCheck && window.scrollY < 508) {
      document.getElementById('nav').style.backgroundColor = 'rgba(255, 255, 255, 0.6)'
      scrollCheck = true
    }
    else if (scrollCheck && window.scrollY >= 508) {
      document.getElementById('nav').style.backgroundColor = 'rgba(255, 255, 255, 1)'
      scrollCheck = false
    }
  })
  
  return (
    <div className="flex w-full absolute vsz-[9999]">
      <nav className="h-[5em] w-full flex bg-white m-auto p-auto items-center pt-2 pl-16 pr-12 fixed z-50 drop-shadow-xl" id="nav" style={{backgroundColor:'rgba(255, 255, 255, 0.6)', transitionProperty: "all", transitionDuration: "0.6s"}}>
        {/* Logo */}
        <div className="" style={{width: "300px"}}>
          {/* <h1 className="text-4xl md:text-6xl">ArjanRed</h1> */}
          <img className="" alt="logo" src={logoUrl} width="240" />
        </div>
        {/* Button */}
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          class="absolute items-center right-10 p-2 ml-3 text-sm text-white rounded-lg md:hidden bg-orange opacity-80"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={() => setShowM_Nav(!showM_Nav)}
          style={{marginTop: "-8px"}}
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            class="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>

        {/* Nav */}
        <div id="mobile-menu" className={(showM_Nav ? "visible " : "hidden " ) + "  nav-mobile-screen md:w-full md:flex md:items-end"}>
          <div style={{width: "60px"}}></div>
          <ul className="flex flex-col md:flex-row md:space-x-[0.5em] md:text-xl" aria-labelledby="dropdownButton" style={{marginTop: "-8px"}}>

            <li>
              <NavLink className={"px-8 block hover:animate-pulse"} to={"/"} onClick={handlechange("Home")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={"px-8 hover:animate-pulse"} to={"/Blog"} onClick={handlechange("Blog")}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink className={"px-8 hover:animate-pulse"} to={"/Aboutus"} onClick={handlechange("Aboutus")}>
                About us
              </NavLink>
            </li>

            <li className="md:hidden">
              <NavLink to={"/Login"} onClick={handlechange("Login")}>
              Login
              </NavLink>
            </li>
            <li className="md:hidden">
              <NavLink to={"/Register"} onClick={handlechange("Register")}>
              Register
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Button */}
        <div className={(isAuth() ? "hidden " : "visible ") + "mobile-screen w-48 h-12 bg-orange inline-flex items-center text-white text-xl space-x-[0.7em] px-4 rounded"} style={{marginTop: "-0.5em"}}>
          {/* Login */}
          <NavLink
            to={"/Login"}
            onClick={handlechange("Login")}
            className={
              pathlink === "/Login" ? "bg-white bg-opacity-30 rounded" : "" + "hover:animate-pulse"
            }
          >
            Login
          </NavLink>
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
          <NavLink
            to={"/Register"}
            onClick={handlechange("Register")}
            className={
              pathlink === "/Register" ? "bg-white bg-opacity-30 rounded" : "" + "hover:animate-pulse"
            }
          >
            Register
          </NavLink>
        </div>

        <div className={(isAuth() ? "visible " : "hidden ") + "mobile-screen w-40 h-8 bg-orange inline-flex items-center text-white text-xl space-x-[0.5em] m-auto p-auto justify-center pl-2 pr-2 rounded"}>
          {/* Login */}
          <NavLink
            to={"/Profile"}
            onClick = {handlechange("Profile")}
            className={
              pathlink === "/Profile" ? "bg-white bg-opacity-30 rounded p-2" : ""
            }
          >
            {isAuth().username}
          </NavLink>
        </div>   
        
      </nav>
    </div>
  );
}

export default Navbar;
