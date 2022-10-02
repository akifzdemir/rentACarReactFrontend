import axios from "axios";
import { apiUrl } from "./ApiUrl";

export default class AuthService{
    login(values){
        return axios.post(apiUrl+"Auth/login",values)
    }
    register(values){
        return axios.post(apiUrl+"Auth/register",values)
    }
}