import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  console.log(chatMessages);

  // assume that all of first sender's messages are compiled into a single bubble
  // before second sender sends a message
  const senders = chatMessages.length < 2 ? 'Anonymous and Anonymous' : `${chatMessages[0].sender} and ${chatMessages[1].sender}`;

  return (
    <div id="App">
      <header>
        <h1>Chat between {senders} </h1>
      </header>
      <main>
        <ChatLog chatMessages = {chatMessages}/>
      </main>
    </div>
  );
};

export default App;
