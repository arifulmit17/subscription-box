import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import SubscriptionDetails from "../pages/SubscriptionDetails";
import PrivateRoutes from "./PrivateRoutes";
import UserProfile from "../pages/UserProfile";
import Blogs from "../pages/Blogs";

const router=createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
                loader: ()=> fetch('../ProductData.json')
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/SubscriptionDetails/:id',
                element: <PrivateRoutes>
                    <SubscriptionDetails></SubscriptionDetails>
                </PrivateRoutes>,
                loader: ()=> fetch('../ProductData.json')
            },
            
        ]
    },
    {
        path: '/userprofile',
        element: <PrivateRoutes>
            <UserProfile></UserProfile>
        </PrivateRoutes>
    },
    {
        path:'/blogs',
        element: <PrivateRoutes>
           <Blogs></Blogs>
        </PrivateRoutes>        
    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    }
    

])


export default router;