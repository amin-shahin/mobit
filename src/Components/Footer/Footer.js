import React, { useState } from "react";
import LinksForFooter from "../LinksForFooter/LinksForFooter";
import {FaInstagram} from 'react-icons/fa'
import {SiAparat} from 'react-icons/si'
import {FiSquare} from 'react-icons/fi'
import {BiChevronDown} from 'react-icons/bi'
import { Link } from "react-router-dom";
import './Footer.css'
import SlideSwiperComponent from "../SlideSwiperComponent/SlideSwiperComponent";
import LinksFooterSlider from "../LinksForFooter/LinksFooterSlider";

const Footer = () => {

    const [linksData,setLinksData] = useState([
        {id:1,heading:'با مبیت',link1:'درباره مبیت',link2:' تماس با مبیت',link3:'فرصت های شغلی ',link4:'فروش عمده ',link5:'',href1:"#",href2:"#",href3:"#",href4:"#",href5:""},
        {id:2,heading:'راهنمای خرید',link1:'روش های پرداخت ',link2:'روش های ارسال کالا',link3:'لغو و بازگشت کالا',link4:'ضمانت اصالت کالا',link5:'',href1:"#",href2:"#",href3:"#",href4:"#",href5:""},
        {id:3,heading:'خدمات مشتریان',link1:'راهنمای جامع',link2:'شرایط و قوانین',link3:'سوالات متداول',link4:'حریم خصوصی',link5:'باشگاه مشتریان مبیت',href1:"#",href2:"#",href3:"#",href4:"#",href5:""},
        {id:4,heading:'قیمت گوشی',link1:'قیمت روز گوشی موبایل',link2:'قیمت گوشی سامسونگ',link3:'قیمت گوشی شیائومی',link4:'قیمت گوشی اپل',link5:'قیمت گوشی هواوی',href1:"#",href2:"#",href3:"#",href4:"#",href5:""},
        {id:5,heading:'قیمت کالای دیجیتال',link1:'قیمت هدفون، هدست، هندزفری',link2:'قیمت تلویزیون',link3:'قیمت کنسول بازی خانگی',link4:'قیمت لپ تاپ',link5:'قیمت تبلت',href1:"#",href2:"#",href3:"#",href4:"#",href5:""},
    ])

    return ( 
        <footer className="flex flex-col lg:flex-row flex-wrap overflow-x-auto px-4 lg:px-14 pt-10 mx-auto 2xl:max-w-screen-2xl">
                <span className=" w-full cursor-pointer  flex justify-center items-center text-xl">
                        <div className="to-top bg-[#f5f5f5] p-3 flex justify-between items-center">
                        <span>بازگشت به بالا</span>
                        <BiChevronDown className="chevrone mr-4"/>
                        </div>
                </span>
                <div className="support w-full  bg-[#f5f5f5] px-6 py-10 rounded-2xl mb-8 flex flex-col justify-center items-center lg:justify-between lg:flex-row">

                    <div className="ways-support hidden lg:flex flex-col gap-5 flex-1 ">
                        <span className="font-semibold text-gray-500">پشتیبانی</span>
                        <div className="phoneNumber-and-timeWorking flex text-lg">
                            <span className="pl-5">تلفن : 09160078684</span>
                            <span className="time-working pr-5"> شنبه تا چهارشنبه ۸ الی ۲۱ - پنجشنبه 8 الی ۲۰:۳۰</span>
                        </div>
                        <div className="email text-lg">ایمیل:{' '}aminshahin.web@gamil.com</div>
                    </div>
                    <div className="supports-pic grid grid-cols-2 w-full justify-center items-center lg:flex lg:flex-1 lg:justify-around ">
                        <div className=" flex flex-col items-center justify-center gap-3">
                            <img className="p-2 lg:p-3 w-24 sm:w-32 lg:w-24 2xl:w-32" src="/images/support/fastSend.57a5d18.svg" alt="fastSend" />
                            <span className="text-lg sm:text-xl lg:text-2xl mb-3">ارسال سریع کالا</span>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-3">
                            <img className="p-2 lg:p-3 w-24 sm:w-32 lg:w-24 2xl:w-32" src="/images/support/productReturn.dea9b58.svg" alt="fastSend" />
                            <span className="text-lg sm:text-xl lg:text-2xl mb-3">مهلت ۷ روز بازگشت کالا</span>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-3">
                            <img className="p-2 lg:p-3 w-24 sm:w-32 lg:w-24 2xl:w-32" src="/images/support/phoneSupport.14858ff.svg" alt="fastSend" />
                            <span className="text-lg sm:text-xl lg:text-2xl mb-3"> پشتیبانی تلفنی </span>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-3">
                            <img className="p-2 lg:p-3 w-24 sm:w-32 lg:w-24 2xl:w-32" src="/images/support/productGuaranty.e7f72bd.svg" alt="fastSend" />
                            <span className="text-lg sm:text-xl lg:text-2xl mb-3"> ضمانت اصالت کالا</span>
                        </div>
                    </div>
                </div>

               
                <LinksFooterSlider />

                    <div className="w-full lg:w-[25%]  py-4">
                        <div className="flex flex-col gap-4">
                            <div className="flex">
                                <h3 className="font-semibold flex-1 text-2xl">با ما همراه باشید</h3>
                                <div className="icons flex gap-5">
                                    <Link to="#">
                                        <FaInstagram size={22} className="text-[#cec9c9]  hover:text-rose-500 duration-100 transition-all" />
                                    </Link>
                                    <Link to="#" >
                                        <SiAparat size={22}  className="text-[#cec9c9] hover:text-rose-500 duration-100 transition-all"/>
                                    </Link>
                                </div>
                            </div>
                            <h3 className="font-semibold text-2xl">از آخرین تخفیف ها با خبر شوید</h3>
                            <input className="p-3 bg-[#f5f5f5] rounded-xl text-lg sm:w-[50%] w-full lg:w-full" type="text" placeholder="ایمیل خود را وارد کنید" />
                            <button className="py-3 px-20 lg:px-10 lg:py-5 rounded-xl bg-[#1e83f0] text-lg lg:text-xl text-white font-semibold self-end">ثبت</button>
                        </div>
                    </div>
                

                <div className="applications bg-[#f5f5f5] p-2 rounded-xl flex flex-col lg:flex-row justify-between w-full">
                    <div className="mobit-app flex items-center justify-center lg:mb-0 mb-3">
                        <FiSquare size={35} className="text-[#1e83f0] ml-4"/>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#1e83f0]">کارایی بیشتر با اپلیکیشن مبیت</h2>
                    </div>
                    <div className="grid grid-cols-2 lg:flex p-2 gap-3 sm:gap-4  lg:gap-0">
                        <img className="bg-white px-2 w-40 sm:px-3 sm:w-56 py-2 lg:w-48 lg:py-1 rounded-2xl mr-5 justify-self-center lg:justify-self-auto" src="./images/applications/bazar.4747cbd.svg" alt="bazar-app" />
                        <img className="bg-white px-2 w-40 sm:px-3 sm:w-56 py-2 lg:w-48 lg:py-1 rounded-2xl mr-5 justify-self-center lg:justify-self-auto" src="./images/applications/iApps.c9104cf.svg" alt="download-app" />
                        <img className="bg-white px-2 w-40 sm:px-3 sm:w-56 py-2 lg:w-48 lg:py-1 rounded-2xl mr-5 justify-self-center lg:justify-self-auto" src="./images/applications/download-direct.3a0c56a.svg" alt="sibche-app" />
                        <button className="bg-white  px-8 sm:px-16 lg:px-4 flex items-center py-1 rounded-2xl mr-5 justify-self-center lg:justify-self-auto" >
                            بیشتر  <BiChevronDown size={18} className="m-1"/></button>
                    </div>
                </div> 

                <div className="trust-symbol flex flex-col py-5 gap-5  lg:flex-row">
                   <div className="heading w-full lg:w-[60%] flex flex-col gap-3">
                        <h2 className="font-semibold">فروشگاه اینترنتی مبیت، خرید آسان کالای دیجیتال با مناسب ترین قیمت</h2>
                        <p className="text-lg leading-9">فروشگاه اینترنتی مبیت از جمله عرضه‌کنندگان کالای دیجیتال در سراسر کشور است که انواع کالاهای دیجیتال از جمله گوشی موبایل، لپ تاپ، تبلت و لوازم جانبی گوشی را با قیمت مناسب و ضمانت اصالت کالا به فروش می‌رساند. فعالیت مبیت از سال 1393 به صورت رسمی آغاز شد و به لطف سالیان تجربه ما در</p>
                        <span className="flex items-center text-xl cursor-pointer text-blue-500">
                            مشاهده بیشتر<BiChevronDown/>
                        </span>
                   </div>
                    <div className="symbols flex justify-around lg:justify-end w-full lg:w-[40%]">
                        <img className="w-36 sm:w-44 md:w-52"   src="./images/trust symbol/ecunion.png" alt="ecunion" />
                        <img className="w-36 sm:w-44 md:w-52"   src="./images/trust symbol/samandehi.png" alt="samandehi" />
                        <img  className="w-36 sm:w-44 md:w-52"  src="./images/trust symbol/logo.aspx" alt="logo" />
                    </div>
                </div>

                <div className="text-center py-4 w-full">
                    <p>کلیه حقوق این سایت متعلق به  <span className="text-[#5FAAC1]">امین شاهین</span> می باشد.
                    </p>
                </div>

        </footer>

     );
}
 
export default Footer;

