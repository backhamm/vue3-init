import axios from "axios";

const service = axios.create({
    timeout: 20000,
})

service.interceptors.request.use(config => {
    return config
}, error => {
    console.log(error);
})

service.interceptors.response.use(response => {
    const res = response.data
    console.log(res);
    return res
}, error => {
    console.log(error);
})

export default service