export const loginSession = ({username, password})=>{
    return (username === "admin" && password === "1234") ? true : false;
}