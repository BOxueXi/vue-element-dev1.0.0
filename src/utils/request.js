import HttpRequest from './axios';
import merge from 'lodash/merge';
import { Message } from 'element-ui';
import { getToken } from './helper';
const baseURL = process.env.VUE_APP_API;
const axios = new HttpRequest(baseURL);

export const fetch = (options) => {
  const token = getToken() || '';
  const axiosConfig = merge({
    method: 'post',
    headers: {
      Authorization: token,
      ChannelCode: '01',
      AcessParty: 'ycloud'
    }
  }, options);
  return new Promise((resolve, reject) => {
    axios.request(axiosConfig).then(res => {

    }).catch((err) => {
      reject(err);
      Message.error('请求失败,请重试');
    });
  });
};

export const post = (url, data) => {
  return fetch({
    url,
    method: 'post',
    data
  });
};

export const get = (url, data) => {
  return fetch({
    url,
    method: 'get',
    params: {
      ...data
    }
  });
};
