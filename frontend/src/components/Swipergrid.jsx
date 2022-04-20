import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation } from "swiper";

function Swipergrid({num_view,space,group_slide,loop,pagination,datas,isOrange}) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={space}
        slidesPerGroup={group_slide}
        loop={loop}
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
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {datas.map((data) => <SwiperSlide><div className={isOrange ? "flex bg-orange h-[24em] justify-center items-center mb-10" : "flex bg-white h-[24em] justify-center items-center mb-10"}>{data}</div></SwiperSlide>)}
      </Swiper>
    </>
  );
}
export default Swipergrid