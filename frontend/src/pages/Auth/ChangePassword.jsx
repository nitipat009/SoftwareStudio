import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Sidebar from "../../components/Sidebar";

function ChangePassword() {
  const path = useLocation().pathname;
  const [data, setData] = useState({
    id: "",
    old_password: "",
    new_password: "",
    cf_password: "",
  });

  const handleData = (text) => (e) => {
    setData({ ...data, [text]: e.target.value });
  };

  const handleValidation = () => {
    if (
      data.old_password.length === 0 ||
      data.new_password.length === 0 ||
      data.cf_password.length === 0
    ) {
      if (data.old_password.length === 0) {
        document
          .getElementById("old_password")
          .setAttribute("required", "true");
      }
      if (data.new_password.length === 0) {
        document
          .getElementById("new_password")
          .setAttribute("required", "true");
      }
      if (data.cf_password.length === 0) {
        document.getElementById("cf_password").setAttribute("required", "true");
      }

      toast.warn("Please Fill All Fields.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return false;
    }

    if (data.new_password !== data.cf_password) {
      toast.warn("Password doesn't match!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return false;
    }

    return handlesave();
  };

  const requestChange = async () => {};

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
                  value={data.new_password}
                  onChange={handleData("new_password")}
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
                  value={data.cf_password}
                  onChange={handleData("cf_password")}
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
