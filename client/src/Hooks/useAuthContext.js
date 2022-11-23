import { AuthContext } from "../Context/Authcontext";
import { useContext } from "react";

export const useAuthContext = () =>{
    const context = useContext(AuthContext)

    if(!context){
        throw Error("useAuthcontext cannot be used!")
    }
    return context
}