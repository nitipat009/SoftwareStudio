import React, { useState } from "react";
import imgUrl from "../assets/bg/Login.png";
import { ToastContainer, toast } from "react-toastify";
import {authenticate} from '../helpers/auth';
import axios from "axios";


function Register() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    cf_password: "",
  });

  const handleData = (text) => (e) => {
    setUser({ ...user, [text]: e.target.value });
  };

  const handleValidation = () => {
    if (
      user.username.length === 0 ||
      user.password.length === 0 ||
      user.cf_password.length === 0
    ) {
      if (user.username.length === 0) {
        document.getElementById("username").setAttribute("required", "true");
      }
      if (user.password.length === 0) {
        document.getElementById("password").setAttribute("required", "true");
      }
      if (user.cf_password.length === 0) {
        document.getElementById("cf_password").setAttribute("required", "true");
      }

      return false;
    }

    return true;
  };


  const requestRegister = async() => {
    // Backend
    const res = await axios.post(`https://localhost:7198/api/Users`,{
      username : user.username,
      password : user.password,
      confirmpassword : user.cf_password
    },{
      headers : {
        'Accept' : 'application/json'
      }
    })
  }

  const contactSubmit = async(e) => {
    e.preventDefault();

    if (handleValidation()) {
      if (user.password !== user.cf_password) {
        toast.warn("Password doesn't match!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        const res = await toast.promise(requestRegister,{pending : "Pending..." , error: 'Registor Failed!' , success : "Thank to join us!"})
      }
    } else {
      toast.warn("Please Fill All Fields.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    <div className="h-screen w-full flex flex-row-cols-2 overflow-hidden">
      {/* Left */}
      <section className="flex w-full h-full justify-center">
        <div className="flex w-full h-full p-24">
          <form
            action="#"
            className="flex flex-col w-full h-full justify-center gap-2 text-xl"
            onSubmit={contactSubmit}
          >
            <h1 className="text-3xl font-bold ">Register</h1>
            <h3>Username</h3>
            <input
              id="username"
              type={"text"}
              value={user.username}
              onChange={handleData("username")}
              className="border-b-2 border-black required:border-2 required:border-rose-500 required:rounded"
            />
            <h3>Password</h3>
            <input
              id="password"
              type={"password"}
              value={user.password}
              onChange={handleData("password")}
              className="border-b-2 border-black required:border-2 required:border-rose-500 required:rounded"
            />
            <h3>Confirm Password</h3>
            <input
              id="cf_password"
              type={"password"}
              value={user.cf_password}
              onChange={handleData("cf_password")}
              className="border-b-2 border-black required:border-2 required:border-rose-500 required:rounded"
            />
            {/* Submit Button */}
            <button
              type="Submit"
              class="bg-orange hover:bg-opacity-60 active:hover:bg-opacity-40 rounded text-3xl font-bold text-white"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>

      {/* Right */}
      <section className="flex h-screen items-center">
        <img className="object-cover" src={imgUrl} />
      </section>
    </div>
  );
}

export default Register;
