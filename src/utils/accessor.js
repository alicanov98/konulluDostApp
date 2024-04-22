import axios from 'axios';

const $axios = axios.create({
  baseURL: 'https://konullu.dost.gov.az',
});

$axios.interceptors.request.use(
  async config => {
    // const token =''
    // const token = await AsyncStorage.getItem('token');
    // if (config.url && token) {
    //   config.headers['X-Authorization'] = `Bearer ${token}`;
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

$axios.interceptors.response.use(
  async response => {
    return response;
  },
  error => {
    // if (error.response.status == 404) {
    //   redirect('/404');
    // }
    // if (error.response.status == 403) {
    //   redirect('/login');
    // }
    // if (error.response.status !== 401) {
    //   let message = '';
    //   if (error.hasOwnProperty('response')) {
    //     // The request was made and the server responded with a status code
    //     // that falls out of the range of 2xx
    //     message = error.response.data.error;
    //   } else if (error.hasOwnProperty('request')) {
    //     // The request was made but no response was received
    //     // error.request is an instance of XMLHttpRequest in the browser and an instance of
    //     // http.ClientRequest in node.js
    //     message = error.request;
    //   } else {
    //     // Something happened in setting up the request that triggered an Error
    //     message = error.message;
    //   }
    //
    //   let alert_obj: AlertType = {
    //     title: error,
    //     body: message
    //   };
    return Promise.reject(error);
  },
);

export default $axios;
