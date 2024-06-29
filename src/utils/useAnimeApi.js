import { useDispatch } from "react-redux";
import { API_OPTION } from './constants'
import { useEffect } from "react";
import { addAnimeShows } from "./moviesSlice";

export const useAnimeApi = ()=>{
    const dispatch = useDispatch();
    const getAnimeShows = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?page=2', API_OPTION)
        const json = await data.json()
        dispatch(addAnimeShows(json.results))
    }
    useEffect(()=>{
        getAnimeShows()
    },[])
}