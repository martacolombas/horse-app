import React from 'react';
import cx from 'classnames';
import './mainBody.css';
import SessionBar from './sessionBar';

function MainBody({ className }) {
  return (
    <div className={cx('MainBody', className)}>
      <div className="MainBody-session">
        Las session was on Monday last week
      </div>
      <SessionBar></SessionBar>
    </div>
  );
}

export default MainBody;
