import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Sal-87re7pwi_JefqNvyRDqQOlWxJPI00DiwJml9E6g'
    }
});