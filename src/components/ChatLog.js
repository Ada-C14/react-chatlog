import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry'
import './ChatLog.css';

const ChatLog = (props) => {
  if (props.chatEntries === []) {
    return (
      <div className='chat-log'>
        No Messages
      </div>
    );
  } else {
    const chatLogEntries = props.chatEntries.map((entry) => {
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
  chatEntries: PropTypes.arrayOf(PropTypes.object)
};

export default ChatLog;