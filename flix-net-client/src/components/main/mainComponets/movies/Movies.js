import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import _ from '../../../../../node_modules/lodash';

export default function Movies() {
    const initialState = useSelector(movies => movies.moviesReducer)
    console.log(initialState);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Favorite Movies</th>
                    </tr>
                </thead>
                <tbody>
                    {_.map(initialState, (movie) => (
                        <tr id={movie._id} className='movie-container'>
                            <td>{movie.movieTitle}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


