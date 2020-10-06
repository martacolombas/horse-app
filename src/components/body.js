import React from 'react';
import cx from 'classnames';
import MainBody from './mainBody';
import DetailsBody from './detailsBody';

let sessions = [1, 2, 3];

function Body({ className }) {
  return (
    <div className={cx('Body', className)}>
      <MainBody></MainBody>
      <DetailsBody sessions={sessions}></DetailsBody>
    </div>
  );
}

export default Body;
