import { nanoid } from "nanoid/non-secure";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { addUser } from "../features/authSlice";

export const useAuth = () => {
  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || [],
  );
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const registerUser = (data) => {
    let users = [...registeredUsers, {id:nanoid(),...data}];
    setRegisteredUsers(users);
    localStorage.setItem("registeredUsers", JSON.stringify(users));
    toast.success("User Registered 👍");
    reset();
  };
  const loginUser = (data) => {
    console.log(data)
    let user = registeredUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });
    if (!user) {
      toast.error("Provided correct credentials!!!");
      return;
    }
    dispatch(addUser(user));
    localStorage.setItem("loggedUser", JSON.stringify(user));
    toast.success(`Welcome back ${user.name.toUpperCase()}`);
    reset();
  };
  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    watch,
    registerUser,
    loginUser,
  };
};
