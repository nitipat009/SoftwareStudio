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
import LinkTool from "@editorjs/link";
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

  

  

  //   id: "",
  //     username: "lnwmee009",
  //     detail: "",
  //     img: "",
  //     isHidden: "",
  //     like: 0,
  //     tag: "",
  //     date: "",
  // longEnUSFormatter.format(new Date("2022-04-24T22:56:47.8486671"))
  // Example Data
  // date: "2022-04-24T22:56:47.8486671"
  // detail: "Test"
  // id: 1
  // img: ""
  // isHidden: "False"
  // likes: 0
  // tag: "กรุงเทพมหานคร"
  // username: "lnwmee009"
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

  const [data, setData] = useState({
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
  });

  const longEnUSFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });


  const editorCore = useRef(null);
  const handleInitialize = useCallback((instance) => {
    editorCore.current = instance;
    const saveButton = document.getElementById("button");
    const content = document.getElementById("react-editor-js-1805278c86b");
    // Wait Content Loading!
    editorCore.current._editorJS.isReady.then(() => {
      saveButton.style.visibility = "visible";
    });
  }, []);

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

  const handleEdit = () => {};

  return (
    <>
      <div className="flex flex-col h-full w-full">
        {/* Section Create Blog */}
        <section className="mt-32 h-full justify-center">
          <ReactEditorJS
            id="react-editor"
            tools={EDITOR_JS_TOOLS}
            onInitialize={handleInitialize}
            readOnly={false}
            defaultValue={{
              blocks: data
            }}
          />
        </section>
        <section className="flex flex-col z-[9999] w-full mt-[-150px] m-auto justify-center items-center">
          <h3>
            Author : {data.username} Date : {data.date} Like : {data.like}
          </h3>
          <button
            id="button"
            className="bg-orange hover:bg-opacity-60 active:hover:bg-opacity-40 rounded text-3xl font-bold text-white p-2 m-auto"
            style={{ visibility: "hidden" }}
            onClick={handleEdit}
          >
            Edit
          </button>
        </section>
      </div>
    </>
  );
}

export default OneBlog