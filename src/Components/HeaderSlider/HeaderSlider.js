import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay,Pagination} from "swiper"


const HeaderSlider = () => {
    
    return ( 
        <div className="flex gap-4">
        <img className="rounded-2xl  hidden object-cover xl:flex " src="/images/Home/header slider/airpod cover.jpg" alt="airpod-cover" />
        <Swiper 
        autoplay ={{
            delay:2500,
            disableOnInteraction:false,
        }}
        pagination={{
          clickable: true,
        }}
        slidesOffsetBefore={0}
        slidesOffsetAfter={0}
        loopFillGroupWithBlank={true}
        // centeredSlides={true}
        loop={ true}
        grabCursor	={true}
        modules={[Autoplay,Pagination]}
        className="mySwiper "
      >
       
            <SwiperSlide style={{display:'flex',justifyContent:'center',}} >
                <img className="object-fill  aspect-auto rounded-2xl" src="/images/Home/header slider/1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide style={{display:'flex',justifyContent:'center'}}>
                <img className="object-fill aspect-auto  rounded-2xl" src="/images/Home/header slider/2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide style={{display:'flex',justifyContent:'center'}}>
                <img className="object-fill aspect-auto  rounded-2xl" src="/images/Home/header slider/3.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide style={{display:'flex',justifyContent:'center'}}>
                <img className="object-fill aspect-auto  rounded-2xl" src="/images/Home/header slider/4.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide style={{display:'flex',justifyContent:'center'}}>
                <img className="object-fill aspect-auto  rounded-2xl" src="/images/Home/header slider/5.jpg" alt="" />
            </SwiperSlide>
           
      </Swiper>
        <img className="rounded-2xl  hidden object-cover xl:flex " src="/images/Home/header slider/airpod cover.jpg" alt="airpod-cover" />
        </div>
     );
}
 
export default HeaderSlider;