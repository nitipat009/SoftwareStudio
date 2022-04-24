import axios from "axios";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { isAuth } from "../helpers/auth";
function AddComment(props) {
  const [data, setData] = useState({
    username: props.username,
    BlogId: props.id,
    Meesage: "",
    img : isAuth().img
  });

  const inputRef = useRef();

  const sentData = async () => {
    const res = await axios.post(`https://localhost:7198/api/Comments`, {
      username: data.username,
      BlogId: data.BlogId,
      Message: inputRef.current.value,
      img : data.img
    });
  };
  const submitHandler = async () => {
    console.log(inputRef.current.value);
    // do something here
    const res = await toast.promise(sentData(), {
      pending: "Comment Pending...",
      error: "Comment Failed!",
      success: "Comment Added!",
    });
    console.log(res);
    window.location.reload()
    inputRef.current.value = "";
  };
  // Date formatter
  const longEnUSFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="flex justify-center py-5 ">
      <div className="w-[650px] p-2 pt-4 rounded shadow-lg">
        <div className="flex ml-3 relative ">
          <div className="h-[50px] w-[50px] mr-3">
            <img
              src={data.img}
              alt=""
              className=" mr-3 w-full h-full rounded-full"
            />
          </div>

          <div>
            <div className="align-middle font-semibold ">{data.username}</div>
            {longEnUSFormatter.format(new Date())}
          </div>
        </div>

        <div class="flex justify-center pt-3 px-5">
          <div class="mb-3 w-full">
            <textarea
              ref={inputRef}
              class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-orange focus:outline-none
      "
              id="exampleFormControlTextarea1"
              rows="5"
              placeholder="Your message"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-end pr-3">
          <button className="inline-flex items-center h-10 px-3 mb-2 text-indigo-100 transition-colors duration-150 bg-orange rounded-lg focus:shadow-outline hover:bg-opacity-80 hover:shadow-md ">
            <span
              className=" font-semibold text-white "
              onClick={submitHandler}
            >
              Submit
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddComment;
