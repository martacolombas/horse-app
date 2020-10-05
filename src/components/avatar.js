import React from 'react';
import cx from 'classnames';

function Avatar({ image, className }) {
  return (
    <div className={cx('Avatar', className)}>
      {' '}
      Here goes my profile imageture
      <img src={image} alt="" />
    </div>
  );
}

export default Avatar;
