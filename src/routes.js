import React from "react";
import Home from "./Pages/Home/Home";





let routes =[
    {path:'/',element:<Home/>},
    {path:'/course-info/:courseName',element:''},
    {path:'/category-info/:categoryInfoName',element:''},
    {path:'/articleInfo/:categoryInfoName',element:''},
    {path:'/courses',element:''},
    {path:'/login',element:''},
    {path:'/register',element:''},
]

export default routes