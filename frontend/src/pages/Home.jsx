import React from "react";
import imgUrl from "../assets/bg/home1.jpg";
import Swipergrid from "../components/Swipergrid";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
function Home() {
  let datas = ["Slide1", "Slide2", "Slide3", "Slide4", "Slide5", "Slide6"];

  const fetchData = () => {

  }



  return (
    <div className="flex flex-col h-full w-full">
      {/* Section Create Blog */}
      <section className="flex h-screen">
        <div className="flex w-full h-full items-center">
          <img className="w-full h-full object-cover" src={imgUrl}></img>
          {/* Welcome Home */}
          <div className="flex absolute h-[2em] p-12 bg-white bg-opacity-60 text-slate md:text-3xl underline items-center underline-offset-8">
            <NavLink to={"/Createblog"}>
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
            datas={datas}
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
          <div className="static">
            <div className="absolute bg-white w-8 h-1 right-10 mt-[1.9em] z-[1]"/>
            <div className="absolute bg-white w-1 h-8 right-[3.4em] mt-4 z-[2]"/>
            <div className="absolute right-0 h-16 w-16 rounded-full bg-orange mr-6 z-[0]" />
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
            datas={datas}
          />
        </div>
        <div className="inline-flex">
          {/*  More */}
          <div className="flex flex-row w-full items-center justify-center">
          <NavLink to={"/Blog"}><h3 className="underline underline-offset-1 ">More</h3></NavLink>
          </div>
          {/* CirCle */}
          <NavLink to={"/Createblog"}>
          <div className="static">
            <div className="absolute bg-orange w-8 h-1 right-10 mt-[1.9em] z-[1]"/>
            <div className="absolute bg-orange w-1 h-8 right-[3.4em] mt-4 z-[2]"/>
            <div className="absolute right-0 h-16 w-16 rounded-full bg-white mr-6 z-[0]" />
          </div>
          </NavLink>
        </div>
      </section>
    </div>
  );
}
export default Home;
