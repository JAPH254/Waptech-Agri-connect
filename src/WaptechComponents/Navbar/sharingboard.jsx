import React from "react";
import { useState } from "react";
import CreatePost from "./CreatPost";
import ViewPosts from "./ViewPosts";
import { Link } from "react-router-dom";
function Sharingboard() {
  const [showComponent1, setShowComponent1] = useState(true);
  const [showComponent2, setShowComponent2] = useState(false);

  const showComponentOne = () => {
    setShowComponent1(true);
    setShowComponent2(false);
  };

  const showComponentTwo = () => {
    setShowComponent1(false);
    setShowComponent2(true);
  };
  return (
    <div className="Sharing">
      <div className="sharingNav">
        <div
          className="navContent"
          style={{
            fontSize: "20px",
            display: "flex",
            gap: "3rem",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <h2 style={{ borderBottom: "black solid 1px" }}>Agriconnect Chart</h2>
          <p style={{ textAlign: "center", color: "darkblue" }}>
            Meet The Amazing Agricultural practitioners globally by Posting your
            opinion, Ideas or even the suggesion on the Agriconnect Platform
          </p>
        </div>
        <div
          style={{
            gap: "4rem",
            display: "flex",
            justifyContent: "center",
            fontWeight: "bolder",
          }}
        >
          <Link onClick={showComponentOne}>New Post</Link>
          <Link onClick={showComponentTwo}>View Posts</Link>
        </div>
      </div>
      <div className="UIcomponents">
        {showComponent1 && <CreatePost />}
        {showComponent2 && <ViewPosts />}
      </div>
    </div>
  );
}

export default Sharingboard;
