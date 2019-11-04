var express = require('express');
var userRouter = express.Router();
var UserController = require('./controllers/UserController');

userRouter.get('/', UserController.getAllUsers);
userRouter.post('/', UserController.addUser);
userRouter.get('/:userId', UserController.getUser);
userRouter.put('/:userId', UserController.updatedUser);
userRouter.delete('/:userId', UserController.deleteUser);
module.exports = userRouter;