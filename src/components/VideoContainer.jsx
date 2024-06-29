import {useSelector } from 'react-redux'
import { useTrailerVideoApi } from '../utils/useTrailerVideoApi'
import { YOUTUBE_LINK } from '../utils/constants'

const VideoContainer = ({id}) => {
    useTrailerVideoApi(id)
    const trailerVideoKey = useSelector(store=>store.movies?.trailerVideoKey)
    return (
        <div className='overflow-hidden scrollbar-hide pt-4 sm:pt-0 '>
            <iframe
                className="w-screen aspect-video center "
                src={YOUTUBE_LINK+trailerVideoKey+"?rel=0&autoplay=1&mute=1"}
                title="YouTube video player"
                allowFullScreen
                >  
            </iframe>
        </div>
    )
}

export default VideoContainer