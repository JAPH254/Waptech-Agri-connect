import LatestUpdates from "../LatestUpdates"
import Overviews from "../OverviewFeatures"
import Testimonials from "../Testimonials"
import Navigation from "../navigation"
import FeaturedCrops from "../FeaturedCrops"
import ManageVids from "../ManagaeSampleVids"
function Homepage(){
    return(
        <div className="Homepage">
            <div className="NavigationHome">
                {/* this displays the navigation part */}
            <Navigation/>
            </div>
            <div className="Testimonials">
            <Testimonials/>
            </div>
            <div className="Overviews">
            <Overviews/>
            </div>
            <div className="LatestUpdates">
            <LatestUpdates/>
            </div>
            <div className="FeaturedCrops">
            <FeaturedCrops/>
            </div>
            <div className="ManageVids">
            <ManageVids/>
            </div>
        </div>
    )
}
export default Homepage;