import React from 'react';
import ChatEntry from './ChatEntry.js';
import './ChatLog.css';

const ChatLog = props => {
  const messageComponents = props.chatMessages.map((message, i) => {
    return (
      <ChatEntry key={i} sender={message.sender} body={message.body} timeStamp={message.timeStamp} />
    );
  });

  return (
    <div className='chat-log'>{messageComponents}</div>
  );
};

export default ChatLog;