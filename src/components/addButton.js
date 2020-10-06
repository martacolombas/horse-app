import React from 'react';
import cx from 'classnames';
import './addButton.css';

function AddButton({ className }) {
  return (
    <div className={cx('Counter', className)}>
      <button>Add a session</button>
    </div>
  );
}

export default AddButton;
