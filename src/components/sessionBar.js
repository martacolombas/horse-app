import React, { useState } from 'react';
import cx from 'classnames';
import './sessionBar.css';
import Session from './session';

const sessionsDb = {
  0: { status: false, completedDate: null },
  1: { status: false, completedDate: null },
  2: { status: false, completedDate: null },
  3: { status: false, completedDate: null },
  4: { status: false, completedDate: null },
  5: { status: false, completedDate: null },
  6: { status: false, completedDate: null },
  7: { status: false, completedDate: null },
  8: { status: false, completedDate: null },
  9: { status: false, completedDate: null },
};

function SessionBar({ className }) {
  const [sessions, setSessions] = useState(Object.entries(sessionsDb));

  function completeSession(session) {
    let numberOfSession = session[0];
    let newSessions = sessions;
    if (sessions[numberOfSession][1].status === false) {
      sessions[numberOfSession][1].status = true;
      sessions[numberOfSession][1].completedDate = new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, '/');
    } else {
      sessions[numberOfSession][1].status = false;
      sessions[numberOfSession][1].completedDate = null;
    }
    setSessions(newSessions);
    console.log(sessions);
  }

  return (
    <div className={cx('SessionBar', className)}>
      {sessions.map((session, idx) => (
        <Session
          key={idx}
          sessionInfo={session}
          completeSession={completeSession}></Session>
      ))}
    </div>
  );
}

export default SessionBar;
