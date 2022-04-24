import { isAuth , signout} from "../../helpers/auth";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
function Logout(){
    const handleLogout = () =>{
        signout
    }

    useEffect(()=>{
        handleLogout
        const notify = toast.success('Logout Success! See you later.')
    },[])

    
    return(
        <Navigate to={"/"}/>
    );
}

export default Logout