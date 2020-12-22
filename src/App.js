import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';

const App = () => {
  console.log(chatMessages);

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog chatMessages={chatMessages} />
      </main>
    </div>
  );
};

export default App;
