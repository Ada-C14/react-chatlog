import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = (props) => {
    const localUser = props.messages[0].sender;
    
    const messages = props.messages.map((message, i) => {
        return(
            <ChatEntry key={i} sender = {message.sender} body = {message.body} timeStamp = {message.timeStamp} localUser = {localUser}/>
        );
    });
    
    return (
        <section className = "chat-log">
            {messages}
        </section>
    );
};

export default ChatLog;