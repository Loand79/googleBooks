import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {setSearchQuery} from "../slices/bookSlice";

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
        </div>
    );
};

export default Search;