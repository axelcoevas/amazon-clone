import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://console.firebase.google.com/u/0/project/challenge-bc120/overview' //  THE API URL (cloud function)
});

export default instance;