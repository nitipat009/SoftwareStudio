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
    date: "",
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

  const likeHandler = () => {
    
    if (isLike){
      setLike((state) => {return state-1})
    }
    if (!isLike){
      setLike((state) => {return state+1})
    }
    setIsLike((state) => {return !state})
    // do something here
    // const res = await axios.put(`{PORT}/api/Comments/hide/${props.id}`, objUser);
    // console.log(res);
    
  };
  const [isLike,setIsLike] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [like,setLike] = useState(100);
  return (
    <div className="flex flex-col items-center w-full ">
      <div className="h-[9em]"></div>
      {/* Section Create Blog */}
      <section className="w-[650px] ">
        <div className="flex items-center justify-between">
          <div className="font-bold text-4xl">Hello{data.title}</div>
          <div className="flex items-center">
            <span className="px-2 text-xl">
              100
              {/* {data.likes} */}
            </span>
            <svg
              class={`h-10 w-10 text-red-500 hover:text-red-800 cursor-pointer ${isLike ? "fill-red-500 hover:text-red-300" : null}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              onClick={likeHandler}
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
        </div>
        
        
        <div className="text-xl mt-2 flex items-center">
          Author : dsdfsdfdsf{data.username}
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
          sdfsdfdsfdsf
          {data.date}
        </div>
        <div className="">
          {/* Image */}
          <label class="">
            <div class="">
              <img
                id="preview"
                className="my-5 rounded-3xl w-full max-h-[400px] object-cover"
                // src={data.img}
                src="https://images.unsplash.com/photo-1650810287651-ce0e6418b997?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              />
            </div>
          </label>
          {/* Title */}
          <div className="">
            <div className=""></div>
            {/* Info */}
            <div className="indent-6 text-justify">
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate veritatis sapiente quam provident ipsa consectetur cum fugit deserunt facilis, quaerat quos, animi nihil rem voluptatibus illo in aperiam? Officiis, quibusdam. Modi fugiat pariatur vel eligendi at eius est similique officiis saepe laudantium. Culpa veritatis consequatur itaque, incidunt vero reprehenderit mollitia. Aliquid rem soluta veritatis labore! Error dolore numquam voluptatum, aut quas ipsum cumque. Fugiat aut enim impedit similique qui blanditiis quos, sit temporibus dicta natus? Cumque inventore aliquam tempora pariatur! Perspiciatis, soluta. Dolor, laudantium cum? Adipisci quaerat officia, hic recusandae animi iste vitae. Voluptatibus perspiciatis eaque deleniti aliquam quae accusantium minus, voluptas beatae, explicabo eligendi debitis, possimus iure? Nihil magnam sunt ratione, adipisci aliquam architecto commodi laudantium sint consectetur. Quis laudantium sequi ipsa magni at officia commodi dignissimos similique? Ratione debitis perspiciatis dolorum dolor provident quisquam expedita iste cupiditate asperiores. Praesentium cumque dolorem itaque reiciendis at error reprehenderit nulla, id iste omnis ab quibusdam minima pariatur mollitia repellat perspiciatis nihil accusantium quis recusandae autem debitis maiores eveniet! Dolores illo, officia voluptate doloribus harum delectus! At, quam illum! Suscipit molestiae velit nostrum quas quisquam ratione mollitia voluptatem numquam tempore minima nesciunt temporibus odio itaque, voluptate ut officia, delectus illum atque! Asperiores.{data.info}</div>
            </div>
            {/* Submit Button */}
          </div>
        </div>
      </section>
    </div>
  );
}
