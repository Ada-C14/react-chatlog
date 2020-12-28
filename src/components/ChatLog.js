import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = (props) => {
  const chatLogComponents = props.events.map ((message, i) => {
    return(
      <li key={i}>
        <ChatEntry sender={message.sender} body={message.body} timeStamp={message.timeStamp}/>
      </li>
    );
  });

  return(
    <ul className='chat-log'>
      {chatLogComponents}
    </ul>
  );
};

export default ChatLog;