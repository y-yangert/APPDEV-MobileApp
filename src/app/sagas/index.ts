import { all, fork } from 'redux-saga/effects';
import { userLogin, userRegister, userLogout } from './auth';

export default function* rootSaga() {
  yield all([fork(userLogin), fork(userRegister), fork(userLogout)]);
}