import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-challenge-bc120.cloudfunctions.net/api/' //  THE API URL (cloud function)
});

export default instance;