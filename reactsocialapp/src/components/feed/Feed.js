import React, { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
// import { Posts } from "../../dummyData";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
  console.log(user._id);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/post/profile/" + username)
        : await axios.get("/post/timeline/" + user._id);
      // console.log(res.data);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);

  return (
    <div className="feed">
      {(!username || username === user.username) && <Share />}
      {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}
    </div>
  );
}

export default Feed;
