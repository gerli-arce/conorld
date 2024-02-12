import { loginSession } from "../services/login/loginSession";

const useLayout = ()=>{

    const initialLogin ={
        username: null,
        password: null,
    }

    const [login, setLogin] = useState(initialLogin);

    const handlerLogin = ({username, password})=>{
        if(loginSession({username, password})){
            setLogin({ ...session, username,  password})
        }
    }

    return {login, handlerLogin};

}