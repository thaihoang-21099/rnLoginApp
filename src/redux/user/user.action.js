import userActionTypes from './user.action.type';

export const setUser = (data)=>({
    type:userActionTypes.SET_USER,
    payload:data
})