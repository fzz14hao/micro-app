import axios from 'axios';
import Qs from 'qs'

axios.defaults.timeout = 30000;
// axios.defaults.baseURL = '/proxy';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.headers.Authorization='Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImVjNzZiZWJjODlmNzVkOWI2MWM4YTliN2I0ZmE3NDIzIiwidHlwIjoiSldUIn0.eyJuYmYiOjE2MjYzMTM0MDksImV4cCI6MTYyNjM5OTgwOSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo2NTU3IiwiYXVkIjpbImh0dHA6Ly9sb2NhbGhvc3Q6NjU1Ny9yZXNvdXJjZXMiLCJlbGFzdGljc2VhcmNoIiwiZXJwIiwiam9iIiwicmVwb3J0Iiwic2VydmVyNCJdLCJjbGllbnRfaWQiOiJKc0NsaWVudCIsInN1YiI6ImFkbWluIiwiYXV0aF90aW1lIjoxNjI2MzEzNDA5LCJpZHAiOiJsb2NhbCIsInJvbGUiOiJTdXBlckFkbWluaXN0cmF0b3IiLCJzY29wZSI6WyJlbGFzdGljc2VhcmNoIiwiZXJwIiwiam9iIiwicmVwb3J0Iiwic2VydmVyNCJdLCJhbXIiOlsicHdkIl19.TU8NbdYBcwxv0oDSGv8V-9nqZO0105W5aMPBd6dJGtvYKB0mFf2IaVQA_-D1qml3xY55XWxdi_93JF8IkAiBLwgk-4meGizkM1kOBfpKWuici7zZrvw4TOTtgYb3hl3ckltld3B8fyl3HfNKTzejftqNyRgiwifPzi5zXMD6Fv35vV_P3S-2xFeLu5vtryOV-kKQL2_OfOP34tIg0MNuTktL7Ixy5PEOobBwPe4d0GE8avk79Nqjk8K3N2OiiL0cx5hHjSk-UwERW7Kgws7_q2sattXNEYcjC8ySI10cveEmHmVf_vLYVZ_jQonBj9AyWetbuMrw36fv1kv3j3ww4Q'


//http request 拦截器
axios.interceptors.request.use(
    config => {
        config.data = Qs.stringify(config.data)
        return config;
    },
    error => {
        return Promise.reject(error) // 在调用的那边可以拿到(catch)你想返回的错误信息
    }
);


//http response 拦截器
axios.interceptors.response.use(
    response => {
        return response.data
    },
    err => {
        return Promise.reject(err) // 返回接口返回的错误信息
    }
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export const httpGet = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @param isAlert 是否弹窗提示
 * @returns {Promise}
 */
export const httpPost = (url, data = {}, isAlert = true) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => {
                resolve(response);
            }, err => {
                reject(err)
            })
    })
}