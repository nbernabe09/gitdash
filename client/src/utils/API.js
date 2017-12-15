import axios from "axios";

export default {
  searchUsers: function(term) {
    return axios.get(`/api/github/search/users/${term}`);
  },
  searchOrgs: function(term) {
    return axios.get(`/api/github/search/orgs/${term}`);
  },
  searchRepos: function(term) {
    return axios.get(`/api/github/search/repos/${term}`);
  },
  getCollectionInfo: function() {
    return axios.get(`/api/collection/info/`);
  },
  getUserName: function(id) {
    return axios.get(`/api/github/user/${id}`);
  },
  getRepo: function (id) {
    return axios.get(`/api/github/repo/${id}`);
  },
  getUser: function (id) {
    return axios.get(`/api/user/${id}`);
  },
  addCatNode: function(obj) {
    axios.post("/api/catnode/", obj)
      .then(function (resp) {
        axios.post(`/api/collection/`, { catnode_id: resp.data._id })
             .then(e => console.log("RESP",e));
      })
      .catch(err => console.log(err))
  }
}