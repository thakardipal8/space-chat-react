import React, { useState } from "react";
import ChatWindow from "../components/ChatWindow";
import UserList from "../components/UserList";
import users from "../data/userList";

const HomeContainer = (props) => {
  const { friendOf } = props;
  const [userName, setUserName] = useState("User 1");
  const [userPhotoUrl, setUserPhotoUrl] = useState("user-1.jpg");
  const [userId, setUserId] = useState(1);

  const handleUserIdChange = (selectedUserId) => {
    const user = users.filter((user) => user.userId === selectedUserId);
    if (user) {
      setUserName(user[0].userName);
      setUserPhotoUrl(user[0].userPhotoUrl);
      setUserId(user[0].userId);
    } else {
      const firstUser = users[0];
      setUserName(firstUser.userName);
      setUserPhotoUrl(firstUser.userPhotoUrl);
      setUserId(firstUser.userId);
    }
  };

  return (
    <div className="main-container">
      <div className="container chatApp">
        <div className="row chatApp-one">
          <UserList onUserChange={handleUserIdChange} friendOf={friendOf} />
          <ChatWindow
            userName={userName}
            userId={userId}
            userPhotoUrl={userPhotoUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
