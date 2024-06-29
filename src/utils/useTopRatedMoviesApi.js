import { useDispatch } from "react-redux";
import { API_OPTION } from './constants'
import { useEffect } from "react";
import { addTopRatedMovies } from "./moviesSlice";

export const useTopRatedMoviesApi = ()=>{
    const dispatch = useDispatch();
    const getTopRatedMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=3', API_OPTION)
        const json = await data.json()
        dispatch(addTopRatedMovies(json.results))
    }
    useEffect(()=>{
        getTopRatedMovies()
    },[])
}