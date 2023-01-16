import React from 'react';

import { Avatar } from '@material-ui/core';

import './Story.css';

const Story = ({ image, profileSrc, title }) => (
  <div className="story" style={{ backgroundImage: `url(${image})` }}>
      <Avatar className="story_avatar" src = {profileSrc} />
      <h4>{title}</h4>
  </div>
);

export default Story;