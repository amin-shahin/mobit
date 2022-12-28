import React, { useState } from "react";
import LinksForFooter from "./LinksForFooter";
import './LinksForFooter.css'

const LinksFooterSlider = () => {
    const [linksData,setLinksData] = useState([
        {id:1,heading:'با مبیت',link1:'درباره مبیت',link2:' تماس با مبیت',link3:'فرصت های شغلی ',link4:'فروش عمده ',link5:'',href1:"#",href2:"#",href3:"#",href4:"#",href5:""},
        {id:2,heading:'راهنمای خرید',link1:'روش های پرداخت ',link2:'روش های ارسال کالا',link3:'لغو و بازگشت کالا',link4:'ضمانت اصالت کالا',link5:'',href1:"#",href2:"#",href3:"#",href4:"#",href5:""},
        {id:3,heading:'خدمات مشتریان',link1:'راهنمای جامع',link2:'شرایط و قوانین',link3:'سوالات متداول',link4:'حریم خصوصی',link5:'باشگاه مشتریان مبیت',href1:"#",href2:"#",href3:"#",href4:"#",href5:""},
        {id:4,heading:'قیمت گوشی',link1:'قیمت روز گوشی موبایل',link2:'قیمت گوشی سامسونگ',link3:'قیمت گوشی شیائومی',link4:'قیمت گوشی اپل',link5:'قیمت گوشی هواوی',href1:"#",href2:"#",href3:"#",href4:"#",href5:""},
        {id:5,heading:'قیمت کالای دیجیتال',link1:'قیمت هدفون، هدست، هندزفری',link2:'قیمت تلویزیون',link3:'قیمت کنسول بازی خانگی',link4:'قیمت لپ تاپ',link5:'قیمت تبلت',href1:"#",href2:"#",href3:"#",href4:"#",href5:""},
    ])
    return ( 
    <div className="links grid grid-cols-1  xs:grid-cols-3 gap-5  w-full  text-center xs:text-right md:flex lg:gap-0 lg:w-3/4  p-0">
       
            {linksData.map(link =>(
            <div key={link.id} className="w-full lg:w-[20%] ">
                <LinksForFooter {...link}/>
            </div>
        ))}
   
    </div>
     );
}
 
export default LinksFooterSlider;