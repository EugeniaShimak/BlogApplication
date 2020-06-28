var express = require('express');
var usersRouter = express.Router();
var UsersController = require('./controllers/UsersController');

usersRouter.get('/', UsersController.getUserList);
usersRouter.get('/:userId', UsersController.getUser);
usersRouter.post('/', UsersController.addUser);
usersRouter.put('/:userId', UsersController.updateUser);
usersRouter.delete('/:userId', UsersController.deleteUser);
module.exports = usersRouter;