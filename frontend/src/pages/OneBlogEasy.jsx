import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import AddComment from "../components/AddComment";
import CommentCard from "../components/CommentCard";
import { isAuth } from "../helpers/auth";

export default function OneBlogEasy() {
  const id = useParams().id;
  const navigate = useNavigate();

 // Date formatter
  const longEnUSFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const [componetcomment, setComComment] = useState();
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
    id: id,
    username: isAuth().username,
    title: "",
    info: "",
    img: "",
    date: "",
    like: 0,
    comments: [],
  });

  const [isLike, setLike] = useState(false);
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

    const res_com = await axios.get(
      `https://localhost:7198/api/LikeBlogs/getLikeBlog/${id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    res_com.data.forEach((e) => {
      if (e === isAuth().id) {
        return setLike(true);
      }
    });

    setData({
      id: id,
      title: res.data.tag,
      info: res.data.detail,
      img: res.data.img,
      date: longEnUSFormatter.format(new Date(res.data.date)),
      like: res.data.likes,
      comments: res.data.comments,
      username: res.data.username,
    });
  };

  const handleDelete = async () => {
    const deleteRequest = async () => {
      const res = await axios.delete(
        `https://localhost:7198/api/Blogs/${data.id}`,
        {
          data: {
            username: isAuth().username,
            password: isAuth().password,
            confirmPassword: isAuth().confirmPassword,
            img: isAuth().img,
            isAdmin: isAuth().isAdmin,
            isBan: isAuth().isBan,
          },
          header: {
            "Content-Type": "application/json",
          },
        }
      );
      return res.data;
    };
    
    await toast.promise(deleteRequest, {
      pending: "Pending...",
      error: "Delete Failed!",
      success: "Remove Blogs complete.",
    });

    navigate(-1)
  };

  const likeHandler = async () => {
    if (isLike) {
      setLike((state) => {
        return state - 1;
      });
    }
    if (!isLike) {
      setLike((state) => {
        return state + 1;
      });
    }
    setLike((state) => {
      return !state;
    });
    // do something here
    const res = await axios.post(`https://localhost:7198/api/LikeBlogs`, {
      UserId: isAuth().id,
      BlogId: data.id,
    });
    window.location.reload();
  };
  return (
    <div className="flex flex-col items-center w-full ">
      <div className="h-[9em]"></div>
      {/* Section Create Blog */}
      <section className="w-[650px] ">
        <div className="flex items-center justify-between">
          <div className="font-bold text-4xl">{data.title}</div>
          <div className="flex items-center">
            <span className="px-2 text-xl">{data.like}</span>
            <svg
              class={`h-10 w-10 text-red-500 hover:text-red-800 cursor-pointer ${
                isLike ? "fill-red-500 hover:text-red-300" : null
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              onClick={isAuth() ? likeHandler : (()=>{toast.warn("Please Login!")})}
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
        </div>

        <div className="text-xl mt-2 flex items-center">
          Author : {data.username}
          <svg
            className="h-4 w-4 text-gray-800 inline-block ml-3 mr-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          {data.date}
          <button
            id="button"
            type="button"
            className={
              (isAuth().isAdmin === "True" ? " " : "hidden ") +
              "hover:opacity-60 rounded font-bold text-white"
            }
            onClick={handleDelete}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
            </svg>
          </button>
        </div>
        <div className="">
          {/* Image */}
          <label class="">
            <div class="">
              <img
                id="preview"
                className="my-5 rounded-3xl w-full max-h-[400px] object-cover"
                src={data.img}
              />
            </div>
          </label>
          {/* Title */}
          <div className="">
            <div className=""></div>
            {/* Info */}
            <div className="indent-6 text-justify">
              <div>{data.info}</div>
            </div>
            {/* Submit Button */}
          </div>
        </div>
      </section>

      {data.comments.map((e) => {
        return <CommentCard {...e} />;
      })}
      {isAuth() ? <AddComment {...data} /> : <div></div>}
      
    </div>
  );
}
