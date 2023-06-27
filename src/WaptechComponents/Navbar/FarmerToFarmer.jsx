import Resources from "./resources"
import Sharesidenav from "./sharesidenav"
import Sharingboard from "./sharingboard"

function Farmersharing(){
    return(
        <div style={{height:"85vh", display:"flex"}}>
            <Sharesidenav/>
            <Sharingboard/>
            <Resources/>
        </div>
    )
}
export default Farmersharing