import { nanoid } from "nanoid";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { addUser, removeUser } from "../features/authSlice";

export const useAuth = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [registeredUser,setRegisteredUser] = useState(JSON.parse(localStorage.getItem("registeredUser")) || []);
    const {register,reset,handleSubmit,formState:{errors},watch} = useForm();

    const loginUser=(data)=>{
        let user = registeredUser.find((val)=>val.email === data.email && val.password === data.password);

        if(!user){
            toast.error("Invalid email or password");
            return;
        }

        dispatch(addUser(user));
        localStorage.setItem("loggedUser",JSON.stringify(user));
        toast.success("Login successful");
        reset();
    }
    const registerUser=(data)=>{
        let user = {id:nanoid(),...data};
        let users = [...registeredUser,user];
        setRegisteredUser(users);
        localStorage.setItem("registeredUser",JSON.stringify(users));
        dispatch(addUser(user));
        localStorage.setItem("loggedUser",JSON.stringify(user));
        toast.success("Registration successful");
        reset();
    }
    const logoutUser=()=>{
        dispatch(removeUser());
        localStorage.removeItem("loggedUser");
        toast.success("Logout successful");
    }
    return {navigate, register,reset,handleSubmit,errors,loginUser,registerUser,watch,logoutUser};
}