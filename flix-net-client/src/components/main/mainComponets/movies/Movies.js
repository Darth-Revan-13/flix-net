import React from 'react';
import {useSelector} from 'react-redux';

import _ from '../../../../../node_modules/lodash';

import './movies.css';

export default function Movies() {
    const initialState = useSelector(movies => movies.moviesReducer);
    console.log(initialState);
    return (
        <div className='movie-container'>
            <table>
                <thead>
                    <tr>
                        <th>Favorite Movies</th>
                    </tr>
                </thead>
                <tbody>
                    {_.map(initialState, (movie) => (
                        <tr id={movie._id} className='tr-container'>
                            <td>{movie.movieTitle}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


