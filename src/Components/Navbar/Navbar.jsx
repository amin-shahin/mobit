import React from "react";
import {BsSearch} from 'react-icons/bs'
import {HiLocationMarker} from 'react-icons/hi'
import {RiShoppingBag2Fill} from 'react-icons/ri'
import {FaUserAlt} from 'react-icons/fa'
import {BiCategoryAlt} from 'react-icons/bi'
import {TbDiscount2} from 'react-icons/tb'
import {RiArticleLine} from 'react-icons/ri'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BiStoreAlt } from 'react-icons/bi'
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return ( 
        <nav className="navbar-container py-3 lg:py-2 w-full bg-[#ffffff]">
           
            <div className="navbar-top  grid grid-cols-12 items-center">
                <div className="search-box col-span-full justify-between lg:col-span-8 flex py-4 ">
                        <GiHamburgerMenu size={20} className="lg:hidden flex self-center" color={"#5D6670"}/>
                        <img className="brand-logo px-6 w-40" src="/images/brand/mobit-logo.7d4c25e.svg" alt="mobit-logo" />

                        <div className="form-container hidden lg:flex flex-1 items-center rounded-2xl bg-[#F5F5F5]" >
                            <form className="flex justify-center items-center w-full">
                                <BsSearch size={20} className="mx-2 "/>
                                <input type="text" className="flex w-full border-r-2 bg-transparent text-lg pr-2" placeholder="جستجو در مبیت" />
                            </form>
                        </div>

                        <div className="location-user flex justify-between lg:px-4 py-2">
                            <div className="location-icon flex  justify-center items-center w-14">
                                <HiLocationMarker size={20} color={"#5D6670"}/>
                            </div>
                            <div className="location-infos flex flex-col justify-between items-start">
                                <small className="text-sm hidden lg:block">ارسال به</small>
                                <span className="text-2xl font-semibold">تهران</span>
                            </div>
                        </div>
                </div>
                <div className="user-infos col-span-4 hidden lg:flex items-center justify-end gap-4 ">
                <div className="user-infos flex  items-center gap-3 bg-[#f5f5f5] p-3 rounded-2xl">
                        <FaUserAlt className='text-blue-500'/>
                        <small className="text-gray-500"> امین شاهین</small>
                    </div>
                    <div className="shoping-cart items-center flex gap-3 bg-[#f5f5f5] p-3 rounded-2xl">
                        <RiShoppingBag2Fill color={'#ABB4BC'}/>
                        <small className="text-[#ABB4BC]">سبد خرید</small>
                    </div>

                </div>

            </div>  

            <div className="form-under-lg-screen lg:hidden">
                    <div className="form-container flex flex-1 items-center rounded-2xl bg-[#F5F5F5]" >
                            <form className="flex justify-center items-center w-full p-3">
                                <BsSearch size={20} className="mx-2 "/>
                                <input type="text" className="flex w-full border-r-2 bg-transparent text-xl lg:text-lg p-2 pr-2" placeholder="جستجو در مبیت" />
                            </form>
                        </div>
            </div>

            <div className="navbar-bottom hidden lg:flex gap-10 pt-4 pb-2 px-28 ">
                    <Link to="#" className="nav-link categories animation-for-hover flex items-center  ">
                        <BiCategoryAlt className="text-blue-500 ml-3"/>
                        <p className="text-xl font-medium">دسته بندی ها</p>
                    </Link>
                    <Link to="#" className="nav-link discounts animation-for-hover flex items-center">
                        <TbDiscount2 className="text-red-500 ml-3"/>
                        <p  className="text-xl  font-medium"> پیشنهاد های شگفت انگیز</p>
                    </Link>
                    <Link to="#" className="nav-link articles  animation-for-hover flex items-center">
                        <RiArticleLine className="text-green-500 ml-3"/>
                        <p  className="text-xl  font-medium">اخبار و مقاله های روز</p>
                    </Link>
                    <Link to="#" className="nav-link prices animation-for-hover flex items-center">
                        <BiStoreAlt className="text-violet-500 ml-3"/>
                        <p  className="text-xl  font-medium"> همکار و قیمت عمده </p>
                    </Link>
            </div>  
        </nav>
    
     );
}
 
export default Navbar;