import React from "react";
import axios from "axios";


const baseUrl = "https://restcountries.com/v3.1/all"


const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

// const create = newObject => {
//     const request = axios.post(baseUrl, newObject)
//     return request.then(response => response.data)
// }

// const update = (id, newObject) => {
//     const request = axios.put(`${baseUrl}/${id}`,newObject)
//     return request.then(response => response.data)
// }

// const delet = (id) =>{
//     const request = axios.delete(`${baseUrl}/${id}`)
//     console.log(request)
//     console.log(request.data)
//     return request.then(response => response.data)

// } 

export default {getAll}