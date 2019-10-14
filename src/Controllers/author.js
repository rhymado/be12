const connection = require ('../Configs/connect');
module.exports = {
  getAuthors: (req, res) => {
    connection.query ('SELECT id, author FROM books', (err, data) => {
      if (err) {
        console.log (err);
      } else {
        res.json (data);
      }
    });
  },
};
