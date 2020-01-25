import axios from "axios"
const axiosInstance = axios.create({
  timeout:15000
})

//这里为什么不用配置总的请求地址（baseUrl）


axiosInstance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

export default axiosInstance