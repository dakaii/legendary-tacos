import * as types from './Types';

export const requestLogin = (params) => ({
    type: types.LOGIN_REQUESTED,
    params,
});

export const requestSignup = (params) => ({
    type: types.SIGNUP_REQUESTED,
    params,
});
