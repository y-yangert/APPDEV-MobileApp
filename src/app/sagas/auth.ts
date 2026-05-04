import { call, put, takeEvery } from 'redux-saga/effects';
import { authLogin, authRegister } from '../api/auth';

import {
  USER_LOGIN,
  USER_LOGIN_REQUEST,
  USER_LOGIN_COMPLETED,
  USER_LOGIN_ERROR,
  USER_LOGOUT,
  USER_LOGOUT_COMPLETED,

  USER_REGISTER,
  USER_REGISTER_REQUEST,
  USER_REGISTER_COMPLETED,
  USER_REGISTER_ERROR,
} from '../actions/auth';

export function* userLoginAsync(action) {
  yield put({ type: USER_LOGIN_REQUEST });
  try {
    const response = yield call(authLogin, action.payload);

    yield put({ type: USER_LOGIN_COMPLETED, payload: response });
  } catch (error) {
    yield put({ type: USER_LOGIN_ERROR, payload: error.message });
  }
}

export function* userLogoutAsync() {
  yield put({ type: USER_LOGOUT_COMPLETED });
}

export function* userRegisterAsync(action) {
  yield put({ type: USER_REGISTER_REQUEST });

  try {
    const response = yield call(authRegister, action.payload);
    yield put({ type: USER_REGISTER_COMPLETED, payload: response });
  } catch (error) {
    yield put({ type: USER_REGISTER_ERROR, payload: error.message });
  }
}

export function* userLogin() {
  yield takeEvery(USER_LOGIN, userLoginAsync);
}

export function* userLogout() {
  yield takeEvery(USER_LOGOUT, userLogoutAsync);
}

export function* userRegister() {
  yield takeEvery(USER_REGISTER, userRegisterAsync);
}