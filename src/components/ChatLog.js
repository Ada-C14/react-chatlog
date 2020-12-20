import { render } from '@testing-library/react';
import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {

  const chatComponents = props.chatMessages.map ((chat,i) => {
    return (
      <ChatEntry 
        key={i}
        sender={chat.sender}
        body={chat.body}
        timeStamp={chat.timeStamp}
      />
    )
  })

  return(
    <div className="chat-log">
      {chatComponents}
    </div>
    
  )
}


export default ChatLog;