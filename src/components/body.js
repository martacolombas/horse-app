import React from 'react';
import cx from 'classnames';

function Body({ className }) {
  return <div className={cx('Body', className)}>This is the body</div>;
}

export default Body;
