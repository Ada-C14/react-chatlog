import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const uniqSenders = new Set();
  chatMessages.forEach(message => uniqSenders.add(message.sender));
  const senders = Array.from(uniqSenders);

  const printSenders = senders => {
    if (senders.length === 1) {
      return senders[0]
    } else if (senders.length === 2) {
      return `${senders[0]} and ${senders[1]}`
    } else {
      let string = ''
      for(let i = 0; i < senders.length - 1; i += 1) {
        string += `${senders[i]}, `
      }
      string += `and ${senders.pop()}`
      return string
    }
  }

  return (
    <div id="App">
      <header>
        <h1>Chat between {printSenders(senders)}</h1>
      </header>
      <main>
        <ChatLog chatEntries={chatMessages} />
      </main>
    </div>
  );
};

export default App;
