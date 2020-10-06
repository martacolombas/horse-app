import React from 'react';
import cx from 'classnames';
import './mainBody.css';

function MainBody({ className }) {
  return (
    <div className={cx('MainBody', className)}>
      <div className="MainBody-counter">9/10</div>
      <div className="MainBody-session">
        Las session was on Monday last week
      </div>
    </div>
  );
}

export default MainBody;
