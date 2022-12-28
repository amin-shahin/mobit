import React from "react";
import {AiFillStar} from 'react-icons/ai'
import { Link } from "react-router-dom";
import {TbDiscount2} from 'react-icons/tb'
import './ProductCard.css'

import './ProductCard.css'
const ProductCard = ({star,comment,desc,price,discount,cover,href,discountPercent ,discountTrue}) => {
    return (
        <Link to={href} className="card-product rounded-xl  p-2 flex flex-col justify-between gap-4 w-full  my-2" style={{width:"100%",height:'95%'}} >
            <div className="img-container relative h-[150px] bg-[#f5f5f5] rounded-xl flex justify-center items-center " >
              <img className="p-2 object-contain w-1/2 h-[80%]" src={cover} alt={cover} />
             {discountTrue  &&(
              <>
                <span className="absolute top-4 right-4 py-1 px-2 rounded-lg bg-[#FF6A6A] text-white text-lg flex items-center"> {discountPercent}{' '}%</span>
                <TbDiscount2 className="absolute top-4 left-4 text-[#FF6A6A]" size={20}/>
              </>
              )}
            </div>

            <div className="desc text-xl">{desc}</div>

            <span className="prices flex justify-end">
                <span className="price mx-2 text-lg line-through text-stone-500">{price}</span>
                <span className="discount text-2xl font-bold tracking-wide" >{`${Number(discount).toLocaleString()}`}{' '}<span className="text-lg text-gray-600">تومان</span> </span>
            </span>

            <span className="star flex justify-end items-center  ">
                <span className="text-lg text-stone-500">({comment}نظر)</span>{' '}<span className="text-xl mx-2">{star}</span>{" "}<AiFillStar className="text-yellow-400"/>
            </span>
        </Link>

      );
}
 
export default ProductCard;