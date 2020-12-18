import React from 'react';
import './App.css';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog';


const App = () => {
  
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estrogen</h1>
      </header>
      <main>
        {/* sending messages.json data to ChatLog props*/}
        <ChatLog chatMessages={messages}/>
      </main>
    </div>
  );
};

export default App;
