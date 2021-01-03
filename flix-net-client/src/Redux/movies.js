// import redux, {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
import uuid from 'react-uuid';

// ---------------------------------- Setting Initial State For Movies
const initialMovies = [
    {_id: uuid(), movieTitle: 'Seven Pounds'},
    {_id: uuid(), movieTitle: 'Fast and Furious'}
]

// ---------------------------------- Adding A Movie  
export const addMovie = (movie) => {
    return (dispatch) => {
        dispatch({type: 'ADD_MOVIE', data: movie});
    }
}

// ---------------------------------- Removing Movie
export const removeMovie = (_id) => {
    return (dispatch) => {
        dispatch({type: 'REMOVE_MOVIE', data: _id});
    }
}

// ---------------------------------- Getting All Movies
export const getAllMovies = () => {
    return {
        type: 'GET_ALL_MOVIES'
    }
}

// ---------------------------------------------------------------------- Movie Reducer
export default function moviesReducer(movies = initialMovies, action) {
    switch(action.type) {
        case 'ADD_MOVIE':
            return [...movies, action.data]
            break;
        case 'REMOVE_MOVIE':             
            const updatedArr = movies.filter(movie => movie._id !== action.data);
            return updatedArr;
            break;
        case 'GET_ALL_MOVIES':
            return movies;
            break;
        default:
            return movies;
    }
}
