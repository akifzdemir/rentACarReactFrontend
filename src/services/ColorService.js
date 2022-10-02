import axios from "axios";

export default class ColorService{
    getColors(){
        return axios.get("https://localhost:7012/api/Colors/getall")
    }
    getColorsById(colorId){
        return axios.get("https://localhost:7012/api/Colors/getbyid?id="+colorId)
    }
    add(values){
        return axios.post("https://localhost:7012/api/Colors/add",values)
    }
    delete(values){
        return axios.post("https://localhost:7012/api/Colors/delete",values)
    }
    update(values){
        return axios.put("https://localhost:7012/api/Colors/update",values)
    }
}