import { combineReducers } from '@reduxjs/toolkit';
import badge from './slice/badgeSlise';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  badge,
});
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};
export const persistedReducer = persistReducer(persistConfig, rootReducer);
