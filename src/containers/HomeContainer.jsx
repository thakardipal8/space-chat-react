import ChatWindow from "../components/ChatWindow";
import UserList from "../components/UserList";

const HomeContainer = () => {
  return (
    <div className="main-container">
      <div className="container chatApp">
        <div className="row chatApp-one">
          <UserList />
          <ChatWindow />
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
