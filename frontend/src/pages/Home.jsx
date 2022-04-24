import React, { useEffect, useState }  from "react";
import imgUrl from "../assets/bg/home1.jpg";
import Swipergrid from "../components/Swipergrid";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";


function Home() {


  const [data,setData] = useState([])
  const [reverse,setReverse] = useState([])
  useEffect(()=>{
    fetchData()
  },[])
  const fetchData = async() => {
    const res = await axios.get(`https://localhost:7198/api/Blogs/Display`,{
      headers : {
        'Accept' : 'application/json'
      }
    })
    setData(res.data)
    setReverse(res.data.reverse())
  }

  function comparator(a, b) {
    if (a.likes < b.likes)
        return -1;
    if (a.likes > b.likes)
        return 1;
    return 0;
  }

  return (
    <div className="flex flex-col h-full w-full">
      {/* Section Create Blog */}
      <section className="flex h-screen">
        <div className="flex w-full h-full items-center">
          <img className="w-full h-full object-cover" src={imgUrl}></img>
          {/* Welcome Home */}
          <div className="flex absolute h-[2em] p-12 bg-white bg-opacity-60 text-slate md:text-3xl underline items-center underline-offset-8">
            <NavLink to={"/Createblog"} class="drop-shadow-xl hover:text-[#ff9900]" style={{transitionDuration: "0.3s"}}>
              <h1>CREATE YOUR BLOG</h1>
            </NavLink>
          </div>
        </div>
      </section>
      {/* Popular Blogs */}
      <section className="flex flex-col h-screen gap-4 sm:gap-12 justify-center">
        <div className="flex justify-center mt-12">
          <h1 className="font-roboto text-3xl font-bold">POPULAR BLOGS</h1>
        </div>
        <div className="flex ml-8 mr-8 sm:ml-32 sm:mr-32">
          <Swipergrid
            num_view={3}
            space={30}
            group_slide={1}
            loop={true}
            pagination={true}
            datas={data.sort(comparator)}
            isOrange={true}
          />
        </div>
        <div className="inline-flex">
          {/*  More */}
          <div className="flex flex-row w-full items-center justify-center">
          <NavLink to={"/Blog"}><h3 className="underline underline-offset-1 ">More</h3></NavLink>
          </div>
          {/* CirCle */}
          <NavLink to={"/Createblog"}>
              <div className="fixed bottom-20 opacity-70 hover:opacity-100 hover:pulse" style={{transition: "all 0.4s"}}>
                <div className="absolute bg-white w-8 h-1 right-10 mt-[1.9em] z-[1]"/>
                <div className="absolute bg-white w-1 h-8 right-[3.4em] mt-4 z-[2]"/>
                <div className="absolute right-0 h-16 w-16 rounded-full bg-[#ff9600] mr-6 z-[0] shadow-xl drop-shadow-2xl" />
              </div>
          </NavLink>
        </div>
      </section>
      {/* Newly Blogs */}
      <section className="flex flex-col h-screen gap-4 sm:gap-12 bg-orange text-white justify-center">
        <div className="flex justify-center mt-12">
        <h1 className="font-roboto text-3xl font-bold">NEWLY BLOGS</h1>
        </div>
        <div className="flex ml-8 mr-8 sm:ml-32 sm:mr-32">
          <Swipergrid
            num_view={3}
            space={30}
            group_slide={1}
            loop={true}
            pagination={true}
            datas={reverse}
          />
        </div>
        <div className="inline-flex">
          {/*  More */}
          <div className="flex flex-row w-full items-center justify-center">
          <NavLink to={"/Blog"}><h3 className="underline underline-offset-1 ">More</h3></NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
