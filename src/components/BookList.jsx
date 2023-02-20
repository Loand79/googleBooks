import React from 'react'
import Book from './Book';
import { googleBooksAPI } from '../services/googleBooksAPI';

function BookList() {

const {data, isLoading} = googleBooksAPI.useGetGoogleBooksQuery('Metro 2033')
console.log(data);
  return (
    <div className='book_list'>
        {isLoading
        ?
        <h1>Loading data...</h1>
        :
        data.items.map(book => <Book book={book} key={book.id}/> )
        }
    </div>
  )
}

export default BookList;