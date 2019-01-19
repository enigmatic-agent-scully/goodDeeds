import axios from 'axios';

export default {
  signup: function () {
    return axios.post('/api/user/signup');
  },
  login: function () {
    return axios.post('/api/user/login');
  },
  logout: function () {
    return axios.get('/api/user/logout');
  }
};