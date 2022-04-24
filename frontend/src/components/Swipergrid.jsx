import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay,Pagination, Navigation } from "swiper";
import { NavLink } from "react-router-dom";

function Swipergrid({num_view,space,group_slide,loop,pagination,datas,isOrange}) {
  


  
  
  
  
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={space}
        slidesPerGroup={group_slide}
        loop={loop}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: pagination,
        }}
        navigation={true}
        breakpoints={{
            1024: {
              slidesPerView: num_view,
            }
          }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {datas.map((data) => <SwiperSlide><div className={isOrange ? "flex bg-orange h-[24em] justify-center items-center mb-10" : "flex bg-white h-[24em] justify-center items-center mb-10"}><a href={`/Blog/${data.id}`}><img src = {data.img}/></a></div></SwiperSlide>)}
      </Swiper>
    </>
  );
}
export default Swipergrid