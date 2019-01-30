import axios from 'axios';

export default {
  // Get all needs
  getNeeds: () => {
    return axios.get('/api/needs');
  },

  // Get need by id
  getNeed: id => {
    return axios.get(`/api/needs/${id}`);
  },

  getNeedsbyUser: () => {
    // console.log(data);
    return axios.get('/api/needs/user');
  },

  // Post a new need
  postNeed: needData => {
    return axios.post('/api/needs', needData);
  },

  // Change the status of need
  markResolved: id => {
    return axios.put(`/api/needs/${id}`, {
      resolved: true
    });
  },

  deleteNeed: id => {
    return axios.delete(`/api/needs/${id}`);
  },

  postMessage: data => {
    return axios.post('/api/message', data);
  },

  loadMessage: data => {
    return axios.get(`/api/message?needId=${data.need}`);
  },

  getUserInfo: id => {
    return axios.get(`/api/user/${id}`);
  }
};
