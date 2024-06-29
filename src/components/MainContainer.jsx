import VideoContainer from "./VideoContainer"
import TitleContainer from "./TitleContainer"
import { useSelector } from "react-redux"

const MainContainer = ()=>{
    const movies =  useSelector(store=>store.movies?.nowPlayingMovies)
    
    if(!movies) return

    
    const mainMovie = movies[0]
    const {id, original_title, overview} = mainMovie


    return (
        <div className="bg-black">
            <TitleContainer title={original_title} overview={overview}/>
            <VideoContainer id={id}/>
        </div>
    )
}
export default MainContainer