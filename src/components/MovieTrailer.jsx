import React from 'react'
import { useSelector } from 'react-redux'
import Movie from './Movie'

const MovieTrailer = () => {
  const {moviesTrailers} = useSelector((store)=>store.movies)
  return (
    <div className=''>
        <li className='flex flex-row list-none mb-8 overflow-x-auto gap-8 scrollbar-hide'>
            {
                moviesTrailers.map((movie)=> <items className='flex-shrink-0' key={movie?.key}><Movie id={movie?.key}/></items>)
            }
        </li>
    </div>
    
  )
}

export default MovieTrailer