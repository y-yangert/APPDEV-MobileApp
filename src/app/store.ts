// app/store.ts

import { Store, Dispatch } from 'redux';
import { Persistor } from 'redux-persist';
import { RootState } from './reducers';

export type RootState = RootState;
export type AppDispatch = Dispatch<any>; // or be more specific later

export { configureStore } from './reducers';
export interface StoreSetup {
  store: Store<RootState>;
  persistor: Persistor;
  runSaga: (saga: any) => void;
}