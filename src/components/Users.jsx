import React, { useState } from "react";
const Users = (props) => {
  const {
    userId,
    userPhotoUrl,
    userName,
    lastMessage,
    lastMessageTime,
    pendingRead,
    onUserChange,
  } = props;
  const [pendingReadMessages, setPendingReadMessages] = useState(pendingRead);

  const handleUserClick = () => {
    onUserChange(userId);
    setPendingReadMessages(0);
  };

  return (
    <div
      className="row userListBar-body"
      key={userId}
      onClick={handleUserClick}
    >
      <div className="col-sm-3 col-xs-3 userListBar-userpic">
        <div className="user-pic">
          <img src={require(`../assets/${userPhotoUrl}`)} alt={userName} />
        </div>
      </div>
      <div className="col-sm-9 col-xs-9 userListBar-main">
        <div className="row">
          <div className="col-sm-8 col-xs-8 userListBar-name">
            <span className="user-name">{userName}</span>
            <span className="user-user-message-highlight">{lastMessage}</span>
          </div>
          <div className="col-sm-4 col-xs-4 pull-right userListBar-time">
            <span className="time-meta pull-right">{lastMessageTime}</span>
            {pendingReadMessages > 0 ? (
              <span className="pending-user-message pull-right">
                {pendingReadMessages}
              </span>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
