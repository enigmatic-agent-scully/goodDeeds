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

  getNeedsCurrentUser: () => {
    // console.log(data);
    return axios.get('/api/needs/user');
  },

  getNeedsBySearch: (category, keyword, needdate) => {
    return axios.get(
      `/api/needs/search?category=${category}&keyword=${keyword}&needdate=${needdate}`
    );
  },

  // Post a new need
  postNeed: needData => {
    return axios.post('/api/needs', needData);
  },

  // Change the status of need
  markResolved: id => {
    return axios
      .put(`/api/needs/${id}`, {
        resolved: true
      })
      .then(resp => {
        console.log(resp);
      });
  },

  markUnresolved: id => {
    return axios.put(`/api/needs/${id}`, {
      resolved: false
    });
  },

  deleteNeed: id => {
    return axios
      .delete(`/api/needs/${id}`)
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        console.log(err);
      });
  },

  deleteMessage: id => {
    return axios
      .delete(`/api/message/${id}`)
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        console.log(err);
      });
  },

  postMessage: messageData => {
    return axios.post('/api/message', messageData);
  },

  loadMessage: needID => {
    return axios.get(`/api/message?needId=${needID}`);
  },

  getUserInfo: id => {
    return axios.get(`/api/user/${id}`);
  },

  donateHelp: (id) => {
    return axios.post('/api/needs/donate', id);
  },

  updateGoodSamaratinRecord: (data) => {
    return axios.post('/api/user/goodsamaratin', data);
  }




};
