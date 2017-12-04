const axios = require("axios");

const user = 5923958;
let repos;

axios
  .get("https://api.github.com/user/" + user)
  .then(e1 => {
    repos = e1.data.repos_url;
    axios
      .get(repos)
      .then(e2 => {
        console.log(e2.data);
      });
  });