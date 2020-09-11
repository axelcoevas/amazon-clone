import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/challenge-bc120/us-central1/api' //  THE API URL (cloud function)
});

export default instance;