import React from "react";
import userList from "../data/userList";
import userImg from "../assets/user.png";
import Users from "./Users";

const UserList = (props) => {
  const { onUserChange, friendOf } = props;

  const handleUserChange = (selectedUserId) => {
    onUserChange(selectedUserId);
  };

  const renderUserList = () => {
    const users = userList.filter((user) => user.friendOf === friendOf);
    return users.map((user) => (
      <Users
        key={user.userId}
        userId={user.userId}
        userPhotoUrl={user.userPhotoUrl}
        userName={user.userName}
        lastMessage={user.lastMessage}
        lastMessageTime={user.lastMessageTime}
        pendingRead={user.pendingRead}
        onUserChange={handleUserChange}
      />
    ));
  };
  return (
    <div className="col-sm-4 side">
      <div className="left-side">
        <div className="row chatHead mobile-search">
          <div className="col-sm-2 col-xs-2 chatHead-userpic">
            <div className="chatHead-user-pic">
              <img src={userImg} alt="user" />
            </div>
          </div>
          <div className="col-sm-10 mainSearch-inner">
            <div className="form-group has-feedback">
              <span className="glyphicon glyphicon-search form-control-feedback"></span>
              <input
                id="userSearch"
                type="text"
                className="form-control"
                name="userSearch"
                placeholder="Search for users"
              />
            </div>
          </div>
        </div>
        <div className="row userListBar">{renderUserList()}</div>
      </div>
    </div>
  );
};

export default UserList;
