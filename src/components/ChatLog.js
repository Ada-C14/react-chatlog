import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = (props) => {
    const messages = props.messages.map((message, i) => {
        return(
            <ChatEntry key={i} sender = {message.sender} body = {message.body} timeStamp = {message.timeStamp}/>
        );
    });
    
    return (
        <section className = "chat-log">
            {messages}
        </section>
    );
};

export default ChatLog;