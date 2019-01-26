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

  // Need to check if this the correct way to organize all the messages for one post
  postMessage: (id, messageData) => {
    return axios.put(`/api/needs/${id}/messages`, messageData);
  },

  getUserInfo: id => {
    return axios.get(`/api/user/${id}`);
  }
};
