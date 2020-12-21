import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';


const ChatLog = (props) => {
    const chatComponents = props.chatMessages.map((message, i) => {
        return (
        <ChatEntry key={i} sender={message.sender} body={message.body} timeStamp={message.timeStamp} />
        ); 
    });
    
    return (
    <div className='chat-log'>{chatComponents}</div>
    );
};

ChatLog.propTypes = {
    chatMessages: PropTypes.array.isRequired
}

export default ChatLog;