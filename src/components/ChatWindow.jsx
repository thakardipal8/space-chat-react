import { useEffect, useState } from "react";
import chats from "../data/chat";
import ChatBox from "./ChatBox";

const ChatWindow = (props) => {
  const { userName, userPhotoUrl, userId } = props;
  const [userChat, setUserChat] = useState([]);

  useEffect(() => {
    const userChats = chats.filter(
      (chat) => chat.sender === userId || chat.receiver === userId
    );
    setUserChat(userChats);
  }, [userId]);

  return (
    <div className="col-sm-8 chatWindow">
      <div className="row chatHead">
        <div className="col-sm-1 col-md-1 col-xs-1 chatHead-userpic">
          <div className="chatHead-user-pic">
            <img src={require(`../assets/${userPhotoUrl}`)} alt={userName} />
          </div>
        </div>
        <div className="col-sm-8 col-xs-7 chatHead-name">
          <span className="chatHead-user-name">{userName}</span>
        </div>
        <div className="col-sm-1 col-xs-1  chatHead-dot pull-right">
          <i className="fa fa-search head-search"></i>
          <i
            className="fa fa-ellipsis-v fa-2x  pull-right"
            aria-hidden="true"
          ></i>
        </div>
      </div>
      <div className="row user-message" id="chatWindow">
        <div className="row user-message-previous">
          <div className="col-sm-12 previous">
            <span id="dipal8" name="20">
              Today
            </span>
          </div>
        </div>

        {userChat.map((chat) => (
          <ChatBox
            key={chat.chatId}
            message={chat.message}
            time={chat.sendTime}
            isSent={chat.receiver === userId}
          />
        ))}
      </div>
      <div className="row respond">
        <div className="col-sm-9 col-xs-9 respond-main">
          <textarea
            className="form-control"
            rows="1"
            id="comment"
            placeholder="Type a user-message..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
