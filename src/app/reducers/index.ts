import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { persistReducer, persistStore, Persistor } from 'redux-persist';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';

import authReducer, { AuthState } from './auth';

export interface RootState {
  auth: AuthState;
}

const sagaMiddleware: SagaMiddleware<any> = createSagaMiddleware();

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['auth'],
};

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  blacklist: [],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export default function configureStore() {
  const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware),
  );

  const persistor = persistStore(store);
  const runSaga = sagaMiddleware.run;

  return { store, persistor, runSaga };
}