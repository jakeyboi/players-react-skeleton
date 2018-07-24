import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import reduxThunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from '../reducers'; // the value from combineReducers

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['playerAdded'],
};

const pReducer = persistReducer(persistConfig, rootReducer);


export const store = createStore(pReducer, {}, applyMiddleware(reduxThunk));
// export const store = createStore(pReducer);
export const persistor = persistStore(store);
