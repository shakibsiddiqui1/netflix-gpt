import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from '../utils/constants'
import { useEffect } from "react";
import { addNowPlayingMovies } from "./moviesSlice";

export const useNowPlayingApi = ()=>{
    const dispatch = useDispatch();
    const {nowPlayingMovies} = useSelector((store)=> store.movies)
    const getNowPlaying = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTION)
        const json = await data.json()
        dispatch(addNowPlayingMovies(json.results))
    }
    useEffect(()=>{
        !nowPlayingMovies && getNowPlaying()
    },[])
}