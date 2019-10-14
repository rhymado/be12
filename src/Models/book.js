const connection = require ('../Configs/connect');
module.exports = {
  getBooks: () => {
    return new Promise ((resolve, reject) => {
      connection.query ('SELECT * FROM books', (err, response) => {
        if (!err) {
          resolve (response);
        } else {
          reject (err);
        }
      });
    });
  },
  postBook: req => {
    return new Promise ((resolve, reject) => {
      const body = req.body;
      connection.query (
        'INSERT INTO books SET title=?, author=?',
        [body.title, body.author],
        (err, response) => {
          if (!err) {
            resolve (response);
          } else {
            reject (err);
          }
        }
      );
    });
  },
};
