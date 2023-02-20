import React from 'react'

function Book({book}) {
  return (
    <div className='book'>
        <p>{book.volumeInfo.title}</p>
        <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://placehold.co/128x166?text=no+image'} alt="Обложка"/>
        <p>{book.volumeInfo.authors}</p>
    </div>
  )
}

export default Book;