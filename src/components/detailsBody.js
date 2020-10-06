import React from 'react';
import cx from 'classnames';
import './detailsBody.css';

function DetailsBody({ className }) {
  return (
    <div className={cx('DetailsBody', className)}>This is the DetailsBody</div>
  );
}

export default DetailsBody;
