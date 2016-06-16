const _ = require('lodash');

const tagsDb = require('../db.json').models.Tag;

const tagsResponse = {
  data: tagsDb.map(tag => tag.name)
};

module.exports = tagsResponse;
