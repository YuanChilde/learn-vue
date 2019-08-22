import axios from "axios";
import {Message} from "ant-design-vue";
import store from "../store";
import moment from "moment";
import qs from 'qs';

import {FORM_CONTENT_TYPE} from './config';

moment.locale("zh-cn");

/*
1.异常可全局或局部控制
2.接收参数为JSON和Form

*/

let TIMEOUT = 10000;
let API_URL = process.env.VUE_APP_API_URL;

// 默认配置
let service = axios.create({
  timeout: TIMEOUT,
  baseURL: API_URL,
  headers:{
    post:{
      'Content-Type' : 'application/json;charset=UTF-8'
    }
  }
});

// 请求拦截
service.interceptors.request.use(
  config => {
    const token = store.state.token;
    token && (config.headers.Authorization = `Bearer ${store.state.token}`);
    return config;
  },
  // 丢到catch处理（暂时未测试到实际用途）
  error => {
    console.log("interceptors.request");
    console.log(error);
    return Promise.reject(error);
  }
);

// 响应拦截
service.interceptors.response.use(
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
          break;
        case 500:
          Message.error("服务器关闭...");
          break;
      }
     /* const message = error.response.data.message
        ? error.response.data.message
        : error.response.status == 401
        ? "登录过期，请重新登录"
        : "服务器异常";
      Message.error(message);*/
    } else if (
      error.code == "ECONNABORTED" &&
      error.message.indexOf("timeout") != -1
    ) {
      // timeout超时
      Message.error("请求超时...");
    }
    console.log(error.response.status);
    // 丢到catch处理
    return Promise.reject(error.response);
  }
);

const request = {
  post(url, params,options) {
    return new Promise((resolve, reject) => {
      const defaultOptions = {};
      const extraOptions = {
        ...defaultOptions,
        ...options
      };
      service.post(url, params, {
        transformRequest: [
          params => {
            let result = "";
            /*Object.keys(params).forEach(key => {
              if (
                  !Object.is(params[key], undefined) &&
                  !Object.is(params[key], null)
              ) {
                result +=
                    encodeURIComponent(key) +
                    "=" +
                    encodeURIComponent(params[key]) +
                    "&";
              }
            });*/
            if (extraOptions.hasOwnProperty("header") && extraOptions['header']['Content-Type'] === FORM_CONTENT_TYPE) {
              result = qs.stringify(params);
            }else{
              result = JSON.stringify(params);
            }
            return result;
          }
        ],
        ...extraOptions
      }).then(res => {
        resolve(res.data);
      }).catch(err => {
        reject(err.data)
      })
    });
  },
  get(url, params,options) {
  /*    let _params;
      if (Object.is(params, undefined)) {
        _params = "";
      } else {
        _params = "?";
        for (let key in params) {
          if (params.hasOwnProperty(key) && params[key] !== null) {
            _params += `${key}=${params[key]}&`;
          }
        }
      }
      return service.get(`${url}${_params}`);*/
    return new Promise((resolve, reject) => {
      const defaultOptions = {};
      const extraOptions = {
        ...defaultOptions,
        ...options
      };
      service.get(url, {
        params: params,
        ...extraOptions
      }).then(res => {
        resolve(res.data);
      }).catch(err => {
        reject(err.data)
      })
    });
  }
};

export default request;
