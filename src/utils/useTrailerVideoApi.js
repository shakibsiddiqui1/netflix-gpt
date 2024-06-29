import { API_OPTION } from '../utils/constants'
import { useDispatch} from 'react-redux'
import { addMoviesTrailers, addTrailerVideoKey } from '../utils/moviesSlice'
import { useEffect } from 'react'

export const useTrailerVideoApi = (id)=>{
    const dispatch = useDispatch()
    const getTrailer = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+id +"/videos", API_OPTION)
        const json = await data.json()
        const filterTrailer = json?.results?.filter((video)=>video.type === "Trailer")
        const trailerVideo = filterTrailer ? filterTrailer[0] : json?.results[0]
        dispatch(addTrailerVideoKey(trailerVideo?.key))
        if(json)
        dispatch(addMoviesTrailers(json?.results.slice(0,6)))
    }
    useEffect(()=>{
        getTrailer()
    },[id])
}