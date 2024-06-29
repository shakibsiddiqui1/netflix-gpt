import { useDispatch } from "react-redux";
import { API_OPTION } from './constants'
import { useEffect } from "react";
import { addUpcomingMovies } from "./moviesSlice";

export const useUpcomingMoviesApi = ()=>{
    const dispatch = useDispatch();
    const getUpcomingMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=2', API_OPTION)
        const json = await data.json()
        dispatch(addUpcomingMovies(json.results))
    }
    useEffect(()=>{
        getUpcomingMovies()
    },[])
}