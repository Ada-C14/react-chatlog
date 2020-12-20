import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  console.log(chatMessages);


  return (
    <div id="App">
      <header>
        <h1>Secrets between {chatMessages[0].sender} and {chatMessages[1].sender} </h1>
      </header>
      <main>
        <ChatLog chatMessages={chatMessages} />
      </main>
    </div>
  );
};

export default App;
