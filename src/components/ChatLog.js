import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = (props) => {
  return (
    props.chatMessages.map((msg,i) => {
      return (
        <div className="chat-log" key={i}>
          <ChatEntry 
            sender={msg.sender}
            body={msg.body} 
            timeStamp={msg.timeStamp} />
        </div>
      )
    })
  );
}

export default ChatLog