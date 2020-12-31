export function addTVShow (tvShow) {
    return {
        type: "ADD_TVSHOW",
        payload: movie
    }
}

export function removeTVShow (id) {
    return {
        type: "REMOVE_TVSHOW",
        payload: id
    }
}

export function getTVShow (state) {
    return{
        type: "GET_TVSHOW",
        payload: state
    }
}


const tvShowState = {tvShows: []}

function tvShowsReducer(state = tvShowState, action) {
    switch(action.type) {
        case "ADD_TVSHOW":
            return{
                ...state, tvShows: state.tvShows.concat(
                    action.payload
                ),
            }
        case "REMOVE_TVSHOW":
            state.tvShows.splice(action.payload, 1)
            return {
                tvShows: state.tvShows
            }
        case "GET_TVSHOW":
            return {
                tvShows: state.tvShows
            }
        default:
            return state
    }
}

module.exports = tvShowsReducer