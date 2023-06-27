// import { Context } from "../context/userContext/Context"
// import { useContext } from "react"
import Sharesidenav from "./sharesidenav"
import Sharingboard from "./sharingboard"

function Farmersharing(){
    return(
        <div style={{height:"85vh", display:"flex"}}>
            <Sharesidenav/>
            <Sharingboard/>
        </div>
    )
}
export default Farmersharing