import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddService from "../../pages/AddSevice/AddService";
import AllServices from "../../pages/allServices/AllServices";
import Blogs from "../../pages/blogs/Blogs";
import Home from "../../pages/Home/Home";
import LogIn from "../../pages/Login/LogIn";
import Register from "../../pages/Register/Register";
import ServiceDetails from "../../pages/serviceDetails/ServiceDetails";
import UpdateReview from "../../pages/UpdateReview/UpdateReview";
import UserReviews from "../../pages/UserReview/UserReviews";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/allservices',
                element: <AllServices></AllServices>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>,
                loader: () => fetch('http://localhost:5000/blogs')

            },
            {
                path: '/reviews',
                element: <PrivetRoutes><UserReviews></UserReviews></PrivetRoutes>
            },
            {
                path: '/addservice',
                element: <PrivetRoutes><AddService></AddService></PrivetRoutes>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/updatereview',
                element: <PrivetRoutes><UpdateReview></UpdateReview></PrivetRoutes>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    }
])

export default router