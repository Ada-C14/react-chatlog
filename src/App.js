import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const user1 = chatMessages[0].sender;
  const user2 = chatMessages[1].sender;

  return (
    <div id="App">
      <header>
        <h1>Chat between {user1} and {user2}</h1>
      </header>
      <main>
        <ChatLog chatMessages={chatMessages}/>
      </main>
    </div>
  );
};

export default App;
