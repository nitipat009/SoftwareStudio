import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { isAuth } from "../helpers/auth";
import uploadimg from "../hooks/uploadimg";

function CreateBlogEasy() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
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
    username: isAuth().username,
    title: "",
    info: "",
    img: "",
  });
  const handleData = (text) => (e) => {
    setData({ ...data, [text]: e.target.value });
  };

  const sendData = async () => {
    if (file !== null) {
      const img_url = await uploadimg(file);
      data.img = img_url.file.url;
      const res = await toast.promise(
        async () => {
          await axios.post(
            `https://localhost:7198/api/Blogs`,
            {
              username: data.username,
              Tag: data.title,
              Image: data.img,
              Detail: data.info,
            },
            {
              headers: {
                Accept: "application/json",
              },
            }
          );
        },
        {
          pending: "Pending...",
          error: "Add Blog Failed!",
          success: "Add Blog Success!",
        }
      );
      navigate(-1)
    }
  };

  return (
    <>
      <div className="flex flex-col h-full w-full">
        {/* Section Create Blog */}
        <section className="mt-16 h-full justify-center p-16">
          <h1>Create Blog</h1>
          <form className="flex flex-col w-full h-screen  justify-center items-center ">
            {/* Image */}
            <label class="flex flex-col w-full h-64 mt-16">
              <div class="flex flex-col items-center justify-center pt-7">
                <img
                  id="preview"
                  className="absolute object-cover rounded w-1/2 h-64 border-4  border-dashed "
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
                onChange={showPreview(this)}
              />
            </label>
            <div className="flex flex-col w-full h-screen ">
              <div className="flex flex-row mt-16 items-center gap-x-2 ">
                <h4 className="font-normal">Title</h4>
                <div>
                  <input
                    type={"text"}
                    id="username"
                    value={data.title}
                    onChange={handleData("title")}
                    className="p-2 border-b-2 border-black required:border-rose-500 required:rounded bg-transparent"
                  />
                </div>
              </div>
              {/* Role */}
              <div className="flex flex-row items-center gap-x-2">
                <h4 className="font-normal">Info</h4>
                <div>
                  <textarea
                    type={"text"}
                    id="role"
                    value={data.info}
                    className="p-16 border-b-2 border-black required:border-rose-500 required:rounded bg-transparent"
                    onChange={handleData("info")}
                  />
                </div>
              </div>
              {/* Submit Button */}
              <button
                id="button"
                type="button"
                class="bg-orange hover:bg-opacity-60 active:hover:bg-opacity-40 rounded text-3xl font-bold text-white mt-5"
                onClick={sendData}
              >
                Save
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

export default CreateBlogEasy;
