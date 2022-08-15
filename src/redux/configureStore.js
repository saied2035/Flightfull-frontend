import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reservationsReducer from './Reservations/Reservations';
import flightsReducer from './flights/flights';
import authReducer from './auth/auth';

const rootReducer = combineReducers({
  flightsReducer, authReducer, reservationsReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
