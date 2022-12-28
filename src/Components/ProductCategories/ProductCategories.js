import React from "react";


const ProductCategories = ({productName,cover}) => {
    return ( 
        <div className="flex items-center flex-col gap-3 cursor-pointer my-1  mx-3">
        <div className="cover p-1 bg-[#f5f5f5]  rounded-2xl">
          <img className="w-24 transition-all duration-75 hover:scale-110" src={cover} alt="product" />
        </div>
        <span className="text-lg">{productName}</span>
   </div>
   
     );
}
 
export default ProductCategories;




