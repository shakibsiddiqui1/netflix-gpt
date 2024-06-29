import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({moviesList,title}) => {

  return (
    <div className='pb-6'>
        <h1 className='pb-4'>{title}</h1>
        <div className='flex overflow-x-auto scrollbar-hide '>
            <div className='flex gap-4'>
                {
                        moviesList?.map((movie) => (<MovieCard key={movie.id} movieData={movie}/>))
                }
            </div>
        </div>
    </div>
    
  )
}

export default MovieList