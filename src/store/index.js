import {  createStore, compose, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

import { state } from '../reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, state)

export const store  = createStore(
  persistedReducer,
  compose(
    applyMiddleware(reduxThunk),
))

