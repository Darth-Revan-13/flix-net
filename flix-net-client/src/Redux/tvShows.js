// import redux, {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
import uuid from 'react-uuid';

// ---------------------------------- Setting Initial State For TV Shows
const initialShows = [ 
    {_id: uuid(), showTitle: 'Dexter'},
    {_id: uuid(), showTitle: 'Avatar the Last Airbender'}
]

// ---------------------------------- Adding A TV Show
export const addTvShow =(tvShow) => {
    return (dispatch) => {
        dispatch({type: 'ADD_TV_SHOW', data: tvShow})
    }
}

// ---------------------------------- Removing TV Show
export const removeTvShow = (_id) => {
    return (dispatch) => {
        dispatch({type: 'REMOVE_TV_SHOW', data: _id})
    }
}

// ------------------------------------------------------------------- Setting Initial StateSetting Initial State
export default function tvShowReducer(tvShows = initialShows, action) {
    switch(action.type) {
        case 'ADD_TV_SHOW':
            return [...tvShows, action.data]
            break;
        case 'REMOVE_TV_SHOW':             
            const updatedTvShows = tvShows.filter(tvShow => tvShow._id !== action.data);
            return updatedTvShows
            break;
        case 'GET_ALL_TV_SHOWS': 
            return tvShows;
            break;
        default:
            return tvShows;
    }
}
