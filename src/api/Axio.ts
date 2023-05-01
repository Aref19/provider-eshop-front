import axios from 'axios';


export const serverUrl = "http://localhost:8182"

export default axios.create({ baseURL: serverUrl })

export const axiosPrivate = axios.create({
    baseURL: serverUrl
})