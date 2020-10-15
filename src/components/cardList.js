import React from 'react';
import cx from 'classnames';
import Card from './card.js';
import './cardList.css';

function CardList({ cards, className }) {
  return (
    <div className={cx('CardList', className)}>
      {cards.map((card, idx) => (
        <Card cardInfo={card} className="CardList-item" key={idx}></Card>
      ))}
    </div>
  );
}

export default CardList;
