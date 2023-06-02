import axios from "./request";

export const post = (url: string, params = {}) => axios.post(url, params)