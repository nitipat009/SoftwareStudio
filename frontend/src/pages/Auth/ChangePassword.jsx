import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Sidebar from "../../components/Sidebar";
import { isAuth, updateUser } from "../../helpers/auth";
function ChangePassword() {
  const path = useLocation().pathname;
  const [data, setData] = useState({
    id: isAuth().id,
    username: isAuth().username,
    old_password: "",
    password: "",
    confirmPassword: "",
    img: isAuth().img === undefined ? null : isAuth().img,
    isAdmin: isAuth().isAdmin,
    isBan: isAuth().isBan,
  });

  const handleData = (text) => (e) => {
    setData({ ...data, [text]: e.target.value });
  };

  const handleValidation = () => {
    if (
      data.old_password.length === 0 ||
      data.password.length === 0 ||
      data.confirmPassword.length === 0
    ) {
      if (data.old_password.length === 0) {
        document
          .getElementById("old_password")
          .setAttribute("required", "true");
      }
      if (data.password.length === 0) {
        document
          .getElementById("new_password")
          .setAttribute("required", "true");
      }
      if (data.confirmPassword.length === 0) {
        document.getElementById("cf_password").setAttribute("required", "true");
      }

      toast.warn("Please Fill All Fields.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return false;
    }

    if (data.password !== data.confirmPassword) {
      toast.warn("Password doesn't match!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return false;
    }

    return handlesave();
  };

  const requestChange = async () => {
    console.log(data)
    const res = await axios.put(
      `https://localhost:7198/api/Users/UpdatePassword/${data.old_password}`,
      {
        id: data.id,
        username: data.username,
        password: data.password,
        confirmPassword: data.confirmPassword,
        img: data.img,
        isAdmin: data.isAdmin,
        isBan: data.isBan,
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    updateUser({
      id: data.id,
      username: data.username,
      password: data.password,
      confirmPassword: data.confirmPassword,
      img: data.img,
      isAdmin: data.isAdmin,
      isBan: data.isBan,
    });
  };

  const handlesave = async () => {
    const res = await toast.promise(requestChange, {
      pending: "Pending...",
      error: "Change Failed!",
      success: "Changed!",
    });
  };
  return (
    <div className="flex flex-row-cols-2 h-full w-full overflow-y-hidden">
      <section className="flex h-screen items-center">
        {/* Sidebar */}
        <Sidebar pathname={path} />
      </section>
      <section className="flex h-screen w-full items-center">
        <form className="flex flex-col w-full h-screen  justify-center items-center ">
          {/* New Password */}
          <div className="flex flex-col p-8 bg-gray-100 shadow-md rounded">
            <div className="flex flex-row items-center gap-x-2 justify-between">
              <h4 className="font-normal">Old Password</h4>
              <div>
                <input
                  type={"password"}
                  id="old_password"
                  value={data.old_password}
                  onChange={handleData("old_password")}
                  className="p-2 border-b-2 border-black required:border-rose-500 required:rounded bg-transparent"
                />
              </div>
            </div>
            {/* New_password */}
            <div className="flex flex-row items-center gap-x-2 justify-between">
              <h4 className="font-normal">New Password</h4>
              <div>
                <input
                  type={"password"}
                  id="new_password"
                  value={data.password}
                  onChange={handleData("password")}
                  className="p-2 border-b-2 border-black required:border-rose-500 required:rounded bg-transparent"
                />
              </div>
            </div>
            {/* Confirm New Password */}
            <div className="flex flex-row items-center gap-x-2 justify-between">
              <h4 className="font-normal">Confirm New Password</h4>
              <div>
                <input
                  type={"password"}
                  id="cf_password"
                  value={data.confirmPassword}
                  onChange={handleData("confirmPassword")}
                  className="p-2 border-b-2 border-black required:border-rose-500 required:rounded bg-transparent"
                />
              </div>
            </div>
            {/* Submit Button */}
            <button
              id="button"
              type="button"
              class="bg-orange hover:bg-opacity-60 active:hover:bg-opacity-40 rounded text-3xl font-bold text-white mt-5"
              onClick={handleValidation}
            >
              Change Password
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default ChangePassword;
