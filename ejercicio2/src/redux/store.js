import { createStore, combineReducers } from 'redux'
import results from './reducers/results'
import currentItem from './reducers/currentitem'
import suggestions from './reducers/suggestions'

const reducer = combineReducers({
    results,
    currentItem,
    suggestions
});

const store = createStore(reducer);

export default store;