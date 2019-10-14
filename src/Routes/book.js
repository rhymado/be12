const express = require ('express');
const bookController = require ('../Controllers/book');

const Router = express.Router ();

Router.get ('/', bookController.getBooks);
Router.post ('/', bookController.postBook);

module.exports = Router;
