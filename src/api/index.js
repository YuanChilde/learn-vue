import axios from "axios"
import {message} from 'ant-design-vue'
import store from '../store'
import types from '../store/mutations-types'
import router from '../router'
import moment from 'moment'

moment.locale('zh-cn')

let TIMEOUT = 5000;
let API_URL = process.env.VUE_APP_API_URL;


// 统一配置
let my = axios.create({
    timeout: TIMEOUT,
    baseURL: API_URL,
    responseType: 'json',
    validateStatus (status) {
        // 200 外的状态码都认定为失败
        return status === 200
    }
});

// 请求拦截
my.interceptors.request.use(
    config => {
        const token = store.state.token;
        token && (config.headers.Authorization = `Bearer ${store.state.token}`);
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截
my.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    store.commit(types.LOGOUT);
                    router.replace({
                        path: "/login",
                        query: {
                            redirect: router.currentRoute.path
                        }
                    });
            }
            const message = error.response.data.message ?
                error.response.data.message :
                error.response.status == 401 ?
                    "登录过期，请重新登录" :
                    "服务器异常";
            Message.error(message);
        } else if (error.code == 'ECONNABORTED' && error.message.indexOf('timeout') != -1) {
            Message.error("请求已超时");
        }
        return Promise.reject(error);
    }
);
