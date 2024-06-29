import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
import ShimmerGPT from './ShimmerGPT'
import { showShimmerGPT } from '../utils/configSlice'
import { useDispatch } from 'react-redux'

const GPTMovieSuggestion = () => {
  const {gptMovies, gptMoviesNames} = useSelector(store => store.gpt)
  const {shimmerGPT} = useSelector(store=>store.config)
  const dispatch = useDispatch()


  if(shimmerGPT)
  return <ShimmerGPT/>
  
  if(!gptMovies && !shimmerGPT)
  return

  return (
    <div className='bg-black px-4 text-white text-lg font-bold pt-8 mt-48'>
        {
          gptMoviesNames?.map((movieName,index)=><MovieList key={movieName} title={movieName} moviesList={gptMovies[index]}/>)
        }
    </div>
  )
}

export default GPTMovieSuggestion