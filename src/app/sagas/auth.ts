import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import { authLogin, authRegister } from '../api/auth';
import { AuthResponse } from '../constants/user';

import {
  USER_LOGIN,
  USER_LOGIN_REQUEST,
  USER_LOGIN_COMPLETED,
  USER_LOGIN_ERROR,
  USER_REGISTER,
  USER_REGISTER_REQUEST,
  USER_REGISTER_COMPLETED,
  USER_REGISTER_ERROR,
} from '../actions';

export function* userLoginAsync({
  payload: creds,
}: {
  type: typeof USER_LOGIN;
  payload: { username: string; password: string };
}): SagaIterator {
  yield put({ type: USER_LOGIN_REQUEST });
  try {
    const response: AuthResponse = yield call(authLogin, creds);
    yield put({ type: USER_LOGIN_COMPLETED, payload: response });
  } catch (error: any) {
    yield put({ type: USER_LOGIN_ERROR, payload: error.message });
  }
}

export function* userRegisterAsync({
  payload: data,
}: {
  type: typeof USER_REGISTER;
  payload: { username: string; email: string; password: string };
}): SagaIterator {
  yield put({ type: USER_REGISTER_REQUEST });
  try {
    const response: AuthResponse = yield call(authRegister, data);
    yield put({ type: USER_REGISTER_COMPLETED, payload: response });
  } catch (error: any) {
    yield put({ type: USER_REGISTER_ERROR, payload: error.message });
  }
}

export function* userLogin(): SagaIterator {
  yield takeEvery(USER_LOGIN_REQUEST, userLoginAsync);
}

export function* userRegister(): SagaIterator {
  yield takeEvery(USER_REGISTER_REQUEST, userRegisterAsync);
}