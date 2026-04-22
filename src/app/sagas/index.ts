import { all, fork } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { userLogin, userRegister } from './auth';

export default function* rootSaga(): SagaIterator {
  yield all([
    fork(userLogin),
    fork(userRegister)
  ]);
}