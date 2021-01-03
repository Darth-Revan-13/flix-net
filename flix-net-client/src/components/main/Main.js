import React from 'react';

import {Switch, Route} from 'react-router-dom';

import Movies from './mainComponets/movies/Movies';
import TVShows from './mainComponets/tvShows/TvShows';

export default function Main() {
    return (
        <main>
            <h3>single page website main content</h3>
            <Movies />
            <TVShows />
        </main>
    );
}

{/* <Switch>
<Route exact path='/Home'>
    <Home />
        </Route>
<Route exact path='/Service'>
    <Service />
        </Route>
<Route exact path='/About'>
    <About />
        </Route>
</Switch> */}