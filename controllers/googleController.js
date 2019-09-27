const db = require("../models");
const axios = require("axios");
// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    axios
    .get("https://www.googleapis.com/books/v1/volumes", { params: req.query })
    .then( results=> res.json(results.data))
    .catch(err => res.status(422).json(err));
  }
  
};
