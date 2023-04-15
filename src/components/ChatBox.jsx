const ChatBox = (props) => {
  const { message, time, isSent } = props;
  return (
    <div className="row user-message-body">
      <div className={`d-flex justify-content-${isSent ? "end" : "start"}`}>
        <div className="col-sm-12 user-message-main-receiveBox">
          <div className="receiveBox">
            <div className="user-message-text">{message}</div>
            <span className="user-message-time pull-right">{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
