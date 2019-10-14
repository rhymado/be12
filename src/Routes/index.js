const express = require ('express');
const book = require ('./book');
const author = require ('./author');

const Router = express.Router ();

Router.use ('/book', book);
Router.use ('/author', author);

module.exports = Router;
