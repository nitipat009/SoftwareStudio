import { data } from "autoprefixer";
import React from "react";
import imgUrl from '../assets/bg/home.png'
import Swipergrid from "../components/Swipergrid";

function Home() {
  let datas = ["Slide1", "Slide2", "Slide3", "Slide4", "Slide5", "Slide6"];

  return (
    <div className="flex flex-col h-full w-full">
      {/* Section Create Blog */}
      <section className="flex h-screen">
        <div className = "flex w-full h-full items-center">
          <img className = "w-full h-full object-cover"src = {imgUrl}></img>
          {/* Welcome Home */}
          <div className="flex absolute h-[2em] p-12 bg-white bg-opacity-60 text-slate text-6xl underline items-center underline-offset-8">
            <h1>CREATE YOUR BLOG</h1>
          </div>
        </div>
      </section>
      {/* Popular Blogs */}
      <section className="flex flex-col h-screen gap-24">
        <div className="flex justify-center mt-12">
          <h1 className="font-roboto text-3xl font-bold">POPULAR BLOGS</h1>
        </div>
        <div className="flex ml-32 mr-32">
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
      </section>
      {/* Newly Blogs */}
      <section className="flex flex-col h-screen gap-24 bg-orange text-white">
        <div className="flex justify-center mt-12">
          <h1 className="font-roboto text-3xl font-bold">NEWLY BLOGS</h1>
        </div>
        <div className="flex ml-32 mr-32">
          <Swipergrid
            num_view={3}
            space={30}
            group_slide={1}
            loop={true}
            pagination={true}
            datas={datas}
          />
        </div>
      </section>
    </div>
  );
}
export default Home;
