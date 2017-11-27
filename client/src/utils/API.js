import axios from "axios";

export default {
  searchUsers: function(term) {
    return axios.get(`/api/search/users/${term}`);
  },
  searchOrgs: function(term) {
    return axios.get(`/api/search/orgs/${term}`);
  },
  searchRepos: function(term) {
    return axios.get(`/api/search/repos/${term}`);
  }
}