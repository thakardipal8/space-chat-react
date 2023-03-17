import React from "react";
import userList from "../data/userList";
import userImg from "../assets/user.png";

const UserList = () => {
  const renderUserList = () => {
    return userList.map((user) => (
      <div className="row userListBar-body" key={user.userId}>
        <div className="col-sm-3 col-xs-3 userListBar-userpic">
          <div className="user-pic">
            <img
              src={require(`../assets/${user.userPhotoUrl}`)}
              alt={user.userName}
            />
          </div>
        </div>
        <div className="col-sm-9 col-xs-9 userListBar-main">
          <div className="row">
            <div className="col-sm-8 col-xs-8 userListBar-name">
              <span className="user-name">{user.userName}</span>
              <span className="user-user-message-highlight">
                {user.lastMessage}
              </span>
            </div>
            <div className="col-sm-4 col-xs-4 pull-right userListBar-time">
              <span className="time-meta pull-right">
                {user.lastMessageTime}
              </span>
              {user.pendingRead > 0 ? (
                <span className="pending-user-message pull-right">
                  {user.pendingRead}
                </span>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
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
