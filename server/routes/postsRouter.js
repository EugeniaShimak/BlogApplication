var express = require('express');
var PostsRouter = express.Router();


var PostsController = require('../controllers/PostsController');
PostsRouter.get('/', PostsController.getAllPosts);
PostsRouter.get('/:userId', PostsController.getAllPostsByUser);
PostsRouter.get('/post/:postId', PostsController.getPost);
PostsRouter.post('/', PostsController.addPost);
PostsRouter.put('/:postId', PostsController.updatePost);
PostsRouter.delete('/:postId', PostsController.deletePost);

module.exports = PostsRouter;