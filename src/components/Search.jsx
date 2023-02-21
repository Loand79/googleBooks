import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setSearchQuery} from "../slices/bookSlice";
import {googleBooksAPI} from "../services/googleBooksAPI";

const Search = () => {
    const [query, setQuery] = useState('')
    const dispatch = useDispatch()

    const handleChange = (e) => {
        let value = e.target.value
        setQuery(value)
    }
    const handleClick = () => {
      dispatch(setSearchQuery(query))
    }

    return (
        <div className="search">
            <label htmlFor="input">Поиск книги</label>
            <input type="text" name='input' value={query} onChange={handleChange}/>
            <button type="submit" onClick={handleClick}>Поиск</button>
            <button onClick={() => console.log('book')}>debug</button>
        </div>
    );
};

export default Search;