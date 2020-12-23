import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry'

const App = () => {
  console.log(chatMessages);

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry sender="Joe Biden" body="Get out by 8am.  I'll count the silverware" timeStamp="2018-05-18T22:12:03Z"/>

      </main>
    </div>
  );
};

export default App;
