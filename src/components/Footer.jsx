import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt
} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

// const BannerImg = {
//     backgroundImage : `url(${Banner})`,
//     backgroundPosition : "bottom",
//     backgroundRepeat : "no-repeat",
//     backgroundSize : "cover",
//     height : "100%",
//     width : "100%"
// }
const FooterLinks = [
    {
        title:"Home",
        link:"/#"
    },
    {
        title:"About",
        link:"/#about"
    },
    {
        title:"Contact",
        link:"/#contact"
    },
    {
        title:"Blog",
        link:"/#blog"
    },
]
const FooterLinks2 = [
    {
        title:"Careers",
        link:"/#"
    },
    {
        title:"Achievements",
        link:"/#about"
    },
    {
        title:"Our Goals",
        link:"/#contact"
    },
    {
        title:"Press Releases",
        link:"/#blog"
    },
]
const Footer = () => {
  return (
    <div  className="text-gray-300 bg-black">
        <div className="container px-4">
            <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-15 pt-5">
                {/*company details */}
                <div className="py-8 px-4">
                    <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                       Netflix 
                    </h1>
                    <p className=''>At Netflix, we want to entertain the world. Whatever your taste, and no matter where you live, we give you access to best-in-class TV series, documentaries, feature films and games. Our members control what they want to watch, when they want it, in one simple subscription.</p>
                </div>
                {/*Nav Links details */}
                <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                    <div>
                        <div className="py-8 px-4">
                            <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Important Links</h1>
                            <ul className="flex flex-col gap-3">
                                {
                                    FooterLinks.map((data)=>(
                                        <li key={data.id} className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                                            <span>{data.title}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className="py-8 px-4">
                            <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Links</h1>
                            <ul className="flex flex-col gap-3">
                                {
                                    FooterLinks2.map((data)=>(
                                        <li key={data.id} className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                                            <span>{data.title}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    
                    {/*social Links */}
                    <div>
                        <div className="flex items-center gap-3 mt-6 pl-[15px] sm:pl-[0px]">
                            <NavLink>
                                <FaInstagram className="text-3xl"/>
                            </NavLink>
                            <NavLink>
                                <FaFacebook className="text-3xl"/>
                            </NavLink>
                            <NavLink>
                                <FaLinkedin className="text-3xl"/>
                            </NavLink>
                        </div>
                        <div className="mt-6 pl-[15px] sm:pl-[0px]">
                            <div className="flex items-center gap-3 border">
                                <FaLocationArrow/>
                                <p>Noida, UP</p>
                            </div>
                            <div className="flex items-center gap-3 mt-6 mb-12 sm:mb-36">
                                <FaMobileAlt/>
                                <p>7037310011</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer