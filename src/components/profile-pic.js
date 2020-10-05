import React from 'react';

function ProfilePicture({ image }) {
  return (
    <div>
      {' '}
      Here goes my profile imageture
      <img src={image} alt="" />
    </div>
  );
}

export default ProfilePicture;
