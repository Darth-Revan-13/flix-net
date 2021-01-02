import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import moviesReducer from './movies';
import tvShowsReducer from './tvShows';

const rootReducer = combineReducers({
    moviesReducer,
    tvShowsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));

// ------------------------------------- Exporting Store
export default store;
