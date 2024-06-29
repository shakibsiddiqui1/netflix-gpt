import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const moviesSlice = createSlice({
    name : 'movies',
    initialState : {
        nowPlayingMovies : null,
        topRatedMovies : null,
        popularTvSeries : null,
        animeShows : null,
        upcomingMovies : null,
        trailerVideoKey : null,
        movieDetails : null,
        showMovie : false,
        movieKeyword : null,
        recommendMovies : null,
        moviesTrailers : null
    },
    reducers : {
        addNowPlayingMovies : (state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideoKey : (state,action)=>{
            state.trailerVideoKey = action.payload
        },
        addTopRatedMovies : (state,action)=>{
            state.topRatedMovies = action.payload
        },
        addPopularTvSeries : (state,action)=>{
            state.popularTvSeries = action.payload
        },
        addAnimeShows : (state,action)=>{
            state.animeShows = action.payload
        },
        addUpcomingMovies : (state,action)=>{
            state.upcomingMovies = action.payload
        },
        addMovieDetails : (state,action)=>{
            state.movieDetails = action.payload
        },
        checkShowMovie : (state)=>{
            state.showMovie = !state.showMovie
        },
        addMovieKeyword : (state,action)=>{
            state.movieKeyword = action.payload
        },
        addRecommendMovies : (state,action)=>{
            state.recommendMovies = action.payload
        },
        addMoviesTrailers : (state,action)=>{
            state.moviesTrailers = action.payload
        }
    }
})

export const {addNowPlayingMovies,addTrailerVideoKey,addTopRatedMovies,addPopularTvSeries,addAnimeShows, addUpcomingMovies,addMovieDetails,checkShowMovie,addMovieKeyword,addRecommendMovies,addMoviesTrailers} = moviesSlice.actions
export default moviesSlice.reducer