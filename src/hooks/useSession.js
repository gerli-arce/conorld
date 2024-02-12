import { useState } from "react";
import { loginSession } from "../services/login/loginSession";

export const useSessionLogin = ()=>{

    const initialLogin ={
        username: null,
        password: null,
    }

    const [login, setLogin] = useState(initialLogin);

    const handlerLogin = ({username, password})=>{
        if(loginSession({username, password})){
            setLogin({ ...login, username,  password})
        }
    }

    return {login, handlerLogin};

}