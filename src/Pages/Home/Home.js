import React from "react";
import Footer from "../../Components/Footer/Footer";
import HeadingLanding from "../../Components/HeadingLanding/HeadingLanding";
import Navbar from "../../Components/Navbar/Navbar";
import {topViewProducts,specialOffers,brandCategoriesData, bestSellers, newMobile, newProduct, TechnologyNewsData, categoriesProduct} from "../../datas";
import { Link } from "react-router-dom";
import SlideSwiperComponent from "../../Components/SlideSwiperComponent/SlideSwiperComponent";
import HeaderSlider from "../../Components/HeaderSlider/HeaderSlider";
import './Home.css'
import TechnologyNews from "../../Components/TechnologyNews/TechnologyNews";
const Home = () => {
  
  return (
    <>
      <div className="w-full shadow-navbar">
        <div className="w-fll px-4 mx-auto 2xl:max-w-screen-2xl">
          <Navbar />
        </div>
      </div>
      <div className="header-slider  mx-6 sm:mx-8 2xl:mx-auto 2xl:max-w-screen-2xl  gap-4 my-5  flex  items-center ">
        <div className="slider-auto rounded-2xl overflow-auto  ">
          <HeaderSlider />
        </div>
      </div>

      <section className=" mx-6 sm:mx-8 2xl:mx-auto 2xl:max-w-screen-2xl flex my-1">
        <SlideSwiperComponent isTrue={false} arrayName={categoriesProduct}  componentName='ProductCategories'/>
      </section>
      <HeadingLanding heading=" پیشنهادهای ویژه" bgColor='bg-[#FF6A6A]' textColor='text-white'/>
      <section className=" mx-6 sm:mx-8 2xl:mx-auto 2xl:max-w-screen-2xl flex my-5 ">
        <SlideSwiperComponent isTrue={true} arrayName={specialOffers}  componentName='ProductCard'/>
      </section>

      <div className="mx-6 sm:mx-8 max-w-[1560px] my-6 2xl:mx-auto 2xl:max-w-screen-2xl slide-smartWatch-handsfree grid grid-cols-2 gap-3">
        <img src="./images/Home/image Home page/airpods.jpg" alt="" />
        <img src="./images/Home/image Home page/smart watchs.jpg" alt="" />
      </div>


        <HeadingLanding heading="پربازدید ترین ها" bgColor='bg-[#f5f5f5]' textColor='text-gray-600'/>
        <section className=" mx-6 sm:mx-8 2xl:mx-auto 2xl:max-w-screen-2xl flex my-5 ">
          <SlideSwiperComponent isTrue={true} arrayName={topViewProducts}  componentName='ProductCard'/>
        </section>
        <section className=" mx-6 sm:mx-8 2xl:mx-auto 2xl:max-w-screen-2xl brand-categories flex my-5">
          <SlideSwiperComponent isTrue={true} arrayName={brandCategoriesData} componentName='BrandCategory'/>
        </section>
        <HeadingLanding heading=" پرفروش ترین ها" bgColor='bg-[#f5f5f5]' textColor='text-gray-600'/>
        <section className=" mx-6 sm:mx-8 2xl:mx-auto 2xl:max-w-screen-2xl best-sellers flex my-5">
            <SlideSwiperComponent isTrue={true} arrayName={bestSellers}  componentName='ProductCard'/>
        </section>
        <section className=" mx-6 sm:mx-8 2xl:mx-auto 2xl:max-w-screen-2xl images">
          <Link to="#">
            <img className="rounded-xl" src="./images/Home/image Home page/xiaomi bg.jpg" alt="xiaomi" />
          </Link>
          <div className=" products grid grid-cols-2 lg:grid-cols-4 gap-6 my-4">
            <Link to="#">
              <img className="rounded-xl" src="./images/Home/image Home page/haylou.jpg" alt="haylou" />
            </Link> <Link to="#">
              <img className="rounded-xl" src="./images/Home/image Home page/flash memory.jpg" alt="flash-memory" />
            </Link> <Link to="#">
              <img className="rounded-xl" src="./images/Home/image Home page/keyboard.jpg" alt="keyboard" />
            </Link> <Link to="#">
              <img className="rounded-xl" src="./images/Home/image Home page/mouse.jpg" alt="mouse" />
            </Link>
          </div>
          <div className="technology-news  mx-1 sm:mx-8 2xl:mx-auto 2xl:max-w-screen-2xl">
            <h2 className="w-full text-4xl font-black block py-4 my-3">اخبار پربازدید تکنولوژی</h2>
            <div>
              <div className="lg:hidden">
                 <SlideSwiperComponent  isTrue={false} arrayName={TechnologyNewsData}  componentName='TechnologyNews'/>
              </div>
              <span className="hidden lg:grid lg:grid-cols-4  gap-4">
                {TechnologyNewsData.map(techData =>(
                  <TechnologyNews key={techData.id} {...techData}/>
                ))}
              </span>
            </div>
          </div>
        </section>
        <HeadingLanding heading=" جدیدترین گوشی ها" bgColor='bg-[#f5f5f5]' textColor='text-gray-600' />
        <section className=" mx-6 sm:mx-8 2xl:mx-auto 2xl:max-w-screen-2xl new-mobiles flex my-5">
          <SlideSwiperComponent isTrue={true} arrayName={newMobile}  componentName='ProductCard'/>
        </section>
        <HeadingLanding heading=" محصولات جدید" bgColor='bg-[#f5f5f5]' textColor='text-gray-600' />
        <section className=" mx-6 sm:mx-8 2xl:mx-auto 2xl:max-w-screen-2xl new-products flex my-5">
          <SlideSwiperComponent isTrue={true} arrayName={newProduct}  componentName='ProductCard'/>
        </section>

        <Footer />
    </>
  );
};

export default Home;
