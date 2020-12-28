import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog  = (props) => {
    console.log(props)
    
    const messages = props.chatMessages.map((message, i) => {
        return <ChatEntry key={i} sender={message.sender} body={message.body} timeStamp={message.timeStamp} />
    });

    return (
        <section className="chat-log">
            {messages}
        </section>
    )
};

ChatLog.propTypes = {
    messages: PropTypes.array.isRequired,
};

export default ChatLog;