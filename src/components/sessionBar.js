import React from 'react';
import cx from 'classnames';
import './sessionBar.css';

function SessionBar({ className }) {
  return (
    <div className={cx('SessionBar', className)}>
      <p>9/10</p>
    </div>
  );
}

export default SessionBar;
