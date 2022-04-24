import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { isAuth } from "../helpers/auth";

function CommentCard(props) {
  // Date formatter
  const longEnUSFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [data, setData] = useState({
    id: "",
    username: "",
    date: "",
    message: "",
    isHidden: false,
    likes: 0,
    local_user: "",
    img: "",
  });
  const [isLike, setIsLike] = useState(false);
  useEffect(async () => {
    const data = await fetchData();
  }, [isLike]);
  const [like, setLike] = useState(0);

  const fetchData = async () => {
    setData({
      id: props.id,
      username: props.username,
      date: longEnUSFormatter.format(new Date(props.date)),
      message: props.message,
      isHidden: props.isHidden === "True" ? true : false,
      likes: props.likes,
      local_user: isAuth().username,
      img: props.img,
    });

    const res = await axios.get(
      `https://localhost:7198/api/LikeComments/getLikeComment/${props.id}`
    );
    res.data.forEach((e) => {
      if (e === isAuth().id) {
        return setIsLike(true);
      }
    });
  };

  const [isEdit, setIsEdit] = useState(false);

  const hiddenHandler = () => {
    // do something here
    // const res = await axios.put(`{PORT}/api/Comments/hide/${props.id}`, objUser);
    // console.log(res);
    setIsEdit(false);
  };

  const deleteHandler = async () => {
    // do something here

    const deleteRequest = async () => {
      const res = await axios.delete(
        `https://localhost:7198/api/Comments/${data.id}`,
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
      success: "Remove comment complete.",
    });

    // console.log(res);

    // try{
    //   const res = fetch(`{PORT}/api/Comments/hide/${props.id}`,{
    //     method: "DELETE",
    //     body: objUser
    //     })
    //   if(!res.ok){
    //     throw new Error();
    //   }
    // }catch(error){
    //   console.log(error)
    // }

    setIsEdit(false);
    window.location.reload();
  };
  const likeHandler = async () => {
    if (isLike) {
      setLike((state) => {
        return state + 1;
      });
    }
    if (!isLike) {
      setLike((state) => {
        return state - 1;
      });
    }
    setIsLike((state) => {
      return !state;
    });
    // do something here
    const res = await axios.post(`https://localhost:7198/api/LikeComments`, {
      UserId: isAuth().id,
      CommentId: data.id,
    });

    window.location.reload();
    // console.log(res);
  };

  return (
    <>
      <div
        className={`flex justify-center py-5  ${
          data.isHidden ? "hidden" : null
        }`}
      >
        <div className="w-[650px] p-2 pt-4 rounded shadow-lg">
          <div className="flex ml-3 justify-between">
            <div className="flex">
              <div className="h-[50px] w-[50px] mr-3">
                <img
                  src={data.img}
                  alt=""
                  className=" mr-3 w-full h-full rounded-full"
                />
              </div>
              <div>
                <div className="font-semibold ">{data.username}</div>
                <div>{data.date}</div>
              </div>
            </div>
            {/* like */}
            <div className="flex justify-end ">
              <span className="px-2 ">{data.likes}</span>
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
                onClick={isAuth() ? likeHandler : (()=>{toast.warn("Please Login!")})}
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
          </div>
          <div className="my-3  px-5  indent-6 mx-auto">{data.message}</div>
          {/* check Role */}
          <div
            className={`flex justify-end pb-3 pr-3 ${
              isAuth().isAdmin === "True" ? true : false || data.username !== data.local_user
                ? "hidden"
                : null
            }`}
          >
            {!isEdit && (
              <button
                class="inline-flex items-center h-10 px-3 text-indigo-100 transition-colors duration-150 bg-orange rounded-lg focus:shadow-outline hover:bg-opacity-80 hover:shadow-md"
                onClick={() => {
                  setIsEdit(true);
                }}
              >
                <svg
                  class="h-6 w-6 text-white mr-2"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />{" "}
                  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />{" "}
                  <line x1="16" y1="5" x2="19" y2="8" />
                </svg>
                <span className=" font-semibold text-white ">Edit</span>
              </button>
            )}

            {isEdit && (
              <>
                <button class="inline-flex items-center h-10 px-3 text-indigo-100 transition-colors duration-150 bg-orange rounded-lg focus:shadow-outline hover:bg-opacity-80 hover:shadow-md mr-3">
                  <span
                    className=" font-semibold text-white "
                    onClick={deleteHandler}
                  >
                    Delete
                  </span>
                </button>
                <button class="inline-flex items-center h-10 px-3 text-indigo-100 transition-colors duration-150 bg-orange rounded-lg focus:shadow-outline hover:bg-opacity-80 hover:shadow-md">
                  <span
                    className=" font-semibold text-white "
                    onClick={() => {
                      setIsEdit(false);
                    }}
                  >
                    Cancel
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default CommentCard;
