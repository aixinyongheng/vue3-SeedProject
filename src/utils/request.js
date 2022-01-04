import axios from 'axios';

const service = axios.create({
    
    baseURL: 'http://localhost:8000',
    timeout: 5000
});

service.interceptors.request.use(
    config => {
        // 所有服务同意增加请求头
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject();
        }
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

export default service;
