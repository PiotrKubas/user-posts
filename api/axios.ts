import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const client = axios.create({
    baseURL: API_URL,
    timeout: 10000,
});
