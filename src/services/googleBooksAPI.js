import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const googleBooksAPI = createApi({
    reducerPath: 'googleBooksAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://www.googleapis.com/books/v1/'}),
    endpoints: (build) => ({
        getGoogleBooks: build.query({
            query: (name) => `volumes?q=${name}`
        })
    })
})