import React from 'react'
import { API_OPTION, IMG_CDN_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addMovieDetails,checkShowMovie,addMovieKeyword} from '../utils/moviesSlice'


const MovieCard = ({movieData}) => {
  const dispatch = useDispatch()
  const {showMovie} = useSelector(store=>store.movies)
  const handleMovieVideo = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/'+movieData.id+'/keywords', API_OPTION)
    const json = await data.json()
    console.log(json)
    dispatch(addMovieKeyword(json?.keywords))
    dispatch(addMovieDetails(movieData))
    if(!showMovie) dispatch(checkShowMovie())
  }
  return movieData?.poster_path && (
    <div className='w-16 md:w-36 '>
        <img alt="MOVIE_IMG" src={IMG_CDN_URL+movieData?.poster_path} onClick={handleMovieVideo}/>
    </div>
  )
}

export default MovieCard