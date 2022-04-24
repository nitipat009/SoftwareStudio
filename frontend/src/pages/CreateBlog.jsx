import React, { Component, useRef, useCallback, useState } from "react";

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
// import CommentCard from "../components/CommentCard";
// import AddComment from "../components/AddComment";
 
import { createReactEditorJS } from "react-editor-js";
import axios from "axios";

function CreateBlog() {
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
            const fd = new FormData();
            fd.set("key", "663c09b925876925e4457bca273af1f8");
            fd.append("image", file);
            const res = await axios.post("https://api.imgbb.com/1/upload", fd);
            return {
              success: 1,
              file: {
                url: res.data.data.image.url,
              },
            };
          },
          async uploadByUrl(file) {
            const fd = new FormData();
            fd.set("key", "663c09b925876925e4457bca273af1f8");
            fd.append("image", file);
            const res = await axios.post("https://api.imgbb.com/1/upload", fd);
            return {
              success: 1,
              file: {
                url: res.data.data.image.url,
              },
            };
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

  const [data, setData] = useState([
    {
      id: "FF1iyF3VwN",
      type: "image",
      data: {
        file: {
          url: "https://codex.so/public/app/img/external/codex2x.png",
        },
        caption: "",
        withBorder: false,
        stretched: true,
        withBackground: false,
      },
    },
    {
      id: "sheNwCUP5A",
      type: "header",
      data: {
        text: "Editor.js",
        level: 2,
      },
    },
    {
      id: "12iM3lqzcm",
      type: "paragraph",
      data: {
        text: "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.",
      },
    },
    {
      id: "fvZGuFXHmK",
      type: "header",
      data: {
        text: "Key features",
        level: 3,
      },
    },
    {
      id: "xnPuiC9Z8M",
      type: "list",
      data: {
        style: "unordered",
        items: [
          "It is a block-styled editor",
          "It returns clean data output in JSON",
          "Designed to be extendable and pluggable with a simple API",
        ],
      },
    },
    {
      id: "-MhwnSs3Dw",
      type: "header",
      data: {
        text: "What does it mean «block-styled editor»",
        level: 3,
      },
    },
    {
      id: "Ptb9oEioJn",
      type: "paragraph",
      data: {
        text: 'Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class="cdx-marker">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core.',
      },
    },
    {
      id: "-J7nt-Ksnw",
      type: "paragraph",
      data: {
        text: 'There are dozens of <a href="https://github.com/editor-js">ready-to-use Blocks</a> and the <a href="https://editorjs.io/creating-a-block-tool">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games.',
      },
    },
    {
      id: "SzwhuyoFq6",
      type: "header",
      data: {
        text: "What does it mean clean data output",
        level: 3,
      },
    },
    {
      id: "x_p-xddPzV",
      type: "paragraph",
      data: {
        text: "Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below",
      },
    },
    {
      id: "6W5e6lkub-",
      type: "paragraph",
      data: {
        text: 'Given data can be used as you want: render with HTML for <code class="inline-code">Web clients</code>, render natively for <code class="inline-code">mobile apps</code>, create markup for <code class="inline-code">Facebook Instant Articles</code> or <code class="inline-code">Google AMP</code>, generate an <code class="inline-code">audio version</code> and so on.',
      },
    },
    {
      id: "eD2kuEfvgm",
      type: "paragraph",
      data: {
        text: "Clean data is useful to sanitize, validate and process on the backend.",
      },
    },
    {
      id: "N8bOHTfUCN",
      type: "delimiter",
      data: {},
    },
    {
      id: "IpKh1dMyC6",
      type: "paragraph",
      data: {
        text: "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏",
      },
    },
  ]);
  const editorCore = useRef(null);

  const handleInitialize = useCallback((instance) => {
    editorCore.current = instance;
    const saveButton = document.getElementById("save-button");
    const content = document.getElementById("react-editor-js-1805278c86b");
    // Wait Content Loading!
    editorCore.current._editorJS.isReady.then( () => {
        saveButton.style.visibility = "visible"
        saveButton.addEventListener("click", () => {
            handleSave();
          });
        }
    )
    
  
    
      

    
  }, []);


  const handleSave = useCallback(async () => {
    const savedData = await editorCore.current.save();
    console.log(savedData);
  }, []);
  
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
              blocks: data,
            }}
          />
        </section>
        <section className="flex z-[9999] w-full mt-[-150px] m-auto justify-center">
          <button
            id="save-button"
            className="bg-orange hover:bg-opacity-60 active:hover:bg-opacity-40 rounded text-3xl font-bold text-white p-2"
            style={{ visibility: "hidden" }}
          >
            Save
          </button>
        </section>
      </div>   
     
    </>
 
  );
}

export default CreateBlog;
