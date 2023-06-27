import { Link } from "react-router-dom"
import hero from '../assets/hero.jpg'
import { FaHome,FaMixcloud,FaRegShareSquare } from "react-icons/fa";
import { AiTwotonePhone,AiOutlinePoweroff,AiFillMessage } from "react-icons/ai";
import { Context } from "./context/userContext/Context";
import { useContext } from "react";
import Searchbar from "./Navbar/searchbar";
import Logo from "./Navbar/logo";
function Header(){
    const {user,dispatch}=useContext(Context)
    const handleLogout=()=>{
        dispatch({type:"LOGOUT"});
    };
    return(
        <div className="HeadContents">
            {/* These are the contents of the header files */}
            <div className="Headers">
                 <Logo/>
                 {
      user &&  ( <Searchbar/>)
                 }
            </div>

            <div className="NavigationLinks">
                <Link to='/' style={{textDecoration:'none',display:'flex',flexDirection:'row',gap:'5px',fontWeight:'bold', color:'green'}}><FaHome/>Home</Link>
                {
       !user &&(
                <Link to='/login' style={{textDecoration:'none',display:'flex',flexDirection:'row',gap:'5px',fontWeight:'bold', color:'green'}}><FaRegShareSquare/>Login</Link>
            )
            }
                {
                    user && (
                        <>
                        <Link to='/Farmers sharing' style={{textDecoration:'none',display:'flex',flexDirection:'row',gap:'5px',fontWeight:'bold', color:'green'}}><AiFillMessage/>Farmers Sharing</Link>
                <Link to='/Contact Us' style={{textDecoration:'none',display:'flex',flexDirection:'row',gap:'5px',fontWeight:'bold', color:'green'}}><AiTwotonePhone/>Contact Us</Link>                
                <Link onClick={handleLogout} style={{textDecoration:'none',display:'flex',flexDirection:'row',gap:'5px',fontWeight:'bold', color:'green'}}><AiOutlinePoweroff/>Log Out</Link>     
                        </>
                    )
                }            
            </div>
        </div>
    )
}
export default Header