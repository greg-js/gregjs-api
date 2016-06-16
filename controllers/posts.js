const archiveResponse = require('../db/archive-response');
const categoriesResponse = require('../db/categories-response');
const tagsResponse = require('../db/tags-response');

exports.getArchive = (req, res, next) => {
  res.status(200).send(archiveResponse);
};

exports.getCategories = (req, res, next) => {
  res.status(200).send(categoriesResponse);
};

exports.getTags = (req, res, next) => {
  res.status(200).send(tagsResponse);
};

exports.getEverything = (req, res, next) => {
  res.status(200).send({
    posts: archiveResponse.data,
    categories: categoriesResponse.data,
    tags: tagsResponse.data
  });
};
