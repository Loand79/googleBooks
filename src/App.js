import React from 'react';
import './App.css';
import { googleBooksAPI } from './services/googleBooksAPI';

function App() {

  const kek = googleBooksAPI.useGetGoogleBooksQuery('Негры')
  console.log(kek);

  return (
    <div>

    </div>
  );
}

export default App;
