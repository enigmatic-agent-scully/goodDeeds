import axios from 'axios';

export default {
  // Get all deeds
  getDeeds: () => {
    return axios.get('/api/deeds');
  },

  // Get deed by id
  getDeed: id => {
    return axios.get(`/api/deeds/${id}`);
  },

  // Post a new deed
  postDeed: deedData => {
    return axios.post(`/api/deeds`, deedData);
  },

  markComplete: id => {
    return axios.put(`/api/deeds/${id}`, {
      completed: true
    });
  },

  // Need to check if this the correct way to organize all the messages for one post
  postMessage: (id, messageData) => {
    return axios.put(`/api/deeds/${id}/messages`, messageData);
  }
};
