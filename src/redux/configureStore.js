import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './users/users';
import flightsReducers from './flights/flights';

const rootReducer = combineReducers({ usersReducer, flightsReducers });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
