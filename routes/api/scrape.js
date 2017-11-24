const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

const axios = require("axios");
const request = require("request");
const cheerio = require("cheerio");

function scrapeController(req, res) {
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  url += "?api-key=ceb6c88e13e6470ca317e188513c178c";
  url += "&q=" + req.query.q;
  url += "&begin_date=" + req.query.begin_date;
  url += "&end_date=" + req.query.end_date;
  axios.get(url)
    .then(resp => {
      let promises = [];
      let articles = [];
      resp.data.response.docs.map(e => {
        let article = {
          url: e.web_url,
          headline: e.snippet
        }
        articles.push(article);
        promises.push(axios.get(e.web_url));
      });
      Promise.all(promises)
        .then(values => {
          ret = values.map((e, i) => {
            const $ = cheerio.load(e.data);
            let summary = $(".story-body-text").eq(0).text();
            articles[i].summary = summary;
            return articles[i];
          })
          console.log("$#");
          console.log(ret);
          res.json(ret);
        })
    })
  }
  
router.route("/")
  .get(scrapeController);

module.exports = router;
