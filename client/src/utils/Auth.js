import axios from 'axios';

export default {
  signup: data => {
    return axios.post('/api/user/signup', data);
  },
  login: function (data) {
    return axios.post('/api/user/login', data);
  },
  logout: function () {
    localStorage.removeItem('user_id');
    return axios.get('/api/user/logout');
  },
  updateUserInfo: data => {
    return axios.put('/api/user/update', data);
  },
  session: function () {
    // A simple caching method to make it faster
    const cache = false;
    return Promise.resolve().then(() => {
      if (cache && localStorage.getItem('user_id')) {
        return {
          user: {
            id: localStorage.getItem('user_id')
          },
          authenticated: true
        };
      } else {
        return axios.get('/api/user/session')
          .then(res => res.data);
      }
    }).then(data => {
      if (cache && data.user.id) {
        localStorage.setItem('user_id', data.user.id);
      }

      return data;
    });
  }
};