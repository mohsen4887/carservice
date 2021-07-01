import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import reducers from '../reducers';
const persistConfig = {
  key: 'root',
  timeout: 10000,
  storage: AsyncStorage,
  blacklist: ['init'],
};
const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(logger));
const persistedStore = persistStore(store);

export {store, persistedStore};
