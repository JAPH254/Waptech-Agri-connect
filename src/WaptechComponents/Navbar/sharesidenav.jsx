import { Link } from "react-router-dom";
import { Context } from "../context/userContext/Context";
import { useContext } from "react";
function Sharesidenav() {
  const { user } = useContext(Context);
  return (
    <div className="sidenav">
      <h2>Profile</h2>
      <span>
        <img
          width={70}
          height={70}
          style={{
            height: "90%",
            width: "100%",
            borderRadius: "50%",
            border: "green 5px solid",
          }}
          src="/src/assets/istockphoto-1294915041-1024x1024.jpg"
          alt="No Image"
        />
      </span>
      <h3>Username</h3>
      {user.Username}
      <h4>User Email</h4>
      {user.Email}
      <h4>Role</h4>
      {user.Role}
      <div
        style={{
          color: "black",
          padding: "60px",
          fontSize: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <p>Interested to hear from us always?</p>
        <Link to="/Contact Us">Get intouch with us on social medis</Link>
      </div>
    </div>
  );
}

export default Sharesidenav;
