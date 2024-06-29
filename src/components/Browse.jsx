import Header from './Header'
import { useNowPlayingApi } from '../utils/useNowPlayingApi'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import { useTopRatedMoviesApi } from '../utils/useTopRatedMoviesApi'
import { usePopularTvApi } from '../utils/usePopularTvApi'
import { useAnimeApi } from '../utils/useAnimeApi'
import { useUpcomingMoviesApi } from '../utils/useUpcomingMoviesApi'
import { useDispatch, useSelector } from 'react-redux'
import GPTSearch from './GPTSearch'
import Video from './Video'
import Footer from './Footer'
import { addGPTMoviesAndNames } from '../utils/gptSlice'

const Browse = () => {
  const gptSearchView = useSelector(store => store.gpt.gptSearchView)
  const {showMovie} = useSelector(store=>store.movies)
  const {gptMovies} = useSelector(store=>store.gpt)
  const dispatch = useDispatch()

  useNowPlayingApi()
  useTopRatedMoviesApi()
  usePopularTvApi()
  useAnimeApi()
  useUpcomingMoviesApi()
  
  if(gptMovies && !showMovie && !gptSearchView )
  {
    dispatch(addGPTMoviesAndNames({gptMoviesNames:null,gptMovies:null}))
  }

  if(showMovie) return (
    <div>
      <Header/>
      <Video/>
    </div>
  )

  
  return (
    <div>
      <Header/>
      {
        gptSearchView ? 
                      <GPTSearch/> 
                      : 
                      <>
                        <MainContainer/>
                        <SecondaryContainer/>
                        <Footer/>
                      </>      
      }
    </div>
  )
}

export default Browse