import React from 'react';
import ProfilePicture from './profile-pic';
import Title from './title';
import pic from './test-pics/beauty-unicorn.png';
const text = 'This is my name for now';

function Header() {
  return (
    <div>
      <ProfilePicture image={pic}></ProfilePicture>
      <Title text={text}></Title>
    </div>
  );
}

export default Header;
