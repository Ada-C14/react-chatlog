import React from 'react';
import PropTypes from 'prop-types';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  if (props.chatMessages.length > 0) {
    return(
      <ul className='chat-log'>
        {props.chatMessages.map((chat, index) => {
            return(
              <li key={chat.timeStamp}>
                <ChatEntry 
                  sender={chat.sender}
                  body={chat.body}
                  timeStamp={chat.timeStamp}
                  remoteSender={props.remoteSender} />
              </li>
            );
        })}
      </ul>
    );
  } else {
    return null;
  }
};

ChatLog.propTypes = {
  chatMessages: PropTypes.array.isRequired,
  remoteSender: PropTypes.string.isRequired
};

export default ChatLog;