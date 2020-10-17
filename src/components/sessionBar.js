import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import './sessionBar.css';
import Session from './session';
import AddButton from './addButton';

const sessionsDb = [
  { id: 0, status: false, completedDate: null },
  { id: 1, status: false, completedDate: null },
  { id: 2, status: false, completedDate: null },
  { id: 3, status: false, completedDate: null },
  { id: 4, status: false, completedDate: null },
  { id: 5, status: false, completedDate: null },
  { id: 6, status: false, completedDate: null },
  { id: 7, status: false, completedDate: null },
  { id: 8, status: false, completedDate: null },
  { id: 9, status: false, completedDate: null },
];

function SessionBar({ className }) {
  const [sessions, setSessions] = useState(sessionsDb);

  function allSessionsCompleted() {
    return !sessions.find((session) => session.status === false);
  }

  function completeSession(completedSession) {
    const newSessions = sessions.map((session) => {
      return session.id === completedSession.id
        ? {
            ...session,
            status: !session.status,
            completedDate: !session.status ? new Date() : null,
          }
        : { ...session };
    });
    setSessions(newSessions);
  }

  function createNewCard() {
    return setSessions(sessionsDb);
  }
  return (
    <div className={cx('SessionBar', className)}>
      {sessions.map((session, idx) => (
        <Session
          key={idx}
          sessionInfo={session}
          className={session.status && 'Session-completed'}
          completeSession={completeSession}></Session>
      ))}
      {allSessionsCompleted() && (
        <AddButton createNewCard={createNewCard}></AddButton>
      )}
    </div>
  );
}

export default SessionBar;
