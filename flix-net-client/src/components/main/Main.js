import React from 'react';

import {Switch, Route} from 'react-router-dom';

import Movies from './mainComponets/movies/Movies';
import TVShows from './mainComponets/tvShows/TvShows';
import Home from './mainComponets/home/Home';


export default function Main() {
    return (
        <main className='main'> 
            <Switch>
                <Route exact path={['/', '/Home']} component={Home} />
                <Route exact path='/Movies' component={Movies} />
                <Route exact path='/TVShows' component={TVShows} />
            </Switch>
    </main>
    );
}

