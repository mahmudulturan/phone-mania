import {
    createBrowserRouter
  } from "react-router-dom";
import Layout from "../Layout/Layout";

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>
        
    }
])

export default myCreatedRoute;