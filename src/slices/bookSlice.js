import {createSlice} from "@reduxjs/toolkit";


export const bookSlice = createSlice({
    name: 'bookSlice',
    initialState: {
        books: [],
        query: ''
    },
    reducers: {
         setSearchQuery: {
             reducer: (state, action) => {
                 state.query = action.payload
             }
         }
    }
})

export const {setSearchQuery} = bookSlice.actions
export default bookSlice.reducer