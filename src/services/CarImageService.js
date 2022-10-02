import axios from "axios";
import { apiUrl } from "./ApiUrl";

export default class{
    getAllImages(){
        return axios.get("https://localhost:7012/api/CarImages/getall")
    }
    getImagesByCarId(carId){
        return axios.get("https://localhost:7012/api/CarImages/getallbycarid?carId="+carId)
    }
    add(values){
        return axios.post(apiUrl+"CarImages/add",values,{
            headers:{
                'content-type': 'multipart/form-data'
            }
        })
    }

}