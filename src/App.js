import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog.js';
import chatMessages from './data/messages.json';

const App = () => {
  console.log(chatMessages);

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        <ChatLog chatMessages={chatMessages} />
      </main>
    </div>
  );
};

export default App;
