import React, { useState } from "react";
import ChatWindow from "../components/ChatWindow";
import UserList from "../components/UserList";
import users from "../data/userList";

const HomeContainer = () => {
  const [userName, setUserName] = useState("User 1");
  const [userPhotoUrl, setUserPhotoUrl] = useState("user-1.jpg");

  const handleUserIdChange = (selectedUserId) => {
    const user = users.filter((user) => user.userId === selectedUserId);
    if (user) {
      setUserName(user[0].userName);
      setUserPhotoUrl(user[0].userPhotoUrl);
    } else {
      const firstUser = users[0];
      setUserName(firstUser.userName);
      setUserPhotoUrl(firstUser.userPhotoUrl);
    }
  };

  return (
    <div className="main-container">
      <div className="container chatApp">
        <div className="row chatApp-one">
          <UserList onUserChange={handleUserIdChange} />
          <ChatWindow userName={userName} userPhotoUrl={userPhotoUrl} />
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
