import user1Img from "../assets/user-1.jpg";
const ChatWindow = () => {
  return (
    <div className="col-sm-8 chatWindow">
      <div className="row chatHead">
        <div className="col-sm-1 col-md-1 col-xs-1 chatHead-userpic">
          <div className="chatHead-user-pic">
            <img src={user1Img} alt="user-1" />
          </div>
        </div>
        <div className="col-sm-8 col-xs-7 chatHead-name">
          <span className="chatHead-user-name">User 1</span>
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

        <div className="row user-message-body">
          <div className="d-flex justify-content-start">
            <div className="col-sm-12 user-message-main-receiveBox">
              <div className="receiveBox">
                <div className="user-message-text">Good Morning!</div>
                <span className="user-message-time pull-right">9:45 AM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row user-message-body">
          <div className="d-flex justify-content-end">
            <div className="col-sm-12 user-message-main-sendBox">
              <div className="sendBox">
                <div className="user-message-text">Good evening...</div>
                <span className="user-message-time pull-right">5:31 PM</span>
              </div>
            </div>
          </div>
        </div>
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
