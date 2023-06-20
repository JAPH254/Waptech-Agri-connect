import { Link } from "react-router-dom"
import hero from '../assets/hero.jpg'
import { FaHome,FaMixcloud,FaRegShareSquare } from "react-icons/fa";
import { AiTwotonePhone,AiOutlineTeam,AiFillAccountBook } from "react-icons/ai";
function Header(){
    return(
        
        <div className="HeadContents">
            {/* These are the contents of the header files */}
            <div className="Headers">
            <div style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
                <span><img width={70} height={70} style={{borderRadius:'50%',border:'green solid'}} src="/src/assets/hero.jpg" alt="No Image" /></span>
                <h3>Waptech Agriconnect</h3>
                </div>
            <div style={{display:'flex',flexDirection:'row',gap:'1rem'}}>
            <input type="text"placeholder="Search Waptech" />
               <p> <button>Search</button></p>
            </div>
            </div>

            <div className="NavigationLinks">
                <Link to='/' style={{textDecoration:'none',display:'flex',flexDirection:'row',gap:'5px',fontWeight:'bold', color:'green'}}><FaHome/>Home</Link>
                <Link to='/Data Analytics' style={{textDecoration:'none',display:'flex',flexDirection:'row',gap:'5px',fontWeight:'bold', color:'green'}} > <FaMixcloud/>Data Analytics</Link>
                <Link to='/Farmers sharing' style={{textDecoration:'none',display:'flex',flexDirection:'row',gap:'5px',fontWeight:'bold', color:'green'}}><FaRegShareSquare/>Farmers Sharing</Link>
                <Link to='/Market linkage' style={{textDecoration:'none',display:'flex',flexDirection:'row',gap:'5px',fontWeight:'bold', color:'green'}}><AiFillAccountBook/>Market Linkage</Link>
                <Link to='/Trainings' style={{textDecoration:'none',display:'flex',flexDirection:'row',gap:'5px',fontWeight:'bold', color:'green'}}><AiOutlineTeam/>Training</Link>
                <Link to='/Contact Us' style={{textDecoration:'none',display:'flex',flexDirection:'row',gap:'5px',fontWeight:'bold', color:'green'}}><AiTwotonePhone/>Contact Us</Link>
                
            </div>
        </div>
    )
}
export default Header