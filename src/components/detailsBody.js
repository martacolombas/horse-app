import React from 'react';
import cx from 'classnames';
import './detailsBody.css';

function DetailsBody({ className, sessions }) {
  return (
    <div className={cx('DetailsBody', className)}>
      {sessions.map((session) => {
        return (
          <div className="DetailsBody-session">
            <p>Sammy</p>
            <p>Doma</p>
            <p>fecha</p>
          </div>
        );
      })}
    </div>
  );
}

export default DetailsBody;
