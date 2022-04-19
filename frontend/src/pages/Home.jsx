import { data } from "autoprefixer";
import React from "react";

import Swipergrid from "../components/Swipergrid";

function Home() {
  let datas = ["Slide1", "Slide2", "Slide3", "Slide4", "Slide5", "Slide6"];

  return (
    <div className="flex flex-col h-full w-full">
      {/* Section Create Blog */}
      <section className="flex h-screen">This's home</section>
      {/* Popular Blogs */}
      <section className="flex flex-col h-screen gap-24">
        <div className="flex justify-center mt-24">
          <h1>POPULAR BLOGS</h1>
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
        <div className="flex justify-center mt-24">
          <h1>NEWLY BLOGS</h1>
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
