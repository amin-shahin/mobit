import React from "react";

const BrandCategory = ({cover,brand}) => {
    return ( 
        <div className="flex flex-col gap-5 items-center justify-center">
              <img className="object-cover" src={cover} alt={cover} />
              <h4 className="font-bold text-2xl">{brand}</h4>
        </div>
     );
}
 
export default BrandCategory;