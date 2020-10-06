import React from 'react';
import cx from 'classnames';

function Avatar({ image, className }) {
  return (
    <div className={cx('Avatar', className)}>
      <img src={image} alt="" width="25px" />
    </div>
  );
}

export default Avatar;
