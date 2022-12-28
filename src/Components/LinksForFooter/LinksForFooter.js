import React from "react";
import { Link } from "react-router-dom";
import './LinksForFooter.css'

const LinksForFooter = ({heading,link1,link2,link3,link4,link5,href1,href2,href3,href4,href5}) => {
    return ( 
        <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold mb-3">{heading}</h3>
                <div><Link className="text-lg"  to={href1}>{link1}</Link></div>
                <div><Link  className="text-lg" to={href2}>{link2}</Link></div>
                <div><Link  className="text-lg" to={href3}>{link3}</Link></div>
                <div><Link  className="text-lg" to={href4}>{link4}</Link></div>
                <div><Link  className="text-lg" to={href5}>{link5}</Link></div>
        </div>
     );
}
 
export default LinksForFooter;