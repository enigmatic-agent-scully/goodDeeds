import axios from 'axios';

export default {
  signup: data => {
    return axios.post('/api/user/signup', data);
  },
  login: function () {
    return axios.post('/api/user/login');
  },
  logout: function () {
    return axios.get('/api/user/logout');
  }
};