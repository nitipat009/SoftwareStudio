import { useNavigate } from "react-router-dom";

function BlogCard(props) {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/id"); // id blog
  };

  // Date formatter
  const longEnUSFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className={`max-w-md rounded overflow-hidden shadow-lg hover:shadow-2xl h-96  ${
        props.isHidden ? "hidden" : null
      }`}
      onClick={onClickHandler}
    >
      <div className="relative h-4/6">
        <img
          className="object-cover w-full h-full"
          src={props.img}
          alt="Flower and sky"
        />
        <div className="absolute top-0 right-0 ">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-3 my-3 flex items-center">
            <svg
              class="h-4 w-4 text-red-500 inline-block mr-1 fill-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            {props.likes}
          </span>
        </div>
        {/* <div className="absolute bottom-0 left-0 px-5 py-1">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{props.tag}
          </span>
        </div> */}
      </div>
      <div className=" px-6 py-4 h-1/6">
        <div className="font-bold text-2xl mb-2">{props.tag}</div>
      </div>
      <div className="relative h-1/6">
        <div className="absolute bottom-3 left-6 text-gray-700 text-basepr-4 inline-block">
          by {props.username}
        </div>
        <div className="flex absolute bottom-3 right-6">
          <div className="inline-block ">
            <svg
              className="h-4 w-4 text-gray-400 inline-block"
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

            <a className="px-2">{longEnUSFormatter.format(props.date)}</a>
          </div>
          <div className="inline-block pr-1">
            <svg
              class="inline-block h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            <a className="pl-1">{props.comments.length}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
