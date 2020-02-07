import _ from 'lodash';
const url = '/posts';
class PostService {

    async getAllPosts() {debugger
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`PostService getAllPosts failed, HTTP status ${response.status}`);
        }
        const data = await response.json();
        return data;
    }

    async getAllPostsByUser(userId) {debugger
        const response = await fetch(url+'/'+userId, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`PostService getAllPostsByUser failed, HTTP status ${response.status}`);
        }
        const data = await response.json();
        return data;
    }
    // async getPost() {debugger
    //     const url = `${REDDIT_ENDPOINT}${subredditUrl}hot.json`;
    //     const response = await fetch(url, {
    //         method: 'GET',
    //         headers: {
    //             Accept: 'application/json'
    //         }
    //     });
    //     if (!response.ok) {
    //         throw new Error(`RedditService getPostsFromSubreddit failed, HTTP status ${response.status}`);
    //     }
    //     const data = await response.json();
    //     const children = _.get(data, 'data.children');
    //     if (!children) {
    //         throw new Error(`RedditService getPostsFromSubreddit failed, children not returned`);
    //     }
    //     return _.map(children, (post) => {
    //         // abstract away the specifics of the reddit API response and take only the fields we care about
    //         const body = _.get(post, 'data.selftext');
    //         return {
    //             id: _.get(post, 'data.id'),
    //             title: _.get(post, 'data.title'),
    //             topicUrl: subredditUrl,
    //             body: body,
    //             thumbnail: this._validateUrl(_.get(post, 'data.thumbnail')),
    //             url: !body ? this._validateUrl(_.get(post, 'data.url')) : undefined
    //         }
    //     });
    // }
    // async addPost(newPost) {debugger
    //     const url = `${REDDIT_ENDPOINT}${subredditUrl}hot.json`;
    //     const response = await fetch(url, {
    //         method: 'GET',
    //         headers: {
    //             Accept: 'application/json'
    //         }
    //     });
    //     if (!response.ok) {
    //         throw new Error(`RedditService getPostsFromSubreddit failed, HTTP status ${response.status}`);
    //     }
    //     const data = await response.json();
    //     const children = _.get(data, 'data.children');
    //     if (!children) {
    //         throw new Error(`RedditService getPostsFromSubreddit failed, children not returned`);
    //     }
    //     return _.map(children, (post) => {
    //         // abstract away the specifics of the reddit API response and take only the fields we care about
    //         const body = _.get(post, 'data.selftext');
    //         return {
    //             id: _.get(post, 'data.id'),
    //             title: _.get(post, 'data.title'),
    //             topicUrl: subredditUrl,
    //             body: body,
    //             thumbnail: this._validateUrl(_.get(post, 'data.thumbnail')),
    //             url: !body ? this._validateUrl(_.get(post, 'data.url')) : undefined
    //         }
    //     });
    // }
    // async updatePost(postId) {debugger
    //     const url = `${REDDIT_ENDPOINT}${subredditUrl}hot.json`;
    //     const response = await fetch(url, {
    //         method: 'GET',
    //         headers: {
    //             Accept: 'application/json'
    //         }
    //     });
    //     if (!response.ok) {
    //         throw new Error(`RedditService getPostsFromSubreddit failed, HTTP status ${response.status}`);
    //     }
    //     const data = await response.json();
    //     const children = _.get(data, 'data.children');
    //     if (!children) {
    //         throw new Error(`RedditService getPostsFromSubreddit failed, children not returned`);
    //     }
    //     return _.map(children, (post) => {
    //         // abstract away the specifics of the reddit API response and take only the fields we care about
    //         const body = _.get(post, 'data.selftext');
    //         return {
    //             id: _.get(post, 'data.id'),
    //             title: _.get(post, 'data.title'),
    //             topicUrl: subredditUrl,
    //             body: body,
    //             thumbnail: this._validateUrl(_.get(post, 'data.thumbnail')),
    //             url: !body ? this._validateUrl(_.get(post, 'data.url')) : undefined
    //         }
    //     });
    // }
    // async deletePost(postId) {debugger
    //     const url = `${REDDIT_ENDPOINT}${subredditUrl}hot.json`;
    //     const response = await fetch(url, {
    //         method: 'GET',
    //         headers: {
    //             Accept: 'application/json'
    //         }
    //     });
    //     if (!response.ok) {
    //         throw new Error(`RedditService getPostsFromSubreddit failed, HTTP status ${response.status}`);
    //     }
    //     const data = await response.json();
    //     const children = _.get(data, 'data.children');
    //     if (!children) {
    //         throw new Error(`RedditService getPostsFromSubreddit failed, children not returned`);
    //     }
    //     return _.map(children, (post) => {
    //         // abstract away the specifics of the reddit API response and take only the fields we care about
    //         const body = _.get(post, 'data.selftext');
    //         return {
    //             id: _.get(post, 'data.id'),
    //             title: _.get(post, 'data.title'),
    //             topicUrl: subredditUrl,
    //             body: body,
    //             thumbnail: this._validateUrl(_.get(post, 'data.thumbnail')),
    //             url: !body ? this._validateUrl(_.get(post, 'data.url')) : undefined
    //         }
    //     });
    // }
}

export default new PostService();