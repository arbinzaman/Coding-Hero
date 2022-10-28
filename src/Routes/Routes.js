import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Courses from "../pages/Courses/Courses"
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";

import Details from "../pages/Details/Details";
import CheckOut from "../pages/CheckOut/CheckOut";
import PrivateRoute from "../pages/PrivateRoute/PrivateRoute";
import BLog from "../pages/Blog/BLog";
import InvaildRoute from "../pages/InvaildRoute/InvaildRoute";
import Faq from "../pages/Faq/Faq";

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
                path:'/details/:id',
                loader: ({params})=>
                fetch(`https://coding-hero-server.vercel.app/category/${params?.id}`),
                 element:<Details></Details>,
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/courses',
                loader:()=>fetch('https://coding-hero-server.vercel.app/courses'),
                element:<Courses></Courses>
            },
            {
                path:'/checkOut',
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            },
            {
                path:'/blog',
                element:<BLog></BLog>
            },
            {
                path:'*',
                element:<InvaildRoute></InvaildRoute>
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
            
        ]

    },
  
   
   

])