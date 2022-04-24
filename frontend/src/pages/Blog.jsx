import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard.jsx";
function Blog() {
  const [bloglist, setBloglist] = useState([
    {
      id: 1,
      username: "a",
      tag: "Bangkok",
      img: "https://images.unsplash.com/photo-1650582666851-359719341bb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      isHidden: false,
      date: new Date(),
      comments: [
        {
          id: "786",
          username: "Coffee",
          blogId: 1,
          message:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, dolores?",
          isHidden: false,
          date: new Date(),
          likes: 3,
        },
        {
          id: "456",
          username: "kp",
          blogId: 1,
          message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, dolores?",
          isHidden: true,
          date: new Date(),
          likes: 2,
        },
      ],

      likes: 10,
    },
    {
      id: 2,
      username: "a",
      tag: "Bangkok",
      img: "https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      isHidden: false,
      date: new Date(),
      comments: [
        {
          id: "786",
          username: "Coffee",
          blogId: 2,
          message:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, dolores?",
          isHidden: false,
          date: new Date(),
          likes: 3,
        },
        {
          id: "456",
          username: "kp",
          blogId: 2,
          message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, dolores?",
          isHidden: true,
          date: new Date(),
          likes: 2,
        },
      ],
      likes: 10,
    },
    {
      id: 3,
      username: "a",
      tag: "Bangkok",
      img: "https://images.unsplash.com/photo-1650582666851-359719341bb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      isHidden: false,
      date: new Date(),
      comments: [
        {
          id: "786",
          username: "Coffee",
          blogId: 2,
          message:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, dolores?",
          isHidden: false,
          date: new Date(),
          likes: 3,
        },
        {
          id: "456",
          username: "kp",
          blogId: 2,
          message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, dolores?",
          isHidden: true,
          date: new Date(),
          likes: 2,
        },
      ],
      likes: 10,
    },
    {
      id: 4,
      username: "a",
      tag: "Bangkok",
      img: "https://images.unsplash.com/photo-1620912909703-6d16f0bf0412?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      isHidden: true,
      date: new Date(),
      comments: [
        {
          id: "786",
          username: "Coffee",
          blogId: 2,
          message:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, dolores?",
          isHidden: false,
          date: new Date(),
          likes: 3,
        },
        {
          id: "456",
          username: "kp",
          blogId: 2,
          message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, dolores?",
          isHidden: true,
          date: new Date(),
          likes: 2,
        },
      ],
      likes: 20,
    },
    {
      id: 5,
      username: "a",
      tag: "Bangkok",
      img: "https://images.unsplash.com/photo-1650582666851-359719341bb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      isHidden: false,
      date: new Date(),
      comments: [
        {
          id: "786",
          username: "Coffee",
          blogId: 2,
          message:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, dolores?",
          isHidden: false,
          date: new Date(),
          likes: 3,
        },
        {
          id: "456",
          username: "kp",
          blogId: 2,
          message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, dolores?",
          isHidden: true,
          date: new Date(),
          likes: 2,
        },
      ],
      likes: 10,
    },
  ]);


  // Date formatter
  const longEnUSFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });


  useEffect(async()=>{
    await fetchData()
  },[])

  const [data,setData] = useState([])

  const datamanage = () => {
    data.forEach(e => {
      e.date = longEnUSFormatter.format(new Date(e.date))
      e.isHidden === "True" ? e.isHidden = true : e.isHidden = false 
    });
  }

  const fetchData = async() =>{
    const res = await axios.get(`https://localhost:7198/api/Blogs/Display`,{
      headers : {
        'Accept' : 'application/json'
      }
    })
    setData(res.data)
    
  }
  
  
    
  
  
  
  return (
    <div className="grid grid-cols-3 gap-6 w-3/4 mx-auto py-5 pt-[10em]">
      {data !== [] ? data.map((e) => {
        datamanage()
        return <BlogCard {...e}/>
      }) : <div>Loading!</div>}
    </div>
  );
}
export default Blog;
