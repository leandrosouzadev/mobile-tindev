import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.102:3333' //ip da maquina onde esta o server
});

export default api;