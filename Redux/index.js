const redux = require("redux")
const {combineReducers, createStore} = redux
import moviesReducer from "./movies"
import tvShowsReducer from "./tvShows"

const rootRecuder = combineReducers({
    movies: moviesReducer,
    tvShows: tvShowsReducer
})

const store = createStore(rootRecuder)
store.subscribe(() => {
    console.log(store.getState())
})
export default store