import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/userContext/Context";
function Navigation() {
  const { user } = useContext(Context);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <h2>Waptech AgriConnect Limited</h2>

      <p style={{ fontSize: "25px" }}>
        Enjoy the Amazing content of the Agriconnect Service. Get to share
        knowlegde, content and the resources with your peers.{" "}
        {!user && <Link to="/login">login to</Link>} get started
      </p>
    </div>
  );
}
export default Navigation;
