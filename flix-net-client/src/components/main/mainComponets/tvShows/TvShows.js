import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import _ from '../../../../../node_modules/lodash';

export default function TVShows() {
    const initialState = useSelector(tvShows => tvShows.tvShowsReducer)
    console.log(initialState);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Favorite TV Shows</th>
                    </tr>
                </thead>
                <tbody>
                    {_.map(initialState, (show) => (
                        <tr id={show._id} className='show-container'>
                            <td>{show.showTitle}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}