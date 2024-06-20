import { logo } from "../utils/constants"

const Header = ()=>{
    return(
        <div className="absolute bg-gradient-to-b from-black w-full h-full pl-32 pt-2 z-10">
            <img className="w-56" src={logo} alt="logo"></img>
        </div>
    )
}
export default Header