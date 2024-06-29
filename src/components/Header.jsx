import { useDispatch, useSelector } from "react-redux"
import { SUPPORTED_LANGUAGES, logo } from "../utils/constants"
import {signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import { checkShowMovie } from "../utils/moviesSlice";
import { addGPTMoviesAndNames } from "../utils/gptSlice";
import { showShimmerGPT } from "../utils/configSlice";

const Header = ()=>{

    const user = useSelector((store)=>store.user)
    const {showMovie} = useSelector(store=>store.movies)
    const gptSearchView = useSelector((store)=>store.gpt.gptSearchView)
    const {shimmerGPT} = useSelector((store)=>store.config)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const {uid,email,displayName} = user;
                dispatch(addUser({uid:uid,email:email,displayName:displayName}))
                navigate("/browse")
               
                // ...
            } else {
                // User is signed out
                // ...
                dispatch(removeUser())
                navigate("/")
            }
            });
            return ()=>unsubscribe()
    },[])

    const handleSignOut = ()=>{
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });
    }

    const handleClearGPTResult = ()=>{
        dispatch(addGPTMoviesAndNames({gptMovies : null,gptMoviesNames : null}))
        if(shimmerGPT) dispatch(showShimmerGPT())
    }

    const handleGPTSearchView = ()=>{
        dispatch(toggleGPTSearchView())
    }

    const handleLanguage = (e)=>{
        dispatch(changeLanguage(e.target.value))
    }


    return(
        <div className="absolute bg-black bg-opacity-60 w-full pl-2 pr-2 sm:pl-28 sm:pr-14 pt-1 sm:pt-2 pb-1 sm:pb-2 z-20 flex flex-row justify-between items-center border-white">
            <img className="w-24 md:w-36 " src={logo} alt="logo"/>
            {user && !showMovie &&
                (<div className=" flex flex-row items-center gap-2 md:gap-8">
                    {
                        !gptSearchView && <h1 className="font-semibold text-white text-[12px] md:text-lg">Hii🖐🏼 {user.displayName}</h1>
                    }
                    {
                        gptSearchView && (
                            <select className="px-1 py-1 md:px-3 md:py-2 outline-none bg-white bg-opacity-80 text-black rounded-md text-[12px] md:text-md" onChange={handleLanguage}>
                                {
                                    SUPPORTED_LANGUAGES.map((lang)=><option key={lang.identifier} value={lang.identifier}>{lang.value}</option>)
                                }
                            </select>
                        )
                    }
                    {
                        gptSearchView && <button className=" bg-red-700 text-white font-semibold h-8 text-[12px] md:text-[16px] md:h-10 py-1 px-2 md:py-2 md:px-4  rounded-md hover:bg-red-600 cursor-pointer" onClick={handleClearGPTResult} >Clear</button>
                    }
                    <button className=" bg-purple-700 text-white font-semibold h-8 text-[12px] md:text-[16px] md:h-10 py-1 px-2 md:py-2 md:px-4 rounded-md hover:bg-purple-600 cursor-pointer" onClick={handleGPTSearchView}>{gptSearchView ? "Home" : "Ask GPT"}</button>
                    {
                        !gptSearchView && <button className=" bg-red-700 text-white font-semibold h-8 text-[12px] md:text-[16px] md:h-10 py-1 px-2 md:py-2 md:px-4  rounded-md hover:bg-red-600 cursor-pointer" onClick={handleSignOut} >Sign out</button>
                    }
                    
                </div>)
            }
            {
                showMovie && <button className=" bg-red-700 text-white font-semibold h-8 text-[12px] md:text-[16px] md:h-10 py-1 px-2 md:py-2 md:px-3  rounded-md hover:bg-red-600 cursor-pointer" onClick={()=>{dispatch(checkShowMovie())}}>Go back</button>
            }
        </div>
    )
}
export default Header