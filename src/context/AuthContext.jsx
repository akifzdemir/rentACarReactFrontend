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

    const checkTokenExprired = async () => {
        const token = localStorage.getItem("token")
        if (token) {
            let decode = await jwtDecode(token)
            let currentDate = new Date();
            if (decode.exp * 1000 < currentDate.getTime()) {
                localStorage.removeItem("token")
                console.log("Token Exprired")
                setAuth(false)
                navigate("/")
            }
        }
    }

    const isLogged= async()=>{
        const token = localStorage.getItem("token")
        try {
            if (token) {
                const decode = await jwtDecode(token)
                setUser(
                {
                userName:decode["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
                userId:decode["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]
                })
                 setAuth(true)
            }else{
                setAuth(false)
                setUser({userName:"",userId:0})
            }
        } catch (error) {
            setAuth(false)
            localStorage.removeItem("token")
            setUser({userName:"",userId:0})
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
        checkTokenExprired()
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