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
    const parseData = async() =>{
      const req = await axios.post(
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
    }
    if (file !== null) {
      const img_url = await uploadimg(file);
      data.img = img_url.file.url;
      const res = await toast.promise(
        parseData,
        {
          pending: "Pending...",
          error: "Add Blog Failed!",
          success: "Add Blog Success!",
        }
      );

      if(res.data.status_code === 400){
        toast.error(res.data.error.message)
      }
      navigate(-1)
    }else{
      toast.warn("Please Fill All Field!")
    }
  };

  return (
    <>
      <div className="flex flex-col h-full w-[full] items-center">
        {/* Section Create Blog */}
        <div className="mt-16 h-full pt-10 w-[650px]">
  <h1>Create Blog</h1>
        <section >
          
          <form className="flex flex-col w-full h-screen  justify-center items-center ">
            {/* Image */}
            <label class="flex flex-col w-full h-64 mt-16">
              <div class="flex flex-col items-center justify-center pt-7">
                <img
                  id="preview"
                  className="absolute object-cover rounded w-[650px] h-64 border-4  border-dashed "
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
              <div className="flex flex-row mt-3 items-center gap-x-2 ">
                <h4 className="font-normal">Title :</h4>
                <div>
                  <input
                    type={"text"}
                    id="username"
                    value={data.title}
                    required={true}
                    onChange={handleData("title")}
                    className=" border-b-2 border-black required:border-rose-500 required:rounded bg-transparent"
                  />
                </div>
              </div>
              {/* Role */}
               <h4 className="font-normal -mt-1">Details :</h4>
              <div className="flex flex-row items-center w-full">
               
                <div>
                <textarea
           
              class="
        form-control
        block
        w-full
        px-3
        py-1
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        -mt-3
        focus:text-gray-700 focus:bg-white focus:border-orange focus:outline-none
        resize-none
      "
              id="role"
              rows="5"
              cols="1000"
              required={true}
              placeholder="Your Details..."
              onChange={handleData("info")}
              type={"text"}
              
                    value={data.info}
            ></textarea>
                  {/* <textarea
                   
                    className=" border-b-2 border-black required:border-rose-500 required:rounded bg-transparent"
                    
                  /> */}
                </div>
              </div>
              {/* Submit Button */}
              <button
                id="button"
                type="button"
                class="bg-orange hover:bg-opacity-60 active:hover:bg-opacity-40 rounded text-3xl font-bold text-white mt-5 py-1"
                onClick={sendData}
              >
                Save
              </button>
            </div>
          </form>
        </section>
        </div>
      
      </div>
    </>
  );
}

export default CreateBlogEasy;
