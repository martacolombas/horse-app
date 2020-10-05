import React from 'react';
import cx from 'classnames';
import Card from 'card.js';
import './cardList.css';

function cardList({ cards }) {
  cards.map((card) => <Card cardInfo={card} className="CardList-item"></Card>);
}

export default cardList;
