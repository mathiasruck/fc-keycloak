import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {login} from "./Utils.ts";

export function Callback() {

    const {hash} = useLocation();
    // console.log(hash);

    useEffect(() => {
        const searchParams = new URLSearchParams(hash.replace("#", ""));
        const accessToken = searchParams.get("access_Token")as string;
        const idToken = searchParams.get("id_token")as string;
        const state = searchParams.get("state")as string;

        if (!accessToken || !idToken || !state) {
            // navigate para login
            // return;
        }

        login(accessToken, accessToken, state);
        console.log("Tudo ok!")
    }, [hash]);

    return (<div>
            Loding...
        </div>)
}