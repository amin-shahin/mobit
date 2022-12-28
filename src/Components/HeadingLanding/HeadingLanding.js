import React from "react";
import {BiChevronDown} from 'react-icons/bi'

const HeadingLanding = ({heading,bgColor,textColor}) => {
    return ( 
        <div className="mx-6 sm:mx-8  2xl:mx-auto 2xl:max-w-screen-2xl my-3">
        <div className={`heading-landing rounded-2xl p-4 flex justify-between items-center w-full ${bgColor} `}>
            <h1 className={`text-2xl font-bold ${textColor} `}>{heading}</h1>
            <div className="flex items-center cursor-pointer">
                <span className={`text-xl ${textColor} `} >مشاهده همه</span>
                <BiChevronDown size={18} className="mr-3 rotate-90 text-gray-600"/>
            </div>
        </div>
        </div>
     );
}
 
export default HeadingLanding;