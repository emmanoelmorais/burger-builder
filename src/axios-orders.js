import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-5874e.firebaseio.com/'
});

export default instance;