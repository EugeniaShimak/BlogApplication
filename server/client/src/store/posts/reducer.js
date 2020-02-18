import _ from 'lodash';
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    allPosts:null,
    allPostsByUser: null,
    showPostsByUser:false,
    post:null,
    newPost:null
    // postById:undefined,
});

export default function reduce(state = initialState, action = {}) {debugger
    switch (action.type) {
        case types.POSTS_FETCHED:
            return state.merge({
                allPosts: action.allPosts
            });
        case types.POSTS_SELECTED_BY_USER:
            return state.merge({
                allPostsByUser: action.postsByUser
            });
        case types.SHOW_POSTS_BY_USER:
            return state.merge({
                showPostsByUser: action.showPostsByUser
            });
        case types.CHANGE_POST:
            return state.merge({
                post: action.post
            });
        case types.CHANGE_NEW_POST:
                return state.merge({
                    newPost: action.newPost
                });
        // case types.POST_SELECTED:
        //     return state.merge({
        //         postById: action.postById
        //     });
        default:
            return state;
    }
}

// selectors
export function getAllPosts(state) {debugger
    return state.posts.allPosts;

}
export function allPostsByUser(state) {debugger
    return state.posts.allPostsByUser;
}

export function showPostsByUser(state) {debugger
    return state.posts.showPostsByUser;
}
export function getPost(state) {debugger
    return state.posts.post;
}
export function getNewPost(state) {debugger
    return state.posts.newPost;
}


//
// export function getAllPosts(state) {debugger
//     return state.allPosts;
// }
//
// export function getPostById(state) {debugger
//    return state.postById;
// }