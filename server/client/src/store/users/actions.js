//thunks

import _ from 'lodash';
import * as types from './actionTypes';
import userService from '../../services/user';
// import * as topicsSelectors from '../topics/reducer';

export function getUserList() {debugger
    return async(dispatch, getState) => {
        try {debugger
            const userList = await userService.getUserList();
            dispatch({ type: types.GET_USER_LIST, userList:userList });
        } catch (error) {
            console.error(error);
        }
    };
}

export function getUser(userId) {debugger
    return async(dispatch, getState) => {
        try {
            const user = await userService.getUser(userId);
            dispatch({ type: types.CHANGE_USER, user:user });
        } catch (error) {
            console.error(error);
        }
    };
}

export function deleteUser(userId) {debugger
    return async(dispatch, getState) => {
        try {
            const result = await userService.deleteUser(userId);
            dispatch({ type: types.CHANGE_USER, user:null });
        } catch (error) {
            console.error(error);
        }
    };
}

export function addUser(user) {debugger
    return async(dispatch, getState) => {
        try {
            const user = await userService.addUser(user);
            dispatch({ type: types.CHANGE_USER, user:user });
        } catch (error) {
            console.error(error);
        }
    };
}

export function updateUser(user) {debugger
    return async(dispatch, getState) => {
        try {
            if (user){
                const result = await userService.updateUser(user);
            }
            dispatch({ type: types.CHANGE_USER, user:user });
        } catch (error) {
            console.error(error);
        }
    };
}

