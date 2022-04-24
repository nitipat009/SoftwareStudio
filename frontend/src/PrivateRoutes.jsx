import { Navigate,Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import React,{useEffect} from "react";
function PrivateRoute({auth}){
    useEffect(()=>{
        if(auth == false)
        toast.error("Permission Denied! Try to login!")
    },[])
    
    return auth ? <Outlet/> : <Navigate to={-1}/>
}

export default PrivateRoute