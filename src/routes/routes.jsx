import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import SubscriptionDetails from "../pages/SubscriptionDetails";
import PrivateRoutes from "./PrivateRoutes";
import UserProfile from "../pages/UserProfile";

const router=createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
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
                </PrivateRoutes>
                
            },
            {
                path: '/userprofile',
                element: <PrivateRoutes>
                    <UserProfile></UserProfile>
                </PrivateRoutes>
            }
        ]
    },
    

])


export default router;