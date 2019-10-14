const express = require ('express');
const authorController = require ('../Controllers/author');
const Router = express.Router ();

Router.get ('/', authorController.getAuthors);

module.exports = Router;
