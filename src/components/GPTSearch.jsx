import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import { login_bg_image } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div className=''>
        <div className="fixed -z-10 bg-black" >
            <img className="h-screen object-cover sm:h-auto" src={login_bg_image} alt="login-bg"/>
        </div>
        <GPTSearchBar/>
        <GPTMovieSuggestion/>
    </div>
  )
}

export default GPTSearch