//thunks

import _ from 'lodash';
import * as types from './actionTypes';
import postService from '../../services/post';
// import * as topicsSelectors from '../topics/reducer';

export function fetchPosts() {debugger
    return async(dispatch, getState) => {
        try {
            const postArray = await postService.getAllPosts();
            const postsById = _.keyBy(postArray, (post) => post.id);
            dispatch({ type: types.POSTS_FETCHED, postsById });
        } catch (error) {
            console.error(error);
        }
    };
}

export function getPostsByUser(userId) {debugger
    return async(dispatch, getState) => {
        try {
            const postArray = await postService.getAllPostsByUser(userId);
            const postsByUserById = _.keyBy(postArray, (post) => post.id);
            dispatch({ type: types.POSTS_SELECTED_BY_USER, postsByUserById });
        } catch (error) {
            console.error(error);
        }
    };
}

export function changeShowPostsByUser(showPostsByUser) {debugger
    return async(dispatch, getState) => {
            dispatch({ type: types.SHOW_POSTS_BY_USER, showPostsByUser:showPostsByUser });

    };
}
