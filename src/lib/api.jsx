
import axios from 'axios';


const Url = "http://127.0.0.1:5000/";

export function GetStudent(id) {
    return axios.get(Url+"/id");
}

export function GetStudentList() {

    return axios.get(Url);
}   

export function AddStudent() {

    return axios.post(Url);
} 

