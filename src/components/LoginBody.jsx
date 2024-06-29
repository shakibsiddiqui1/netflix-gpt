import React from 'react'
import { LOGIN_PAGE_CONTENT } from '../utils/constants'
import LoginBodyContainer from './LoginBodyContainer'

const LoginBody = () => {
   
  return (
    <div className=''>
        {
            LOGIN_PAGE_CONTENT.map((container,index)=><LoginBodyContainer key={container.heading} containerData={container} index={index}/>)
        }
    </div>
  )
}

export default LoginBody