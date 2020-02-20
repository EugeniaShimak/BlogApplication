//thunks

import _ from 'lodash';
import * as types from './actionTypes';
import postService from '../../services/post';
// import * as topicsSelectors from '../topics/reducer';

export function fetchPosts() {debugger
    return async(dispatch, getState) => {
        try {debugger
            const postArray = await postService.getAllPosts();
          //  const postsById = _.keyBy(postArray, (post) => post.id);
            dispatch({ type: types.POSTS_FETCHED, allPosts:postArray });
        } catch (error) {
            console.error(error);
        }
    };
}

export function getPostsByUser(userId) {debugger
    return async(dispatch, getState) => {
        try {
            const postArray = await postService.getAllPostsByUser(userId);
           // const postsByUserById = _.keyBy(postArray, (post) => post.id);
            dispatch({ type: types.POSTS_SELECTED_BY_USER, postsByUser:postArray });
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

export function changePost(post) {debugger
    return async(dispatch, getState) => {
        try {
            dispatch({ type: types.CHANGE_POST, post:post });
        } catch (error) {
            console.error(error);
        }
    };
}

export function changeNewPost(post) {debugger
    return async(dispatch, getState) => {
        try {
            dispatch({ type: types.CHANGE_NEW_POST, newPost:post });
        } catch (error) {
            console.error(error);
        }
    };
}

function getAllPostsAndPostsByUser(userId) {
    return async(dispatch, getState) => {
        try {
            dispatch(fetchPosts());
            if (userId) dispatch(getPostsByUser(userId));
        } catch (error) {
            console.error(error);
        }
    };
}

export function savePost(post) {debugger
    return async(dispatch, getState) => {
        try {
            const result = await postService.savePost(post);
            // post.hasOwnProperty('id')?
            // dispatch({ type: types.CHANGE_POST, post:null }):
                dispatch({ type: types.CHANGE_NEW_POST, newPost:null })
            dispatch(getAllPostsAndPostsByUser(post.userId))
        } catch (error) {
            console.error(error);
        }
    };
}


export function deletePost(post) {debugger
    return async(dispatch, getState) => {
        try {
            const result = await postService.deletePost(post.id);
            dispatch(getAllPostsAndPostsByUser(post.userId))
        } catch (error) {
            console.error(error);
        }
    };
}

export function updatePost(post) {debugger
    return async(dispatch, getState) => {
        try {
            if (post){
                const result = await postService.updatePost(post);
            }
            dispatch({ type: types.CHANGE_POST, post:null })
            dispatch(getAllPostsAndPostsByUser(post.userId))
        } catch (error) {
            console.error(error);
        }
    };
}
