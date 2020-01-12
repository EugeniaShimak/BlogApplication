var express = require('express');
var PostsRouter = express.Router();


var PostsController = require('./controllers/PostsController');

PostsRouter.get('/', PostsController.getAllPosts);
PostsRouter.post('/', PostsController.addPost);
PostsRouter.get('/:userId', PostsController.getPost);
PostsRouter.put('/:userId', PostsController.updatedPost);
PostsRouter.delete('/:userId', PostsController.deletePost);

module.exports = PostsRouter;