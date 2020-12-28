import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry'
import './ChatLog.css';

const ChatLog = (props) => {
  if (props.chatMessages.length === 0) {
    return (
      <div className='chat-log'>
        No Messages
      </div>
    );
  } else {
    const chatLogEntries = props.chatMessages.map((entry) => {
      return (
        <ChatEntry 
        sender={entry.sender} 
        body={entry.body} 
        timeStamp={entry.timeStamp}
        key={entry.timeStamp} />
      );
    });
  
    return (
      <div className='chat-log'>
        {chatLogEntries}
      </div>
    );
  }
};

ChatLog.propTypes = {
  chatMessages: PropTypes.arrayOf(PropTypes.object)
};

export default ChatLog;