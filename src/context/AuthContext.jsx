import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthContext = createContext()

export const AuthProvider=({children})=>{

    const [user,setUser] = useState({userName:"",userId:0})
    const [auth,setAuth] = useState(false)
    const navigate = useNavigate()

    const isLogged=()=>{
        const token = localStorage.getItem("token")
        if (token) {
            const decode = jwtDecode(token)
            setUser(
            {
            userName:decode["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
            userId:decode["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]
            })
            setAuth(true)
        }else{
            localStorage.removeItem("token")
            setAuth(false)
        }
    }

    const logout=()=>{
        localStorage.removeItem("token")
        setAuth(false)
        navigate("/")
        toast.success("Successfully logged out!")
    }

    useEffect(()=>{
        isLogged()
    },[auth])
    
    const values ={
        setAuth,
        auth,
        user,
        logout
    }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export default AuthContext