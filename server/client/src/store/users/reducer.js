import _ from 'lodash';
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    userList:null,
    user: null,

});

export default function reduce(state = initialState, action = {}) {debugger
    switch (action.type) {
        case types.GET_USER_LIST:
            return state.merge({
                userList: action.userList
            });
        case types.CHANGE_USER:
            return state.merge({
                user: action.user
            });
        default:
            return state;
    }
}

// selectors
export function getUserList(state) {debugger
    return state.users.userList;

}
export function getUser(state) {debugger
    return state.users.user;
}