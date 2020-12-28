import React from 'react';
import PropTypes from 'prop-types';
import Timestamp from './Timestamp';
import './ChatEntry.css';


const ChatEntry = (props) => {
  let senderClass = 'chat-entry local'
  if (props.sender === 'Estragon') {
    senderClass = 'chat-entry remote'
  }

  return (
    <div className={senderClass}>
      <h2 className='entry-name'>{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className='entry-time'><Timestamp time={props.timeStamp} /></p>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
