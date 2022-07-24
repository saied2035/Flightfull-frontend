import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './users/users';
import flightsReducer from './flights/flights';
import authReducer from './auth/auth';

const rootReducer = combineReducers({ usersReducer, flightsReducer, authReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
