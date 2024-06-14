/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { Cookies } from "react-cookie";  
import KEY from '../constant/key.json';

const cookies : any = new Cookies();

const baseUrl = window.location.origin;

const getHeaders = () => {
    const token = cookies.get(KEY.TOKEN);
    const headers: any = {};
    if(token) {
        headers["Authorization"] =  "Bearer "+ token;
    } 
    return headers;
}

export const getWithToken = (url:string) => {
    const headers = getHeaders();
    return axios.get(`${baseUrl}/${url}`, {headers});
}



export const postForm = (url:string, data :any) => {
    const headers = getHeaders();
    return axios.postForm(`${baseUrl}/${url}`, data, {headers});
}


export const put = (url:string, data :any) => {
    const headers = getHeaders();
    return axios.put(`${baseUrl}/${url}`, data, {headers});
}


export const post = (url:string, data :any) => {
    const headers = getHeaders();
    return axios.post(`${baseUrl}/${url}`, data, {headers});
}


export const get = (url:string) => {
    const headers = getHeaders();
    return axios.get(`${baseUrl}/${url}`, {headers});
}


export const ddelete = (url:string) => {
    const headers = getHeaders();
    return axios.delete(`${baseUrl}/${url}`, {headers});
}