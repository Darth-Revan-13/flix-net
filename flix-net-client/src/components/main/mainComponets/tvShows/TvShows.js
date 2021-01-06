import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeTvShow} from '../../../../Redux/tvShows';

import _ from '../../../../../node_modules/lodash';

import TVShowForm from './tvForm/TVShowForm';

import './tvShows.css';

export default function TVShows() {
    const initialState = useSelector(tvShows => tvShows.tvShowsReducer);
    const dispatch = useDispatch();
    
    return (
        <div className='movies'>
            <div className='form-container'>
                <TVShowForm />
            </div>
            <div className='movie-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Favorite Movies</th>
                        </tr>
                    </thead>
                    <tbody>
                        {_.map(initialState, (show) => (
                            <tr id={show._id} className='tr-container'>
                                <td>{show.showTitle}</td>
                                <button onClick={() => dispatch(removeTvShow(show._id))}>X</button>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}