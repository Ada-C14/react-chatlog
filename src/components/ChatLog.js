import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';


const ChatLog = ((props) => {
  console.log(props)
  const chatComponents = props.chatMessages.map((message, i) => {
    return(
      <ChatEntry key={i} sender={message.sender} body={message.body} timeStamp={message.timeStamp} />
    );
  });
  
  return (
    <div className="chat-log">{chatComponents}</div>
  );
});

export default ChatLog;