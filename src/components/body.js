import React, { useState } from 'react';
import cx from 'classnames';
import MainBody from './mainBody';
import DetailsBody from './detailsBody';
import './body.css';

function Body({ className }) {
  const [pastSessions, setPastSessions] = useState([1, 2, 3]);
  const [isDetailsVisible, setDetailsVisible] = useState(false);
  return (
    <div className={cx('Body', className)}>
      <MainBody></MainBody>
      <a
        href="#0"
        className="button"
        onClick={() => {
          isDetailsVisible ? setDetailsVisible(false) : setDetailsVisible(true);
        }}>
        See details
      </a>
      {isDetailsVisible && (
        <DetailsBody pastSessions={pastSessions}></DetailsBody>
      )}
    </div>
  );
}

export default Body;
