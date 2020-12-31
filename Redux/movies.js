export function addMovie (movie) {
    return {
        type: "ADD_MOVIE",
        payload: movie
    }
}

export function removeMovie (id) {
    return {
        type: "REMOVE_MOVIE",
        payload: id
    }
}

export function getMovie (state) {
    return{
        type: "GET_MOVIE",
        payload: state
    }
}


const movieState = {movies: []}

function movieReducer(state = movieState, action) {
    switch(action.type) {
        case "ADD_MOVIE":
            return{
                ...state, movies: state.movies.concat(
                    action.payload
                ),
            }
        case "REMOVE_MOVIE":
            state.movies.splice(action.payload, 1)
            return {
                movies: state.movies
            }
        case "GET_MOVIE":
            return {
                movies: state.movies
            }
        default:
            return state
    }
}

module.exports = movieReducer