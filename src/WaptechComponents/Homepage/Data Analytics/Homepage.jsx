import LatestUpdates from "../LatestUpdates"
import Navigation from "../navigation"
import FeaturedCrops from "../FeaturedCrops"

function Homepage(){
    return(
        <div className="Homepage">
            <div className="NavigationHome">
                {/* this displays the navigation part */}
            <Navigation/>
            </div>
            <div className="LatestUpdates">
            <LatestUpdates/>
            </div>
            <div className="FeaturedCrops">
            <FeaturedCrops/>
            </div>  
        </div>
    )
}
export default Homepage;