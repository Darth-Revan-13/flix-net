import React from 'react';

import {Switch, Route} from 'react-router-dom';

import Movies from './mainComponets/movies/Movies';
import TVShows from './mainComponets/tvShows/TvShows';
import {Link} from 'react-router-dom';

export default function Main() {
    return (
        <main className='main'>
            <Switch>
                {/* <Route exact path='/Home'>
                    <Home />
                        </Route> */}
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

