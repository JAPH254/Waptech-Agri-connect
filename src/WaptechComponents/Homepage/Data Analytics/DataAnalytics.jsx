import PrecipitationRate from "./PrecipitationRate";
import weatherTrends from "./weathertrends";

function DataAnalytics() {
  return (
    <div className="DataAnalytics">
      <p>Data Analytics</p>
      <PrecipitationRate />
      <>
        <weatherTrends />
      </>
    </div>
  );
}
export default DataAnalytics;
