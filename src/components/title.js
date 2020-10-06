import React from 'react';
import cx from 'classnames';
import './title.css';

function Title({ text, className }) {
  return (
    <div className={cx('Title', className)}>
      <p>{text}</p>
    </div>
  );
}

export default Title;
