import React from 'react';
import cx from 'classnames';
import './session.css';

function Session({ className, sessionInfo, completeSession }) {
  return (
    <div
      className={cx('Session', className)}
      idx={sessionInfo[0]}
      onClick={() => completeSession(sessionInfo)}></div>
  );
}

export default Session;
