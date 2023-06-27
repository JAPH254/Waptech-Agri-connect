import { Context } from "../context/userContext/Context";
import { useContext } from "react";
function Sharesidenav() {
const {user}=useContext(Context)
    return (
        <div className="sidenav" >
            <h2>Profile</h2>
            <span><img width={70} height={70} style={{borderRadius:'50%',border:'green solid'}} src="/src/assets/istockphoto-1294915041-1024x1024.jpg" alt="No Image" /></span>
            <h3>UserName</h3>
            {user.Username}
            <h4>User Email</h4>
            {user.Email}
            <h4>Role</h4>
            {user.Role}


        </div>
    )
}

export default Sharesidenav;