import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { API_OPTION, GPT_URL } from '../utils/constants'
import { addGPTMoviesAndNames } from '../utils/gptSlice'
import { useDispatch } from 'react-redux'
import { showShimmerGPT } from '../utils/configSlice'


const GPTSearchBar = () => {
  const dispatch = useDispatch()
  const select_lang_key = useSelector(store => store.config.language_type)

  const search_text = useRef(null)

  const searchInTMDB = async (movie)=>{
    const data = await fetch( "https://api.themoviedb.org/3/search/movie?query="+movie+"&page=1",API_OPTION )
    const json = await data.json()
    return json.results
  }
  const handleGPTApi = async ()=>{
    if(search_text?.current?.value==="")
    return

    dispatch(showShimmerGPT())
    const GPT_QUERY = "Act as a Movie Recommendation system and suggest some movies for the query given ahead :"+ search_text?.current?.value +". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar,Sholay,Don,Golmaal,Koi Mil Gaya"
    const gptResults = await axios({
      url : GPT_URL+process.env.REACT_APP_GPT_KEY,
      method : "post",
      data : {
        "contents":[
        {"role": "user",
          parts:[{"text": GPT_QUERY}]
        }]
      }
    })
    const moviesNames = gptResults['data']['candidates'][0]['content']['parts'][0]['text'].split(",")
    const promisesArray = moviesNames.map((movie)=>searchInTMDB(movie))
    const tmdbResults = await Promise.all(promisesArray)
    dispatch(addGPTMoviesAndNames({moviesNames,tmdbResults}))
    dispatch(showShimmerGPT())
   }

  return (
    <div className='pt-[25%] md:pt-[10%] flex flex-row justify-center '>
        <form className='w-1/2 grid grid-cols-12 gap-2 h-10' onSubmit={(e)=>e.preventDefault()}>
            <input ref={search_text} className='col-span-8 md:col-span-9 border border-black rounded-md px-2 md:px-4 text-[10px] md:text-lg outline-none' type='text' placeholder={lang[select_lang_key].gptSearchPlaceholder} />
            <button className='col-span-4 md:col-span-3 bg-red-700 px-1 py-1 md:px-4 md:py-2 rounded-md text-white font-semibold text-[12px] md:text-md' onClick={handleGPTApi}>{lang[select_lang_key].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar

