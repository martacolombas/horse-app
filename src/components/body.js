import React from 'react';
import cx from 'classnames';
import MainBody from './mainBody';
import DetailsBody from './detailsBody';

function Body({ className }) {
  return (
    <div className={cx('Body', className)}>
      <MainBody></MainBody>
      <DetailsBody></DetailsBody>
    </div>
  );
}

export default Body;
