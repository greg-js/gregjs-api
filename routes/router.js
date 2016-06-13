const PostsController = require('../controllers/posts');

module.exports = (app) => {
  app.get('/posts', PostsController.getPosts);
};
