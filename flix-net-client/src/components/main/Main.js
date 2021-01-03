import React from 'react';

import {Switch, Route} from 'react-router-dom';

import Movies from './mainComponets/movies/Movies';
import TVShows from './mainComponets/tvShows/TvShows';
import Home from './mainComponets/home/Home';
import {Link} from 'react-router-dom';

export default function Main() {
    return (
        <main className='main'>
        <nav className='nav'>
            <Link className='link' to='/Home'>Home</Link>
            <Link className='link' to='/Movies'>Movies</Link>
            <Link className='link' to='/TVShows'>TV Shows</Link>
        </nav>
            <Switch>
                <Route exact path='/Home'>
                    <Home />
                        </Route>
                <Route exact path='/Movies'>
                    <Movies />
                        </Route>
                <Route exact path='/TVShows'>
                    <TVShows />
                        </Route>
            </Switch>
    </main>
    );
}

