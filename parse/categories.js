const _ = require('lodash');

const categoriesDb = require('../db.json').models.Category;

const categoriesResponse = {
  data: categoriesDb.map(category => category.name)
};

module.exports = categoriesResponse;
