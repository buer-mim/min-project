import axios from 'axios';

axios.interceptors.request.use((req) => {
    return req;
});

axios.interceptors.response.use((res) => {
    return res.data;
});

export default axios;