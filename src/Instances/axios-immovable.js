import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://inmobiliaria-2bcd0.firebaseio.com/'
});

export default instance;