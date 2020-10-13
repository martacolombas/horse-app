import React from 'react';
import cx from 'classnames';
import './detailsBody.css';

function DetailsBody({ className, pastSessions }) {
  return (
    <div className={cx('DetailsBody', className)}>
      {pastSessions.map((session) => {
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
