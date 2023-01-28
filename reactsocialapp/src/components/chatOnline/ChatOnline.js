import axios from "axios";
import React, { useEffect, useState } from "react";
import "./chatOnline.css";
function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  console.log(currentId);
  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get("/user/friends/" + currentId);
      setFriends(res.data);
    };
    getFriends();
  }, [currentId]);
  // console.log(friends);

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [onlineUsers, friends]);
  console.log(onlineUsers);

  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        `conversations/find/${currentId}/${user._id}`
      );
      setCurrentChat(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="chatOnline">
        {onlineFriends.map((o) => (
          <div className="chatOnlineFriend" onClick={() => handleClick(o)}>
            <div className="chatOnlineImgContainer">
              <img
                className="chatOnlineImg"
                src={
                  o?.profilePicture
                    ? PF + o.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
              <div className="chatOnlineBadge"></div>
            </div>
            <span className="chatOnlineName">{o?.username} </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default ChatOnline;
