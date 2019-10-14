module.exports = {
  success: (res, status, result) => {
    let format = result.map (item => {
      return {
        id: item.id,
        book: `${item.title} by ${item.author}`,
      };
    });
    let form = {
      status,
      result: format,
    };
    res.json (form);
  },
};
