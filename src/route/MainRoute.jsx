
import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import ErrorPage from "../shared/ErrorPage";
import Login from "../shared/Login";
import Signup from "../shared/Signup";
import Profile from "../pages/profile/Profile";


export const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <MainLayout></MainLayout>, 
      children: [
        {
            index: '/',
            element: <Home></Home>
        },
        {
            path : '/login',
            element: <Login></Login>
        },
        {
            path : '/signup',
            element: <Signup></Signup>
        },
        {
            path : '/profile',
            element: <Profile></Profile>
        },
      ]
    },
    
  ]);