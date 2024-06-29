import React from 'react'
import { EmailIcon, EmailShareButton,FacebookIcon,FacebookShareButton,TwitterIcon,TwitterShareButton,WhatsappIcon,WhatsappShareButton} from "react-share";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch, useSelector } from 'react-redux';
import { showShareIcons } from '../utils/configSlice';
import { YOUTUBE_LINK } from '../utils/constants';

const ShareIcons = () => {
 const dispatch = useDispatch()
 const {trailerVideoKey} = useSelector((store)=>store.movies)
 const handleShareIcons = ()=>{
    dispatch(showShareIcons())
 }
  return (
    <div className='absolute bottom-0 left-0 z-20 w-screen h-screen bg-black bg-opacity-80 flex flex-row justify-center items-center'>
        <div className='relative bg-white min-w-[350px] h-[200px] rounded-md flex flex-col justify-center items-center gap-6 shadow-xl'>
            <TiDeleteOutline className='absolute top-4 right-4 text-xl' onClick={handleShareIcons} />
            <div>
                <h1 className='font-bold text-xl '>Share Link 🚀</h1>
            </div>
            <div className='flex flex-row gap-8 justify-center '>
                <EmailShareButton url={YOUTUBE_LINK+trailerVideoKey} quote={"Watch this video recommended by NetflixGPT⚡.[Shakib Siddiqui]"}>
                    <EmailIcon size={40} round={true}/>
                </EmailShareButton>
                <WhatsappShareButton url={YOUTUBE_LINK+trailerVideoKey} quote={"Watch this video recommended by NetflixGPT⚡.[Shakib Siddiqui]"}>
                    <WhatsappIcon size={40} round={true}/>
                </WhatsappShareButton>
                <FacebookShareButton url={YOUTUBE_LINK+trailerVideoKey} quote={"Watch this video recommended by NetflixGPT⚡.[Shakib Siddiqui]"}>
                    <FacebookIcon size={40} round={true}/>
                </FacebookShareButton>
                <TwitterShareButton url={YOUTUBE_LINK+trailerVideoKey} quote={"Watch this video recommended by NetflixGPT⚡.[Shakib Siddiqui]"}>
                    <TwitterIcon size={40} round={true}/>
                </TwitterShareButton>
            </div>
        </div>
    </div>
  )
}

export default ShareIcons