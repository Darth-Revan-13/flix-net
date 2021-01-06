import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { removeMovie } from '../../../../Redux/movies';

import _ from '../../../../../node_modules/lodash';

import MovieForm from './movieForm/MovieForm';

import './movies.css';

export default function Movies() {
    const initialState = useSelector(movies => movies.moviesReducer);
    const dispatch = useDispatch();
    
    return (
        <div className='movies'>
            <div className='form-container'>
                <MovieForm />
            </div>
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
                                <button onClick={() => dispatch(removeMovie(movie._id))}>X</button>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


