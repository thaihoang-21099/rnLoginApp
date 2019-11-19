import userActionTypes from './user.action.type';
import { ActionSheet } from 'native-base';

const INITIAL_STATE = {
    user: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.SET_USER:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state
    }
}

export default userReducer;