import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const remoteSender = 'Estragon'

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>ch@tter with {remoteSender}</h1>
      </header>
      <main>
        <ChatLog chatMessages={chatMessages} remoteSender={remoteSender} />
      </main>
    </div>
  );
};

export default App;
