import configureStore from './reducers';

import rootSaga from './sagas';

const { store, persistor, runSaga } = configureStore();

runSaga(rootSaga);

export { store, persistor };