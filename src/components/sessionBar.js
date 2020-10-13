import React, { useState } from 'react';
import cx from 'classnames';
import './sessionBar.css';
import Session from './session';

function SessionBar({ className }) {
  const [sessions, setSessions] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  sessions.forEach((session) => console.log(sessions.indexOf(session)));
  return (
    <div className={cx('SessionBar', className)}>
      {sessions.map((session) => (
        <Session></Session>
      ))}
    </div>
  );
}

export default SessionBar;
