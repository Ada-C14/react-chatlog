import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const chatLogComponents = props.chatMessages.map((message, i) => {
        return(
            <ChatEntry 
            sender={message.sender}
            body={message.body}
            timeStamp={message.timeStamp}
            key={i}
            />
        )

    })
    return (
        <div>
            {chatLogComponents}
        </div>

    )

}
export default ChatLog;
