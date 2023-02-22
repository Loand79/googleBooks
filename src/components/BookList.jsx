import React from 'react'
import Book from './Book';
import { googleBooksAPI } from '../services/googleBooksAPI';
import {useSelector} from "react-redux";


function BookList() {
const query = useSelector(state => state.bookSlice.query)
const {data, isLoading} = googleBooksAPI.useGetGoogleBooksQuery(query)

  return (
    <div className='book_list'>
        {isLoading
        ?
        <h1>Loading data...</h1>
        :
        data?.items.map(book => <Book book={book} key={book.id}/> )
        }
    </div>
  )
}

export default BookList;