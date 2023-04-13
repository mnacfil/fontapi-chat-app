import axios from 'axios';
import {baseUrl} from './constant'
import { getUserToken } from './localStorage';

export const serverBaseUrl = axios.create({
    baseURL: baseUrl
})

serverBaseUrl.interceptors.request.use((config) => {
    const token = getUserToken();
    if(token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config;
})