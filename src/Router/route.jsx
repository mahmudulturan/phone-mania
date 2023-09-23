import {
    createBrowserRouter
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Favourites from "../Pages/Favourites/Favourites";
import Login from "../Pages/Login/Login";

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/favourites',
            element: <Favourites></Favourites>
        },
        {
            path: '/login',
            element: <Login></Login>
        }
        ]
    }
])

export default myCreatedRoute;