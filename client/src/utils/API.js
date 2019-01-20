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
    return axios.post(`/api/needs`, needData);
  },

  // Change the status of need
  markComplete: id => {
    return axios.put(`/api/needs/${id}`, {
      completed: true
    });
  },

  // Need to check if this the correct way to organize all the messages for one post
  postMessage: (id, messageData) => {
    return axios.put(`/api/needs/${id}/messages`, messageData);
  }
};
