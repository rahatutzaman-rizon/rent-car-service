import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import About from "../pages/About";
import CarSell from "../pages/CarSell";
import Contact from "../pages/Contact";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import NewHome from "../pages/NewHome";


const Router = createBrowserRouter([
{
    path:"/",
    element:<App></App>,
    children:[
        {
            path:"/",
            element:<NewHome></NewHome>

        },
        {
            path:"/home",
            element:<NewHome></NewHome>

        },
        {
            path:"/about",
            element:<About></About>

        },
        {
            path:"/sell",
            element:<CarSell></CarSell>

        },
        {
            path:"/contact",
            element:<Contact></Contact>

        },

        {
            path:"/cars",
            element:<CarListing></CarListing>

        },
        {
            path:"/cars/:slug",
            element:<CarDetails></CarDetails>

        },
        {
            path:"/blogs",
            element:<Blog></Blog>

        },
        {
            path:"/blogs/:slug",
            element:<BlogDetails></BlogDetails>

        },
        {
            path:"*",
            element:<NotFound></NotFound>

        },


        
    ]
}

]); 

export default Router;