import React from "react";
import "./message.css";
import {format} from "timeago.js"
function Message({message,own}) {
  return (
    <div className={own?"message own":"message"}>
      <div className="messageTop">
        <img src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="messageImg" />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
}

export default Message;
