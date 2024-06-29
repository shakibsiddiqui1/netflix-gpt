import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : 'gpt',
    initialState : {
        gptSearchView : false,
        gptMovies : null,
        gptMoviesNames : null,
    },
    reducers : {
        toggleGPTSearchView : (state)=>{
            state.gptSearchView = !state.gptSearchView
        },
        addGPTMoviesAndNames : (state,action)=>{
            const {moviesNames,tmdbResults} = action.payload
            state.gptMoviesNames = moviesNames
            state.gptMovies = tmdbResults
        }
    }
})
export const {toggleGPTSearchView,addGPTMoviesAndNames} = gptSlice.actions
export default gptSlice.reducer