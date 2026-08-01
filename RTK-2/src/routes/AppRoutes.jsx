import AuthLayout from "../layouts/AuthLayout";

import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addUser } from "../features/authSlice";
import { useEffect } from "react";
import AuthProtected from "./protected/AuthProtected";
import MainProtected from "./protected/MainProtected";
import Home from "../pages/Home";

export const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    hyderateUser();
  }, []);
  const hyderateUser = () => {
    let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (!loggedUser) {
      toast.error("User not authorized !!!");
      return;
    }
    dispatch(addUser(loggedUser));
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "/register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
        path:"/main",
        element:<MainProtected/>,
        children:[
            {
                path:"",
                element:<Home/>
            }
        ]
    }
  ]);
  return <RouterProvider router={router} />;
};
