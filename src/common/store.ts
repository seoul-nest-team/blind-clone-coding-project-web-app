import { createStore, combineReducers } from 'redux';
import appbarReducer from '../appbar/state';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
    appbar: appbarReducer,
});
const store = createStore(reducer, composeWithDevTools());

export default store;
