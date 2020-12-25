import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

function ChatLog(props) {
  const chatMessages = props.chatMessages.map(entry => <ChatEntry key={entry} sender={entry.sender} body={entry.body} timeStamp={entry.timestamp} />)
  return (
    <div className='chat-log'>
      {chatMessages}
    </div>
  )
}

export default ChatLog;
