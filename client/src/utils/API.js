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
  }
}