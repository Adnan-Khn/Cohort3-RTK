import React, { useEffect } from "react";
import ProtectedAuth from "./protected/ProtectedAuth";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedMain from "./protected/ProtectedMain";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import Shop from "../pages/Shop";
import About from "../pages/About";
import { addUser } from "../features/authSlice";

export const AppRoutes = () => {
    const dispatch = useDispatch();
    const hyderate  = ()=>{
        let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
        if(!loggedUser){
            toast.error("Please login first!!!");
            return;
        }
        dispatch(addUser(loggedUser));
    }
    useEffect(()=>{
        hyderate();
    },[])
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedAuth />,
      children:[
        {
            path:"",
            element:<AuthLayout/>,
            children:[
                {
                    path:"",
                    element:<Login/>
                },
                {
                    path:"/register",
                    element:<Register/>
                }
            ]
        }
      ]
    },
    {
        path:"/main",
        element:<ProtectedMain/>,
        children:[
            {
                path:"",
                element:<MainLayout/>,
                children:[
                    {
                        path:"",
                        element:<Home/>
                    },
                    {
                        path:"shop",
                        element:<Shop/>
                    },
                    {
                        path:"about",
                        element:<About/>
                    }
                ]
            }
        ]
    }
  ]);
  return <RouterProvider router={routes} />;
};
