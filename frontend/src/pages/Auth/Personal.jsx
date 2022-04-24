import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { toast } from "react-toastify";
import axios from "axios";
import uploadimg from "../../hooks/uploadimg";
import { isAuth, updateUser } from "../../helpers/auth";

function Personal() {
  const path = useLocation().pathname;

  const [file, setFile] = useState(null);
  const showPreview = (file) => (event) => {
    if (event.target.files.length > 0) {
      var src = URL.createObjectURL(event.target.files[0]);
      var preview = document.getElementById("preview");
      preview.src = src;
      preview.style.display = "block";
      setFile(event.target.files[0]);
    }
  };

  const [data, setData] = useState({
    id: isAuth().id,
    username: isAuth().username,
    password: isAuth().password,
    confirmPassword: isAuth().confirmPassword,
    img: isAuth().img === undefined ? null : isAuth().img,
    isAdmin: isAuth().isAdmin,
    isBan: isAuth().isBan,
  });

  const [onedit, setedit] = useState(false);

  const handleData = (text) => (e) => {
    setData({ ...data, [text]: e.target.value });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    var preview = document.getElementById("preview");
    if (isAuth().img !== null || isAuth().img !== undefined) {
      preview.src = isAuth().img;
    }
  };

  const saveData = async () => {
    // Setup Image
    if (file !== null) {
      const img_url = await uploadimg(file);
      // Save to Backend
      data.img = img_url.file.url
      const res = await axios.put(
        `https://localhost:7198/api/Users/${data.id}`,
        {
          id: data.id,
          username: data.username,
          password: data.password,
          confirmPassword: data.confirmPassword,
          img: data.img,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      console.log(img_url.file.url);
      updateUser(data);
    }
  };

  const handleEdit = async () => {
    const edit_btn = document.getElementById("button");
    const user_input = document.getElementById("username");
    const image_input = document.getElementById("image-upload");

    if (edit_btn.value == "Save") {
      const res = await toast.promise(saveData(), {
        pending: "Data is pending!",
        error: "Data rejected!",
        success: "Success!",
      });
    } else {
      toast.success("Ready to edit!");
      setedit(!onedit);

      
      image_input.disabled = !image_input.disabled;
    }
  };

  return (
    <div className="flex flex-row-cols-2 h-full w-full overflow-y-hidden">
      <section className="flex h-screen items-center">
        {/* Sidebar */}
        <Sidebar pathname={path} />
      </section>
      <section className="flex h-screen w-full items-center bg-gray-100 shadow-md rounded">
        <form className="flex flex-col w-full h-screen  justify-center items-center ">
          {/* Image */}
          <label class="flex flex-col w-full h-32 mt-32">
            <div class="flex flex-col items-center justify-center pt-7">
              <img
                id="preview"
                className="absolute object-cover rounded-full w-64 h-64 border-4 rounded-full border-dashed "
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clip-rule="evenodd"
                />
              </svg>
              <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                Select a photo
              </p>
            </div>
            <input
              id="image-upload"
              type="file"
              class="opacity-0"
              accept="image/*"
              disabled={true}
              onChange={showPreview(this)}
            />
          </label>
          {/* Username */}
          <div className="flex flex-col p-auto ">
            <div className="flex flex-row mt-16 items-center gap-x-2 ">
              <h4 className="font-normal">Username</h4>
              <div>
                <input
                  type={"text"}
                  id="username"
                  value={data.username}
                  onChange={handleData("username")}
                  className="p-2 border-b-2 border-black required:border-rose-500 required:rounded bg-transparent"
                  readOnly={true}
                />
              </div>
            </div>
            {/* Role */}
            <div className="flex flex-row items-center gap-x-2 justify-between">
              <h4 className="font-normal">Role</h4>
              <div>
                <input
                  type={"text"}
                  id="role"
                  value={data.isAdmin === "True" ? "Admin" : "User"}
                  className="p-2 border-b-2 border-black required:border-rose-500 required:rounded bg-transparent"
                  readOnly={true}
                />
              </div>
            </div>
            {/* Submit Button */}
            <button
              id="button"
              type="button"
              class="bg-orange hover:bg-opacity-60 active:hover:bg-opacity-40 rounded text-3xl font-bold text-white mt-5"
              onClick={handleEdit}
              value={onedit ? "Save" : "Edit"}
            >
              {onedit ? "Save" : "Edit"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Personal;
