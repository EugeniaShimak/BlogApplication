const fs = require('fs');
let Utils = require('../utils/Utils');
const util = new Utils();
const {promisify} = require('util');


// Function#bind as needed
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const readPostUser = () => readFile('../server/posts.json', 'utf8')
const writeFilePostUser = (data) => writeFile('../server/posts.json', JSON.stringify(data))

class PostsController {
    static async getAllPosts(req, res) {
        console.log('getAllPosts')
        try {
            const allPosts = await readPostUser();
            console.log('allPosts', allPosts)
            if (allPosts.length > 0) {
                util.setSuccess(200, 'Posts retrieved', allPosts);
            } else {
                util.setSuccess(200, 'No post found');
            }
            return util.send(res);
        } catch (error) {
            console.log('err', error)
            util.setError(400, error);
            return util.send(res);
        }
    }

    static async getAllPostsByUser(req, res) {
        console.log('getAllPostsByUser')
        try {
            const allPosts =JSON.parse(await readPostUser());
            console.log('allPosts', allPosts)
            console.log('req.params.userId', req.params.userId)
            let postsByUserId =allPosts.filter(post => String(post.userId) === req.params.userId);
            console.log('postsByUserId', postsByUserId);
            if (postsByUserId.length > 0) {
                util.setSuccess(200, 'Posts retrieved', postsByUserId);
            } else {
                util.setSuccess(200, 'No post found');
            }
            return util.send(res);
        } catch (error) {
            console.log(error)
            util.setError(400, error);
            return util.send(res);
        }
    }

    static async addPost(req, res) {
        console.log('addPost')
        console.log('req.body.text = ',req.body.text, ' req.body.userId =', req.body.userId)
        if (!req.body.text || !req.body.userId) {
            util.setError(400, 'Please provide complete details');
            return util.send(res);
        }
        let newPost = req.body;
      console.log('newPost =', newPost)
        newPost.id = String(Math.random());
        console.log('newPost =', newPost)
        try {
            const allPosts =JSON.parse(await readPostUser());
            allPosts.push(newPost);
            console.log('allPosts after push =', allPosts)
           let aa =  await writeFilePostUser(allPosts);
            util.setSuccess(201, 'Post Added!',aa);
            return util.send(res);
        } catch (error) {
            console.log(error)
            util.setError(400, error.message);
            return util.send(res);
        }
    }

    static async updatePost(req, res) {
        console.log('updatePost')
        const {postId} = req.params;
        try {
            const allPosts = await readPostUser();
            let wasUpdate = false;
            allPosts.forEach(post => {
                if (String(post.id) === postId) {
                    wasUpdate = true;
                    post.text = req.body.text;
                }
            });
            if (!wasUpdate) {
                util.setError(404, `Cannot find post with the id: ${postId}`);
            } else {
                await writeFile('../posts.json', allPosts);
                util.setSuccess(200, 'Post updated');
            }
            return util.send(res);
        } catch (error) {
            util.setError(404, error);
            return util.send(res);
        }
    }

    static async getPost(req, res) {
        console.log('getPost')
        const {postId} = req.params;
        try {
            const allPosts = await readPostUser();
            let postById = allPosts.filter(post => post.id === postId);
            if (postById) {
                util.setSuccess(200, 'Posts retrieved', postById);
            } else {
                util.setSuccess(200, 'No post found');
            }
            return util.send(res);
        } catch (error) {
            util.setError(404, error);
            return util.send(res);
        }
    }

    static async deletePost(req, res) {
        console.log('deletePost')
        const {postId} = req.params;
        console.log('postId = ',postId);
        try {
            const allPosts =JSON.parse(await readPostUser());
           let newArrayPosts =  allPosts.filter((post)=>String(post.id)!==String(postId));
            console.log('allPosts after delete =', newArrayPosts)
            let aa =  await writeFilePostUser(newArrayPosts);
            util.setSuccess(201, 'Post Deleted!',aa);
            return util.send(res);
        } catch (error) {
            console.log(error)
            util.setError(400, error.message);
            return util.send(res);
        }
    }
}

module.exports = PostsController;