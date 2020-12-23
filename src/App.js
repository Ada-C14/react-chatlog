import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog.js';
import chatMessages from './data/messages.json';

const App = () => {
  console.log(chatMessages);

  const sender1 = chatMessages[0].sender;
  const sender2 = chatMessages.filter(msg => msg.sender != sender1)[0].sender;

  return (
    <div id="App">
      <header>
        <h1>Chat between {sender1} and {sender2}</h1>
      </header>
      <main>
        <ChatLog chatMessages={chatMessages} />
      </main>
    </div>
  );
};

export default App;
