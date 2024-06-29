import Header from './Header'
import VideoContainer from './VideoContainer'
import { useDispatch, useSelector } from 'react-redux'
import { VscDiffAdded } from "react-icons/vsc";
import { RiShareForwardLine } from "react-icons/ri";
import { GoDownload } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { showShareIcons } from '../utils/configSlice';
import ShareIcons from './ShareIcons';
import { useRecommendMovies } from '../utils/useRecommendMovies';
import MovieList from './MovieList';
import { useTrailerVideoApi } from '../utils/useTrailerVideoApi';
import ShimmerGPT from './ShimmerGPT';
import MovieTrailer from './MovieTrailer';


const Video = () => {
  const dispatch = useDispatch()
  const {shareIcons} = useSelector(store=>store.config)
  const trailerVideoKey = useSelector(store=>store.movies?.trailerVideoKey)
  const {recommendMovies} = useSelector(store => store.movies)
  const {upcomingMovies} = useSelector(store => store.movies)
  const {animeShows} = useSelector(store => store.movies)
  const {movieDetails,movieKeyword} = useSelector(store=>store.movies)
  const keywords = movieKeyword.slice(0,8)
  const handleShareIcons = ()=>{
    dispatch(showShareIcons())
  }
  useTrailerVideoApi(movieDetails.id)
  useRecommendMovies(movieDetails.id)

  console.log("hello")


  return (
    <div className='bg-black'>
        <Header/>
        {
          trailerVideoKey ? 
          <div>
          <div className='relative z-10'>
            <VideoContainer id={movieDetails.id} type={"personalVideo"}/>
            <div className='bg-black pt-4 px-6 md:px-8 '>
              <p className="text-white font-bold text-xl sm:text-4xl mb-8 ">{movieDetails.original_title}</p>
              <li className='flex flex-row list-none mb-8 overflow-x-auto gap-1 scrollbar-hide'>
                {
                  keywords.map((keyword,index)=> <items className='flex-shrink-0 font-semibold text-md text-gray-300'>{keyword.name.charAt(0).toUpperCase() + keyword.name.slice(1)+"     |"}</items>)
                }
              </li>
              <p className='text-justify text-gray-400'>
                {
                  movieDetails?.overview
                }
              </p>
              <div className='flex flex-row justify-center md:justify-start'>
                <li className='mt-12 flex flex-row md:gap-24  gap-10 '>
                  <item className='flex flex-col gap-2 text-2xl'><VscDiffAdded className='text-purple-500' /><span className='text-sm text-gray-300 font-semibold'>Added</span></item>
                  <item className='flex flex-col gap-2 text-2xl'><RiShareForwardLine className='text-purple-500' onClick={handleShareIcons}/><span className='text-sm text-gray-300 font-semibold'>Share</span></item>
                  <item className='flex flex-col gap-2 text-2xl'><GoDownload className='text-purple-500'/><span className='text-sm text-gray-300 font-semibold'>Download</span></item>
                  <item className='flex flex-col gap-2 text-2xl'><FaRegHeart className='text-purple-500'/><span className='text-sm text-gray-300 font-semibold'>Rate</span></item>
                </li>
              </div>
              <div className='text-white font-bold text-lg mt-10'>
                  <MovieList moviesList={recommendMovies} title={"More Like This"}/>
              </div>
              <div className='mt-8'>
                <h1 className='text-white text-lg font-bold mb-4'>Trailers and More</h1>
                <MovieTrailer/>
              </div>
              <div className='text-white font-bold text-lg mt-10'>
                  <MovieList moviesList={animeShows} title={"Popular Series"}/>
              </div>
              <div className='text-white font-bold text-lg mt-10'>
                  <MovieList moviesList={upcomingMovies} title={"More Entertainment"}/>
              </div>
            </div>
          </div>
           {
            shareIcons && <ShareIcons/>
           }
          </div>
           : <div className='w-screen text-center pt-[20%] text-2xl font-semibold bg-white text-black'>OOPS Movie is not available right now.😒</div>
        }
    </div>
  
  )
}

export default Video