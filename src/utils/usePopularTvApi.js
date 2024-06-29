import { useDispatch } from "react-redux";
import { API_OPTION } from './constants'
import { useEffect } from "react";
import { addPopularTvSeries } from "./moviesSlice";

export const usePopularTvApi = ()=>{
    const dispatch = useDispatch();
    const getPopularTvShows = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/tv/popular?language=hi&page=1', API_OPTION)
        const json = await data.json()
        dispatch(addPopularTvSeries(json.results))
    }
    useEffect(()=>{
        getPopularTvShows()
    },[])
}