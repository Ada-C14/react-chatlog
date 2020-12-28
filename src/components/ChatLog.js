import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  let chatLogComponents = null;
  if (props.chatMessages && props.chatMessages.length > 0) {
    chatLogComponents = props.chatMessages.map ((message, i) => {
      return(
        <li key={i}>
          <ChatEntry sender={message.sender} body={message.body} timeStamp={message.timeStamp}/>
        </li>
      );
    });
  } else {
    chatLogComponents = () => {return(<li></li>)};
  }

  return(
    <ul className='chat-log'>
      {chatLogComponents}
    </ul>
  );
};

ChatLog.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatLog;