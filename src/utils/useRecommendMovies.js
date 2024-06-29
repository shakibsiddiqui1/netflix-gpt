import { useDispatch } from "react-redux"
import { addRecommendMovies } from "./moviesSlice"
import { useEffect } from "react"
import { API_OPTION } from "./constants"

export const useRecommendMovies = (movie_id)=>{
    const dispatch = useDispatch()
    const getRecommendedMovies = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movie_id+"/recommendations",API_OPTION)
        const json = await data.json()
        dispatch(addRecommendMovies(json?.results))
      }
      useEffect(()=>{
        getRecommendedMovies() 
      },[])
}