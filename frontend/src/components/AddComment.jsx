import { useRef } from "react";

function AddComment(props) {
  let username = "Khaopod";
  let date = new Date();
  const inputRef = useRef();
  const submitHandler = () => {
    console.log(inputRef.current.value)
    // do something here
    // const res = await axios.put(`{PORT}/api/Comments/hide/${props.id}`, objUser);
    // console.log(res);

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
              src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=756&q=80"
              alt=""
              className=" mr-3 w-full h-full rounded-full"
            />
          </div>

          <div>
            <div className="align-middle font-semibold ">{username}</div>
            {longEnUSFormatter.format(date)}
          </div>
        </div>

        <div class="flex justify-center pt-3 px-5">
          <div class="mb-3 w-full">
            <textarea ref= {inputRef}
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
            <span className=" font-semibold text-white " onClick={submitHandler}>Submit</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddComment;
