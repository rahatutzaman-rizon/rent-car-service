import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import CarSell from "../pages/CarSell";
import Contact from "../pages/Contact";


const Router = createBrowserRouter([
{
    path:"/",
    element:<App></App>,
    children:[
        {
            path:"/",
            element:<Home></Home>

        },
        {
            path:"/home",
            element:<Home></Home>

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



        
    ]
}

]); 

export default Router;