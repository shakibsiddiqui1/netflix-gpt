import { login_bg_image } from "../utils/constants.js"
import { Link } from "react-router-dom"
import {useState} from "react"

import Header from "./Header"
const Login = ()=>{
    const [isSignIn,setIsSignIn] = useState(true)
    const setForm = ()=>{
        setIsSignIn(!isSignIn)
    }
    return (
        <div>
            <Header/>
            <div className="absolute" >
                <img className="" src={login_bg_image} alt="login-bg"/>
            </div>
            <div className="absolute z-20 w-full mt-28 flex flex-row justify-center items-center">
                <div className="flex flex-col gap-7 w-4/12 bg-opacity-60 bg-black p-16">
                    <h1 className="text-4xl font-bold text-white">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                    <form className="flex flex-col gap-4 ">
                        {isSignIn ? "" : <input className="p-2 rounded-sm bg-gray-700" type="text" placeholder="Enter full name"/>}
                        <input className="p-2 rounded-sm bg-gray-700" type="text" placeholder="Enter email address"/>
                        <input className="p-2 rounded-sm bg-gray-700" type="password" placeholder="Enter password"/>
                        <button className="text-white font-semibold bg-red-700 p-2 rounded-sm">{isSignIn ? "Sign In" : "Sign Up"}</button>
                        <span className="text-gray-300 text-center">OR</span>
                        {isSignIn ? <button className="text-white font-semibold bg-white bg-opacity-20 p-2 rounded-sm">Use a sign-in code</button> : ""}
                        {isSignIn ? <span className="text-white text-center cursor-pointer">Forgot password?</span> : ""}
                        {isSignIn ? <div className="text-md text-white">New to Netflix? <span className="font-semibold cursor-pointer" onClick={setForm}>Sign up now.</span></div> : <div className="text-md text-white">Already registered user? <span className="font-semibold cursor-pointer" onClick={setForm}>Sign in now.</span></div>}
                        <span className="text-[13px] text-gray-400">This page is protected by Google reCAPTCHA to ensure you're not a bot.<Link className="text-blue-500">Learn more</Link>.</span>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login