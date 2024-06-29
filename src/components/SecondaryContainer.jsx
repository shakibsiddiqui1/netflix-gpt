import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  return (
    <div className='bg-black text-white text-lg font-semibold px-5 pt-4 md:pt-0'>
      <MovieList moviesList={movies.nowPlayingMovies} title={"Now Playing Movies"}/>
      <MovieList moviesList={movies.topRatedMovies} title={"Top Rated Movies"}/>
      <MovieList moviesList={movies.popularTvSeries} title={"Popular TV Shows"}/>
      <MovieList moviesList={movies.animeShows} title={"Trending Animes"}/>
      <MovieList moviesList={movies.upcomingMovies} title={"Upcoming Movies"}/>
    </div>
  )
}

export default SecondaryContainer