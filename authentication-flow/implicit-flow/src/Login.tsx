import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { makeLoginUrl } from "./Utils";

export function Login(){
    const authContext = {
        auth: false
    };

    useEffect(() => {
        if(!authContext.auth){
            window.location.href = makeLoginUrl();
        }
    }, [authContext])
    return authContext.auth ? <Navigate to='/admin'/> : <div>Loding...</div>
}