import React from 'react';
import './App.css';
import { googleBooksAPI } from './services/googleBooksAPI';

function App() {

  const {data, isLoading, isSuccess} = googleBooksAPI.useGetGoogleBooksQuery('Негры')


  return (
    <div>
      {isLoading
          ?
          <h1>Загрузка</h1>
          :
          <div>
            {data.items.map(item =>
              <p key={item.id}>{item.volumeInfo.title}</p>
            )}
          </div>
      }
    </div>
  );
}

export default App;
