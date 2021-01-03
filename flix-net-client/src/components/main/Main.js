import React from 'react';

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

