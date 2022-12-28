import React from "react";
import { Link } from "react-router-dom";
import './TechnologyNews.css'

const TechnologyNews = ({cover,title,href}) => {
    return ( 
        <div className="link-img relative">
            <Link className="relative flex justify-center items-center" to={href}>
                <img className="object-cover" src={cover} alt="image-news" />
                <p className="absolute z-10  bottom-5 text-center font-semibold text-white w-full text-lg xs:text-xl lg:text-2xl">{title}</p>
            </Link>
      </div>
     );
}
 
export default TechnologyNews;