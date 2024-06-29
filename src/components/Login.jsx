import { login_bg_image } from "../utils/constants.js"
import { Link } from "react-router-dom"
import {useRef, useState} from "react"
import { validate } from "../utils/validateForm.js"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from "../utils/firebaseConfig.js";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Header"
import LoginBody from "./LoginBody.jsx";

const Login = ()=>{
    const dispatch = useDispatch()
    const [isSignIn,setIsSignIn] = useState(true)
    const [validationOutput,setValidationOutput] = useState([])

    const name=useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const setForm = ()=>{
        setIsSignIn(!isSignIn)
        setValidationOutput([])
        email.current.value=""
        password.current.value=""
    }
    const submitForm = ()=>{
       const output=validate(name ? name?.current?.value : "",email.current.value,password.current.value,isSignIn)
       setValidationOutput(output)
       if(output.length>=1) return

       if(!isSignIn)
       {
            createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: name.current.value
                  }).then(() => {
                    const { uid, email, displayName} = auth.currentUser
                    dispatch(addUser({uid: uid,email: email,displayName: displayName}))
                    // Profile updated!
                    // ...
                  }).catch((error) => {
                    // An error occurred
                  });
                name.current.value=""
                email.current.value=""
                password.current.value=""
            })
            .catch((error) => {
                toast("User Already Registered")
            });    
        }
       else
       {
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            })
            .catch((error) => {
            toast("User is not registered")
            });
       }
    }
    return (
        <>
        <div >
            <Header/>
            <div className="absolute top-0 left-0 bg-black" >
                <img className="w-screen h-[550px] object-cover sm:w-screen lg:h-auto " src={login_bg_image} alt="login-bg"/>
            </div>
            <ToastContainer/>
            <div className="absolute top-0 left-0 w-screen h-[550px] lg:h-auto bg-black bg-opacity-50 flex flex-row justify-center">
                <div className="flex flex-col gap-2 sm:gap-2 lg:gap-7 w-full h-[400px] md:h-[480px] md:w-4/12 mt-24 md:mt-31  bg-opacity-60 bg-black p-3 md:p-8">
                    <h1 className="text-2xl md:text-4xl font-bold text-white">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                    <form onSubmit={(e)=>{e.preventDefault()}} className="flex flex-col gap-2 sm:gap-2 lg:gap-3 ">
                        {
                            isSignIn ? "" : <input ref={name} className="p-2 rounded-sm bg-gray-700 text-white" type="text" placeholder="Enter full name"/>
                        }
                        <p className="text-red-700 font-semibold">{validationOutput[0]}</p>
                        <input ref={email} className="p-2 rounded-sm bg-gray-700 text-white" type="text" placeholder="Enter email address"/>
                        <p className="text-red-700 font-semibold">{validationOutput[1]}</p>
                        <input ref={password} className="p-2 rounded-sm bg-gray-700 text-white" type="password" placeholder="Enter password"/>
                        <p className="text-red-700 font-semibold">{validationOutput[2]}</p>
                        <button className="text-white font-semibold bg-red-700 p-2 rounded-sm hover:bg-red-600" onClick={submitForm}>{isSignIn ? "Sign In" : "Sign Up"}</button>
                        <span className="text-gray-300 text-center">OR</span>
                        {isSignIn ? <span className="text-white text-center cursor-pointer">Forgot password?</span> : ""}
                        {isSignIn ? <div className="text-center text-md text-white">New to Netflix? <span className="font-semibold cursor-pointer" onClick={setForm}>Sign up now.</span></div> : <div className="text-md text-white text-center">Already registered user? <span className="font-semibold cursor-pointer" onClick={setForm}>Sign in now.</span></div>}
                    </form>
                </div>
            </div>
            <div className=" absolute top-[490px] lg:top-[575px] left-0 bg-black bg-opacity-80 w-screen ">
               <LoginBody/>
            </div>
            
        </div>
        
        </>
    )
}
export default Login