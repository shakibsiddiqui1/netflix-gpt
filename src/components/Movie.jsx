import React from 'react'
import { YOUTUBE_LINK } from '../utils/constants'

const Movie = ({id}) => {
  return (
    <div >
        <iframe
                className="w-32 md:w-56 aspect-video center rounded-xl border border-gray-300 "
                src={YOUTUBE_LINK+id}
                title="YouTube video player"
                allowFullScreen
                allowTransparency
                >  
        </iframe>
    </div>
  )
}
export default Movie