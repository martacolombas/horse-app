import React from 'react';
import cx from 'classnames';
import Card from './card.js';
import './cardList.css';

function CardList({ cards, className }) {
  return (
    <div className={cx('CardList', className)}>
      {cards.map((card) => (
        <Card cardInfo={card} className="CardList-item"></Card>
      ))}
    </div>
  );
}

export default CardList;
