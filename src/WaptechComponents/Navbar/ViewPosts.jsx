import React, { useState, useEffect, useContext } from "react";
import axios, { Axios } from "axios";
import { ApiDomain } from "../../utils/Utils";
import { Context } from "../context/userContext/Context";
import { Link } from "react-router-dom";
function ViewPosts() {
  const { user } = useContext(Context);
  const [posts, setposts] = useState([]);
  const getposts = async () => {
    const res = await axios.get(`${ApiDomain}/posts`, {
      headers: { Authorization: `${user.token}` },
    });
    setposts(res.data);
  };
  useEffect(() => {
    getposts();
  }, []);
  const handleDelete = async (PostID) => {
    await axios
      .delete(`${ApiDomain}/posts/${PostID}`, {
        headers: { Authorization: `${user.token}` },
      })
      .then((res) => {
        getposts();
        alert(res.data.message);
      })
      .catch(({ response }) => {
        alert(response.data.error);
      });
  };
  const handleUpdate = async () => {};
  return (
    <div className="Viewposts">
      {posts &&
        posts.map((post, index) => {
          return (
            <div className="posts" key={index}>
              <p>{post.Content}</p>
              <div>
                <Link onClick={() => handleDelete(post.PostID)}>Del</Link>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ViewPosts;
