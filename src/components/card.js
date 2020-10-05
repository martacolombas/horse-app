import React from 'react';
import Header from './header.js';
import Body from './body';
import cx from 'classnames';
import './card.css';

function Card({ cardInfo, className }) {
  return (
    <div className={cx('Card', className)}>
      <Header></Header>
      <Body></Body>
    </div>
  );
}

export default Card;
