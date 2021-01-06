import React, {useState} from 'react';
import uuid from 'react-uuid';

import './tvForm.css';

import {useDispatch} from 'react-redux';
import {addTvShow} from '../../../../../Redux/tvShows';

export default function Form() {
    const dispatch = useDispatch(addTvShow());
    const formInput = [ {_id: uuid(), movieTitle: ''} ];

    const [inputs, setInput] = useState(formInput);
    
    const handleChange = (e) => {
    const {name, value} = e.target;
    setInput(prevInput => ({...prevInput, [name]: value}));
}

const formSubmit = (e) => {
    e.preventDefault();
    dispatch(addTvShow(inputs));
    setInput(formInput);
}
    return (
        <form onSubmit={formSubmit}>
            <input name='showTitle' type='text' value={inputs.ShowTitle} onChange={handleChange} placeholder='Show Title' required />
            <button>Add A New Movie</button>
        </form>
    );
}