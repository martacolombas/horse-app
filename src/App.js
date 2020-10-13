import React from 'react';
import './App.css';
import CardList from './components/cardList';
let cards = [1];

function App() {
  return (
    <div className="App">
      <CardList cards={cards}></CardList>
    </div>
  );
}

export default App;
