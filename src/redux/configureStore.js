import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({/* put any reducers here spreated by comma */});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
