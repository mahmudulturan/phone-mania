import {
    createBrowserRouter
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Favourites from "../Pages/Favourites/Favourites";
import Login from "../Pages/Login/Login";
import Phone from "../Pages/PhoneDetails/Phone";

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
        {
            path: '/',
            loader: ()=> fetch('/phones.json'),
            element: <Home></Home>
        },
        {
            path: '/favourites',
            element: <Favourites></Favourites>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/phones/:id',
            loader: ()=> fetch('/phones.json'),
            element: <Phone></Phone>
        }
        ]
    }
])

export default myCreatedRoute;