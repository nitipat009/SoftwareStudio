import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard.jsx";
function Blog() {
  const [bloglist, setBloglist] = useState();

  useEffect(()=>{
    fetchData()
  },[])


  const fetchData = async() =>{
    const res = await axios.get(`https://localhost:7198/api/Blogs/Display`,{
      headers : {
        'Accept' : 'application/json'
      }
    })
    console.log(res.data)
    setBloglist(res.data)
  }
  let blog;
  blog = bloglist.map((e) => {
    return <BlogCard {...e} key={e.id}></BlogCard>;
  });
  
  return (
    <div className="grid grid-cols-3 gap-6 w-3/4 mx-auto py-5 pt-[10em]">
      {blog}
    </div>
  );
}
export default Blog;
