const fs = require('fs');
let Utils = require('../utils/Utils');
const util = new Utils();

class PostsController {
    static async getAllPosts(req, res) {
        try {
            const allPosts = await fs.readFile('../posts.json');
            if (allPosts.length > 0) {
                util.setSuccess(200, 'Posts retrieved', allPosts);
            } else {
                util.setSuccess(200, 'No post found');
            }
            return util.send(res);
        } catch (error) {
            util.setError(400, error);
            return util.send(res);
        }
    }

    static async getAllPostsByUser(req, res) {
        try {
            const allPosts = await fs.readFile('../posts.json');
            let postsByUserId = allPosts.filter(post => post.userId === req.params.userId);
            console.log(postsByUserId, postsByUserId);
            if (postsByUserId.length > 0) {
                util.setSuccess(200, 'Posts retrieved', postsByUserId);
            } else {
                util.setSuccess(200, 'No post found');
            }
            return util.send(res);
        } catch (error) {
            util.setError(400, error);
            return util.send(res);
        }
    }

    static async addPost(req, res) {
        if (!req.body.text || !req.body.userId) {
            util.setError(400, 'Please provide complete details');
            return util.send(res);
        }
        let newPost = req.body;
        newPost.id =String(Math.random()) ;

        try {
            const allPosts = await fs.readFile('../posts.json');
            allPosts.push(newPost);
            await fs.writeFile('../posts.json',allPosts);
            util.setSuccess(201, 'Post Added!',);
            return util.send(res);
        } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
        }
    }

    static async updatePost(req, res) {
        const { postId } = req.params;
        try {
            const allPosts = await fs.readFile('../posts.json');
            let wasUpdate = false;
            allPosts.forEach(post=>{
                if (post.id===postId){
                    wasUpdate = true;
                    post.text = req.body.text;
                }
            });
            if (!wasUpdate) {
                util.setError(404, `Cannot find post with the id: ${postId}`);
            } else {
                await fs.writeFile('../posts.json',allPosts);
                util.setSuccess(200, 'Post updated');
            }
            return util.send(res);
        } catch (error) {
            util.setError(404, error);
            return util.send(res);
        }
    }

    static async getPost(req, res) {
        const { postId } = req.params;
        try {
            const allPosts = await fs.readFile('../posts.json');
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
        const { postId } = req.params;

        try {
            const postToDelete = await BookService.deleteBook(id);
            const allPosts = await fs.readFile('../posts.json');
            let indexPostForDelete;
            allPosts.forEach((post, index) =>{
                if (post.id ===postId){
                    indexPostForDelete = index;
                }
            });

            if (indexPostForDelete) {
                allPosts.slice(indexPostForDelete,1);
                await fs.writeFile('../posts.json',allPosts);
                util.setSuccess(200, 'Post deleted');
            } else {
                util.setError(404, `Post with the id ${id} cannot be found`);
            }
            return util.send(res);
        } catch (error) {
            util.setError(400, error);
            return util.send(res);
        }
    }
}

module.exports = PostsController;