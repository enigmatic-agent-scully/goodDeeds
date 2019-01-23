import axios from 'axios';

export default {
  signup: data => {
    return axios.post('/api/user/signup', data);
  },

  login: data => {
    return axios.post('/api/user/login', data);
  },

  logout: function () {
    return axios.get('/api/user/logout');
  },

};
