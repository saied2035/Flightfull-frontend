import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reservationsReducer from './Reservations/Reservations';

const rootReducer = combineReducers({ reservationsReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
