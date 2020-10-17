import React from 'react';
import cx from 'classnames';
import './addButton.css';

function AddButton({ className, createNewCard }) {
  return (
    <div
      className={cx('AddButton', className)}
      onClick={() => {
        createNewCard();
      }}>
      New Card
    </div>
  );
}

export default AddButton;
