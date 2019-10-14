const bookModel = require ('../Models/book');
const form = require ('../Helpers/form');
module.exports = {
  getBooks: (req, res) => {
    bookModel
      .getBooks ()
      .then (response => {
        form.success (res, 200, response);
      })
      .catch (error => {
        console.log (error);
      });
  },
  postBook: (req, res) => {
    bookModel
      .postBook (req)
      .then (response => {
        res.json (response);
      })
      .catch (err => {
        console.log (err);
      });
  },
};
