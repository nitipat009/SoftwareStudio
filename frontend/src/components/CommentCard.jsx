import { useState } from "react";

function CommentCard(props) {
  let username = "Khaopod";
  let date = new Date();
  let message =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia praesentium non laboriosam tenetur optio, ipsa officiis nobis iure? Reiciendis nisi beatae, aut quidem totam temporibus ut vitae deserunt distinctio reprehenderit aspernatur magni suscipit dicta cumque. Rerum nulla, veniam magni enim earum velit reprehenderit quis repellendus ipsum similique accusantium! Ullam facilis pariatur at debitis omnis quaerat suscipit explicabo blanditiis fugit consequuntur ipsam ipsum, quae quia minus obcaecati officia vel alias. Provident dicta quis voluptas eaque nulla deleniti sed iste sequi dolorem. Aut aliquam error earum magnam dolor placeat fuga tempora minus id culpa! Quisquam debitis nemo at cum. A, delectus quibusdam.";
  let isAdmin = false;
  let likes = 100 ;

  const [isLike,setIsLike] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [like,setLike] = useState(likes);

  // Date formatter
  const longEnUSFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const hiddenHandler = () => {
    // do something here
    // const res = await axios.put(`{PORT}/api/Comments/hide/${props.id}`, objUser);
    // console.log(res);
    setIsEdit(false);
  };

  const deleteHandler = () => {
    // do something here
    // const res = await axios.delete(`{PORT}/api/Comments/hide/${props.id}`, objUser);
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

  
  return (
    <div
      className={`flex justify-center py-5  ${
        props.isHidden ? "hidden" : null
      }`}
    >
      <div className="w-[650px] p-2 pt-4 rounded shadow-lg">
        <div className="flex ml-3 justify-between">
          <div className="flex">
           
            <div className="h-[50px] w-[50px] mr-3">
              <img
                src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=756&q=80"
                alt=""
                className=" mr-3 w-full h-full rounded-full"
              />
            </div>
            <div>
              <div className="font-semibold ">{username}</div>
              <div>{longEnUSFormatter.format(props.date)}</div>
            </div>
          </div>
{/* like */}
          <div className="flex justify-end ">
            <span className="px-2 ">{like}</span>
            <svg
              class={`h-7 w-7 text-red-500 hover:text-red-800 cursor-pointer ${isLike ? "fill-red-500 hover:text-red-300" : null}`}
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
        <div className="my-3  px-5  indent-6 mx-auto">{message}</div>
        {/* check Role */}
        <div
          className={`flex justify-end pb-3 pr-3 ${
            isAdmin || username === props.username ? "hidden" : null
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
                  onClick={hiddenHandler}
                >
                  Hide
                </span>
              </button>
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
  );
}
export default CommentCard;
