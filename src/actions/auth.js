import { ACTION_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from './index';

import { userRegister } from '../requests/authService';

export const userRegisterAction = (user) => (dispatch) => {
    dispatch({ type: ACTION_REQUEST });

    return userRegister(user).then(res => {
        dispatch({ type: REGISTER_SUCCESS, payload: res.data.ok });
    }).catch(error => {
        dispatch({ type: REGISTER_FAILURE, error })
    });
};