import { isAuth , signout} from "../../helpers/auth";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
function Logout(){
    
    const [clear,Setclear] = useState(false);

    useEffect(()=>{
        signout()
        const notify = toast.success('Logout Success! See you later.')
        Setclear(true)
        window.location.href = 'http://localhost:3000/';
    },[])

    
    return(
        <>
        {clear ?
            <Navigate to={"/"}/> : <div></div>

        }
        </>
    );
}

export default Logout