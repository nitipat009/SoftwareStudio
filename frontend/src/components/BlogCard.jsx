import { useNavigate } from "react-router-dom";
const BlogCard = (props) => {
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate("/id")// id blog
    }
    
    return (
      <div class="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl h-72" onClick={onClickHandler}>
          <img
            class="w-full object-cover h-1/2"
            src={props.url}
            alt="Sunset in the mountains"
          />
        <div class="px-6 py-4 h-1/2">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p class="text-gray-700 text-base">
            Author: Kaopod
          </p>
        </div>
        {/* <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div> */}
      </div>
    );
  };
  
  export default BlogCard;