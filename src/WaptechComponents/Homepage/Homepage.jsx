import LatestUpdates from "./LatestUpdates"
import Overviews from "./OverviewFeatures"
import Testimonials from "./Testimonials"
import Navigation from "./navigation"
import FeaturedCrops from "./FeaturedCrops"
import ManageVids from "./ManagaeSampleVids"
function Homepage(){
    return(
        <div className="Homepage">
            <Navigation/>
            <Testimonials/>
            <Overviews/>
            <LatestUpdates/>
            <FeaturedCrops/>
            <ManageVids/>
        </div>
    )
}
export default Homepage