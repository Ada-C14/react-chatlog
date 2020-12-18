import React from 'react';
import PropTypes from 'prop-types';
import Timestamp from './Timestamp';
import './ChatEntry.css';

//taking in the props from ChatLog
const ChatEntry = ({sender, body, timeStamp}) => {
  let senderClass = 'chat-entry local' //Adding styling to sender
  if (sender === 'Estragon') {
    senderClass = 'chat-entry remote'
  }

  return (
    <div className={senderClass}>
      <h2 className='entry-name'>{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        {/* calling Timestamp function? */}
        <p className='entry-time'><Timestamp time={timeStamp} /></p> 
      </section>
    </div>
  )
}

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
}

export default ChatEntry;
