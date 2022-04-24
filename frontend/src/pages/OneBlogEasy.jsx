import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { isAuth } from "../helpers/auth";

export default function OneBlogEasy() {
  const id = useParams().id;

  useEffect(() => {
    fetchData();
  }, []);

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
    date: ""
  });
  const handleData = (text) => (e) => {
    setData({ ...data, [text]: e.target.value });
  };

  const fetchData = async () => {
    const res = await axios.get(
      `https://localhost:7198/api/Blogs/Display/${id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    console.log(res.data);
    data.title = res.data.tag;
    data.info = res.data.detail;
    data.img = res.data.img;
    data.date = res.data.date;
  };
  return (
    <div className="flex flex-col h-full w-full">
      {/* Section Create Blog */}
      <section className="mt-16 h-full justify-center p-16">
        <h1>{data.title}</h1>
        <h3>
          Author : {data.username} Date : {data.date}
        </h3>
        <div className="flex flex-col w-full h-screen  justify-center items-center ">
          {/* Image */}
          <label class="flex flex-col w-full h-64 mt-16">
            <div class="flex flex-col items-center justify-center pt-7">
              <img
                id="preview"
                className="object-cover rounded w-1/2 h-96"
                src={data.img}
              />
            </div>
          </label>
          {/* Title */}
          <div className="flex flex-col w-full h-screen ">
            <div className="flex flex-row mt-16 items-center gap-x-2 ">
              <h4 className="font-normal">Title</h4>
              <div>
                <input
                  type={"text"}
                  value={data.title}
                  onChange={handleData("title")}
                  className="p-2 border-b-2 border-black required:border-rose-500 required:rounded bg-transparent"
                />
              </div>
            </div>
            {/* Info */}
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
            >
              Save
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
