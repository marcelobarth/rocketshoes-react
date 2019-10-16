import axios from 'axios';

/* json-server -H 0.0.0.0 -p 3000 -w server.json */
const api = axios.create({
    baseURL: 'http://localhost:3000',
});

export default api;
