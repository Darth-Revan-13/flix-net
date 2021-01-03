import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <nav className='nav'>
            <Link className='link' to='/Home'>Home</Link>
            <Link className='link' to='/Movies'>Movies</Link>
            <Link className='link' to='/TVShows'>TV Shows</Link>
        </nav>
    );
}
