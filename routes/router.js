const PostsController = require('../controllers/posts');

module.exports = (app) => {
  app.get('/posts/archive', PostsController.getArchive);
};

module.exports = (app) => {
  app.get('/posts/categories', PostsController.getCategories);
};

module.exports = (app) => {
  app.get('/posts/tags', PostsController.getTags);
};

module.exports = (app) => {
  app.get('/posts/everything', PostsController.getEverything);
};
