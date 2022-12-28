import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation,Mousewheel,Keyboard} from "swiper"
import "swiper/css";
import "swiper/css/pagination";
import './css.css'

import ProductCard from "../ProductCard/ProductCard";
import BrandCategory from "../BrandCategory/BrandCategory";
import ProductCategories from "../ProductCategories/ProductCategories";
import TechnologyNews from "../TechnologyNews/TechnologyNews";




const SlideSwiperComponent = ({isTrue,arrayName,componentName}) => {


    return (

        <Swiper
        pagination={{
          clickable: true,
        }}
        loop={ true}
        loopFillGroupWithBlank={true}
        
        navigation={true && isTrue}
        mousewheel={true}
        keyboard={true}
        grabCursor	={true}
        modules={[Navigation,Keyboard,Mousewheel]}
        className="mySwiper "
        breakpoints={{
            0:{
              slidesPerView:1,
              spaceBetween:30,
              slidesOffsetBefore:0

            },
            400: {
              slidesPerView:2,
              spaceBetween:10,
              slidesOffsetBefore:0

            },
            768: {
              slidesPerView:3,
              spaceBetween:20,
              slidesOffsetBefore:0
            },
            1024: {
              slidesPerView:4,
              spaceBetween:30,
              slidesOffsetBefore:80
            },
            1200: {
              slidesPerView:5,
              spaceBetween:30,
              slidesOffsetBefore:100
            },
            
          }}
      >
       {arrayName.map( mapItem  =>(
            <SwiperSlide>
              {componentName === 'ProductCard' && (
                <ProductCard key={mapItem.id} {...mapItem} />
              )} 
              {componentName === 'BrandCategory' && (
                <BrandCategory key={mapItem.id} {...mapItem} />
              )}
              {componentName === 'TechnologyNews' && (
                <TechnologyNews key={mapItem.id} {...mapItem} />
              )}
              {componentName === 'ProductCategories'  && (
                <ProductCategories key={mapItem.id} {...mapItem} />
              )}         
            </SwiperSlide>
       ))}

      </Swiper>
      );
}
 
export default SlideSwiperComponent;