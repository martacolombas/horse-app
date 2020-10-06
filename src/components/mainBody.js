import React from 'react';
import cx from 'classnames';
import './mainBody.css';
import Counter from './counter';
import AddButton from './addButton';

function MainBody({ className }) {
  return (
    <div className={cx('MainBody', className)}>
      <div className="MainBody-session">
        Las session was on Monday last week
      </div>
      <Counter></Counter>
      <AddButton></AddButton>
    </div>
  );
}

export default MainBody;
