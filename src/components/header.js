import React from 'react';
import Avatar from './avatar.js';
import Title from './title';
import pic from './test-pics/beauty-unicorn.png';
const text = 'This is my name for now';

function Header() {
  return (
    <div>
      <Avatar image={pic}></Avatar>
      <Title text={text}></Title>
    </div>
  );
}

export default Header;
