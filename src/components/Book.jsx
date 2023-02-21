import React from 'react'
import style from '../css/book.module.css'
import { sliceAuthorsArray } from '../helpers/sliceAuthorsArray';
import { trimBookTitile } from '../helpers/trimBookTitle';

function Book({book}) {
  return (
    <div className={style.book}>
        <p>{trimBookTitile(book.volumeInfo.title)}</p>
        <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://placehold.co/128x166?text=no+image'} alt="Обложка" className={style.img}/>
        <p>{book.volumeInfo.authors ? sliceAuthorsArray(book.volumeInfo.authors) : 'Автор не найден'}</p>
    </div>
  )
}

export default Book;