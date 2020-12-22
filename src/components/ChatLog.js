import React from 'react';
import PropTypes from 'prop-types';
import './ChatLog.css';
import ChatEntry from './components/ChatEntry';

const ChatLog = (allChats) => {
  return(
    <ul className='chat-log'>
      {allChats.map((chat, index) => {
        return(
          <li key={chat.timeStamp}>
            <ChatEntry 
              sender={chat.sender}
              body={chat.body}
              timeStamp={chat.timeStamp} />
          </li>
        );
      })}
    </ul>
  );
};

ChatLog.propTypes = {

};

export default ChatLog;