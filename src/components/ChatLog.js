import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = ((props) => {
  // console.log(props)
  
  //Returning new array of messages, which will include styling and methods (call to Timestamp from ChatEntry) from ChatEntry?
  const chatComponents = props.chatMessages.map((message, i) => {
      
    return(
      <ChatEntry
        key = {i} //coudln't think of a good key from provided data. Folks could have same name. 
        sender = {message.sender}
        body = {message.body}
        timeStamp = {message.timeStamp}
        />
    );

  });

  return (
    <section className = "chat-log">
    {chatComponents}
    </section>
  );

});

export default ChatLog;



