import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Courses from "../pages/Courses/Courses"
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";

import Details from "../pages/Details/Details";
import CheckOut from "../pages/CheckOut/CheckOut";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children :[
            {
                path:'/',
                element:<Home></Home>,
    
            },
            {
                path:'/signIN',
                element:<Login></Login>
            
            },
            {
                path:'/courses/:id',
                loader: async({params})=>
                fetch(`https://coding-hero-server.vercel.app/courses/${params._id}`),
                 element:<Details></Details>,
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/courses',
                element:<Courses></Courses>
            },
            {
                path:'/checkOut',
                element:<CheckOut></CheckOut>
            },
            
        ]

    },
  
   
   

])