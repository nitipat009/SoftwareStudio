import React, { useEffect, useState, useCallback, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

//Editor JS
import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import Paragraph from "@editorjs/paragraph";
import List from "@editorjs/list";
import Warning from "@editorjs/warning";
import Code from "@editorjs/code";
import Image, { ImageTool } from "@editorjs/image";
import Raw from "@editorjs/raw";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import SimpleImage from "@editorjs/simple-image";

import { createReactEditorJS } from "react-editor-js";
import { ToastContainer, toast } from "react-toastify";
import uploadimg from "../hooks/uploadimg";
import CommentCard from "../components/CommentCard";
import AddComment from "../components/AddComment";

function OneBlog() {
  const id = useParams().id;

  const ReactEditorJS = createReactEditorJS();
  const EDITOR_JS_TOOLS = {
    // NOTE: Paragraph is default tool. Declare only when you want to change paragraph option.
    // paragraph: Paragraph,
    embed: Embed,
    table: Table,
    list: List,
    warning: Warning,
    code: Code,
    image: {
      class: Image,
      config: {
        uploader: {
          async uploadByFile(file) {
            const res = await uploadimg(file);
            return res;
          },
          async uploadByUrl(file) {
            const res = await uploadimg(file);
            return res;
          },
        },
      },
    },
    raw: Raw,
    header: Header,
    quote: Quote,
    marker: Marker,
    checklist: CheckList,
    delimiter: Delimiter,
    inlineCode: InlineCode,
    simpleImage: SimpleImage,
  };

  const longEnUSFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [data, setData] = useState({
    id: "",
    username: "lnwmee009",
    img: "",
    isHidden: "",
    like: 0,
    tag: "",
    date: longEnUSFormatter.format(new Date("2022-04-24T22:56:47.8486671")),
    detail: [
      {
        id: "FF1iyF3VwN",
        type: "image",
        data: {
          file: {
            url: "https://codex.so/public/app/img/external/codex2x.png",
          },
          caption: "",
          withBorder: false,
          stretched: false,
          withBackground: false,
        },
      },
    ],
  });

  // Example Data
  // date: "2022-04-24T22:56:47.8486671"
  // detail: "Test"
  // id: 1
  // img: ""
  // isHidden: "False"
  // likes: 0
  // tag: "กรุงเทพมหานคร"
  // username: "lnwmee009"

  const editorCore = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(`https://localhost:7198/api/Blogs/Display/1`, {
      headers: {
        Accept: "application/json",
      },
    });
  };

  const [onEdit, setonEdit] = useState(true);
  const [isLike, setLike] = useState(data.like);
  const handleInitialize = useCallback((instance) => {
    editorCore.current = instance;
    const editButton = document.getElementById("edit-button");
    const deleteButton = document.getElementById("delete-button");
    // Wait Content Loading!
    editorCore.current._editorJS.isReady.then(() => {
      editButton.style.visibility = "visible";
      deleteButton.style.visibility = "visible";
    });
  }, []);

  const likeHandler = () => {
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
    // const res = await axios.put(`{PORT}/api/Comments/hide/${props.id}`, objUser);
    // console.log(res);
  };

  const handleEdit = () => {};

  return (
    <>
      <div className="flex flex-col h-full w-full">
        {/* Section Create Blog */}
        <section className="mt-32 h-full justify-center">
          <ReactEditorJS
            tools={EDITOR_JS_TOOLS}
            onInitialize={handleInitialize}
            readOnly={false}
            defaultValue={{
              blocks: data.detail,
            }}
          />
        </section>
        <section className="flex flex-col z-[9999] w-full mt-[-150px] m-auto justify-center items-center">
          <div className="inline-flex items-center">
            <h3>
              Author : {data.username} Date : {data.date}
            </h3>
            <span className="px-2 ">{data.like}</span>
            <svg
              class={`h-7 w-7 text-red-500 hover:text-red-800 cursor-pointer ${
                isLike ? "fill-red-500 hover:text-red-300" : null
              }`}
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
          <div className="inline-flex justify-between w-1/4">
            <button
              id="edit-button"
              className="bg-orange hover:bg-opacity-60 active:hover:bg-opacity-40 rounded text-3xl font-bold text-white p-2 m-auto"
              style={{ visibility: "hidden" }}
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              id="delete-button"
              className="bg-red-700 hover:bg-opacity-60 active:hover:bg-opacity-40 rounded text-3xl font-bold text-white p-2 m-auto"
              style={{ visibility: "hidden" }}
              onClick={handleEdit}
            >
              Delete
            </button>
          </div>
          <CommentCard />
          <AddComment />
        </section>
      </div>
    </>
  );
}

export default OneBlog;
