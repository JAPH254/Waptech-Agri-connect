import LatestUpdates from "../LatestUpdates";
import Navigation from "../navigation";
import FeaturedCrops from "../FeaturedCrops";

function Homepage() {
  return (
    <div className="Homepage">
      <div className="NavigationHome">
        {/* this displays the navigation part */}
        <Navigation />
      </div>
      <div className="viewupdates">
        <div className="LatestUpdates" style={{ width: "50%" }}>
          <LatestUpdates />
        </div>
        <div className="FeaturedCrops" style={{ width: "50%", height: "100%" }}>
          <FeaturedCrops />
        </div>
      </div>
    </div>
  );
}
export default Homepage;
