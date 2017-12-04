const axios = require("axios");

const seed = [
  {
    repo_id: 101191987,
    language: "JavaScript",
    owner: 29104387,
    category: "Homework"
  },
  {
    repo_id: 103053044,
    language: "CSS",
    owner: 29104387,
    category: "Cool"
  },
  {
    repo_id: 103044729,
    language: "JavaScript",
    owner: 29104387,
    category: "Homework"
  },
  {
    repo_id: 94505621,
    language: "HTML",
    owner: 29104387,
    category: "Homework"
  },
  {
    repo_id: 94969236,
    language: "CSS",
    owner: 29104387,
    category: "Cool"
  },
  {
    repo_id: 104151087,
    language: "HTML",
    owner: 29104387,
    category: "Cool"
  },
  {
    repo_id: 104130663,
    language: "JavaScript",
    owner: 29104387,
    category: "Help"
  },
  {
    repo_id: 103049913,
    language: "JavaScript",
    owner: 29104387,
    category: "Homework"
  },
  {
    repo_id: 101191987,
    language: "null",
    owner: 29104387,
    category: "Help"
  },
  {
    repo_id: 103692376,
    language: "HTML",
    owner: 29104387,
    category: "Homework"
  },
  {
    repo_id: 32944229,
    language: "JavaScript",
    owner: 5923958,
    category: "Games"
  },
  {
    repo_id: 35693718,
    language: "JavaScript",
    owner: 5923958,
    category: "Games"
  },
  {
    repo_id: 94958283,
    language: "HTML",
    owner: 5923958,
    category: "Homework"
  },
  {
    repo_id: 44022237,
    language: "JavaScript",
    owner: 5923958,
    category: "Help"
  },
  {
    repo_id: 77806473,
    language: "Go",
    owner: 5923958,
    category: "Cool"
  },
  {
    repo_id: 44022237,
    language: "JavaScript",
    owner: 5923958,
    category: "Help"
  }, {
    repo_id: 77176702,
    language: "JavaScript",
    owner: 5923958,
    category: "Cool"
  }, {
    repo_id: 31924247,
    language: "C#",
    owner: 5923958,
    category: "Cool"
  }, {
    repo_id: 31558887,
    language: "null",
    owner: 5923958,
    category: "Help"
  }, {
    repo_id: 45353939,
    language: "JavaScript",
    owner: 5923958,
    category: "Help"
  },
  {
    repo_id: 97144308,
    language: "CSS",
    owner: 28968121,
    category: "Games"
  },
  {
    repo_id: 94636957,
    language: "HTML",
    owner: 28968121,
    category: "Homework"
  },
  {
    repo_id: 103338233,
    language: "JavaScript",
    owner: 28968121,
    category: "Homework"
  },
  {
    repo_id: 100809249,
    language: "CSS",
    owner: 28968121,
    category: "Homework"
  },
  {
    repo_id: 112902547,
    language: "JavaScript",
    owner: 28968121,
    category: "Homework"
  },
  {
    repo_id: 107598007,
    language: "JavaScript",
    owner: 28968121,
    category: "Homework"
  },
  {
    repo_id: 67543822,
    language: "JavaScript",
    owner: 9950313,
    category: "Help"
  },
  {
    repo_id: 67543905,
    language: "JavaScript",
    owner: 9950313,
    category: "Help"
  },
  {
    repo_id: 47118129,
    language: "JavaScript",
    owner: 4129662,
    category: "Help"
  },
  {
    repo_id: 1424470,
    language: "JavaScript",
    owner: 4129662,
    category: "Help"
  },
  {
    repo_id: 107063514,
    language: "JavaScript",
    owner: 16461670,
    category: "Help"
  },
  {
    repo_id: 105806050,
    language: "HTML",
    owner: 16461670,
    category: "Homework"
  },
  {
    repo_id: 107824055,
    language: "null",
    owner: 16461670,
    category: "Cool"
  },
  {
    repo_id: 106139165,
    language: "JavaScript",
    owner: 16461670,
    category: "Help"
  },
  {
    repo_id: 106219016,
    language: "JavaScript",
    owner: 16461670,
    category: "Help"
  },
  {
    repo_id: 112432199,
    language: "JavaScript",
    owner: 16461670,
    category: "Help"
  },
  {
    repo_id: 112062425,
    language: "JavaScript",
    owner: 16461670,
    category: "Help"
  },
  {
    repo_id: 106358115,
    language: "JavaScript",
    owner: 16461670,
    category: "Help"
  },
  {
    repo_id: 103318172,
    language: "JavaScript",
    owner: 16461670,
    category: "Help"
  },
  {
    repo_id: 110946608,
    language: "JavaScript",
    owner: 16461670,
    category: "Homework"
  }
];


seed.map(info => {
  axios.post("http://127.0.0.1:3001/api/catnode/", info)
    .then(function (resp) {
      console.log(resp.data._id);
      axios.post(`http://127.0.0.1:3001/api/collection/5a24ee513d3ff7218c53dd31`, {catnode_id: resp.data._id})
    })
    .catch(err => console.log(err))
});
