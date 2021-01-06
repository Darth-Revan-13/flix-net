import React, {useState} from 'react';
import uuid from 'react-uuid';

import './form.css';

import {useDispatch} from 'react-redux';
import { addMovie } from '../../../../../Redux/movies';

export default function Form() {
    const dispatch = useDispatch(addMovie());
    const formInput = [ {_id: uuid(), movieTitle: ''} ];

    const [inputs, setInput] = useState(formInput);
    
    const handleChange = (e) => {
    const {name, value} = e.target;
    setInput(prevInput => ({...prevInput, [name]: value}));
}

const formSubmit = (e) => {
    e.preventDefault();
    dispatch(addMovie(inputs));
    setInput(formInput);
}
    return (
        <form onSubmit={formSubmit}>
            <input name='movieTitle' type='text' value={inputs.movieTitle} onChange={handleChange} placeholder='Movie Title' required />
            <button>Add A New Movie</button>
        </form>
    );
}


