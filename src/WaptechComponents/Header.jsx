import { Link } from "react-router-dom"
function Header(){
    return(
        
        <div className="HeadContents">
            {/* These are the contents of the header files */}
            <div>Waptech Agriconnect</div>

            <div className="NavigationLinks">
                <Link to='/' style={{}}>Home</Link>
                <Link to='/Data Analytics' style={{}} > Data Analytics</Link>
                <Link to='/Farmers sharing' style={{}}>Farmers Sharing</Link>
                <Link to='/Market linkage' style={{}}>Market Linkage</Link>
                <Link to='/Trainings' style={{}}>Training</Link>
                <Link to='/Contact Us' style={{}}>Contact Us</Link>
                
            </div>
        </div>
    )
}
export default Header