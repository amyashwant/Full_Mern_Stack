import axios from "axios";
import React, { useEffect, useState } from "react";
import "./conversation.css";

function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // console.log(currentUser);
  // console.log(conversation._id);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);
    console.log(friendId);
    const getUser = async () => {
      try {
        const res = await axios.get("/user?userId=" + friendId);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  // console.log(user.username)
  // console.log("dbubbu")

  return (
    <div className="conversation">
      <img
        src={user?.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"
        }
        alt=""
        className="conversationImg"
      />
      <div className="conversationName">{user?.username}</div>
    </div>
  );
}

export default Conversation;
