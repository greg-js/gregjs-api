const db = require('../get_db');

exports.getPosts = (req, res, next) => {
  res.send(db);
};
