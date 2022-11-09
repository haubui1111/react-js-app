import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://636a1b74b10125b78fd0a324.mockapi.io',
});

export default axiosClient;
