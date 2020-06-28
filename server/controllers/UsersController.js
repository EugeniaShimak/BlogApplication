const fs = require('fs');
let Utils = require('../utils/Utils');
const util = new Utils();
const {promisify} = require('util');


// Function#bind as needed
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const readFileUser = () => readFile('../server/users.json', 'utf8');
const writeFileUser = (data) => writeFile('../server/users.json', JSON.stringify(data));

class PostsController {
    static async getUserList(req, res) {
        console.log('getUserList');
        try {
            const allUsers = await readFileUser();
            console.log('allUsers', allUsers)
            if (allUsers.length > 0) {
                util.setSuccess(200, 'Users retrieved', allUsers);
            } else {
                util.setSuccess(200, 'No users found');
            }
            return util.send(res);
        } catch (error) {
            console.log('err', error)
            util.setError(400, error);
            return util.send(res);
        }
    }

    static async getUser(req, res) {
        console.log('getUser')
        const {userId} = req.params;
        try {
            const allUsers = await readFileUser();
            let user = allUsers.filter(post => post.id === userId);
            if (user) {
                util.setSuccess(200, 'Users retrieved', user);
            } else {
                util.setSuccess(200, 'No user found');
            }
            return util.send(res);
        } catch (error) {
            util.setError(404, error);
            return util.send(res);
        }
    }

    static async addUser(req, res) {
        console.log('addUser')
        console.log('req.body.login = ', req.body.login, ' req.body.password =', req.body.password)
        if (!req.body.login || !req.body.password) {
            util.setError(400, 'Please provide complete details');
            return util.send(res);
        }
        let newUser = req.body;
        console.log('newUser =', newUser)
        newUser.id = String(Math.random());
        console.log('newUser =', newUser)
        try {
            const allUsers = JSON.parse(await readFileUser());
            allUsers.push(newUser);
            console.log('allUsers after push =', allUsers)
            let aa = await writeFileUser(allUsers);
            util.setSuccess(201, 'User Added!', aa);
            return util.send(res);
        } catch (error) {
            console.log(error)
            util.setError(400, error.message);
            return util.send(res);
        }
    }

    static async updateUser(req, res) {
        const {userId} = req.params;
        try {
            const allUsers = JSON.parse(await readFileUser());
            let wasUpdate = false;
            allUsers.forEach(user => {
                if (String(user.id) === String(userId)) {
                    wasUpdate = true;
                    user.login = req.body.login||user.login;
                    user.password = req.body.password||user.password
                }
            });
            if (!wasUpdate) {
                util.setError(404, `Cannot find user with the id: ${userId}`);
            } else {
                let result = await writeFileUser(allUsers);
                util.setSuccess(200, 'User updated');
            }
            return util.send(res);
        } catch (error) {
            util.setError(404, error);
            return util.send(res);
        }
    }

    static async deleteUser(req, res) {
        console.log('deleteUser');
        const {userId} = req.params;
        console.log('userId = ', userId);
        try {
            const allUsers = JSON.parse(await readFileUser());
            let newArrayUsers = allUsers.filter((user) => String(user.id) !== String(userId));
            console.log('allUsers after delete =', newArrayUsers);
            let aa = await writeFileUser(newArrayUsers);
            util.setSuccess(201, 'User Deleted!', aa);
            return util.send(res);
        } catch (error) {
            console.log(error);
            util.setError(400, error.message);
            return util.send(res);
        }
    }
}

module.exports = PostsController;