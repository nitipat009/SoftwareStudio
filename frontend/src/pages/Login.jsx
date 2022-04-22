import React, { useState } from "react";
import imgUrl from "../assets/bg/Login.png";
import { ToastContainer, toast } from "react-toastify";
function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleData = (text) => (e) => {
    setUser({ ...user, [text]: e.target.value });
  };

  const handleValidation = () => {
    if (user.username.length === 0 || user.password.length === 0) {
      if (user.username.length === 0) {
        document.getElementById("username").setAttribute("required", "true");
      }
      if (user.password.length === 0) {
        document.getElementById("password").setAttribute("required", "true");
      }
      return false;
    }

    return true;
  };

  const contactSubmit = (e) => {
    e.preventDefault();

    if (handleValidation()) {
      
      toast.success("Welcome! " + user.username, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.warn("Please Fill All Fields.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div className="h-screen w-full flex flex-row-cols-2 overflow-hidden">
      {/* Left */}
      <section className="flex h-screen items-center">
        <img className="object-cover" src={imgUrl} />
      </section>
      {/* Right */}

      <section className="flex w-full h-full justify-center">
        <div className="flex w-full h-full p-24">
          <form
            action="#"
            className="flex flex-col w-full h-full justify-center gap-5 text-xl"
            onSubmit={contactSubmit}
          >
            <h1 className="text-3xl font-bold">Log In</h1>
            <h3>Username</h3>
            <input
              type={"text"}
              id="username"
              value={user.username}
              onChange={handleData("username")}
              className="border-b-2 border-black required:border-rose-500 required:rounded"
            />
            <h3>Password</h3>
            <input
              type={"password"}
              id="password"
              value={user.password}
              onChange={handleData("password")}
              className="border-b-2 border-black required:border-rose-500 required:rounded"
            />
            {/* Submit Button */}
            <button
              type="submit"
              class="bg-orange hover:bg-opacity-60 active:hover:bg-opacity-40 rounded text-3xl font-bold text-white"
            >
              Sign In
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
