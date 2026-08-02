import { axiosInstance } from "../config/axiosInstance,jsx";

export const getProducts = async()=>{
    try{
        const res = await axiosInstance.get('/products')
        return res.data.products
    }catch(err){
        console.error("Error fetching products:", err);
        throw err;
    }
    

}