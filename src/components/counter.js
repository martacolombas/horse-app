import React from 'react';
import cx from 'classnames';
import './counter.css';

function Counter({ className }) {
  return (
    <div className={cx('Counter', className)}>
      <p>9/10</p>
    </div>
  );
}

export default Counter;
