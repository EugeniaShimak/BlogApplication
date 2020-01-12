var express = require('express');
var usersRouter = express.Router();
var UsersController = require('./controllers/UsersController');

usersRouter.get('/', UsersController.getAllUsers);
usersRouter.post('/', UsersController.addUser);
usersRouter.get('/:userId', UsersController.getUser);
usersRouter.put('/:userId', UsersController.updatedUser);
usersRouter.delete('/:userId', UsersController.deleteUser);
module.exports = usersRouter;