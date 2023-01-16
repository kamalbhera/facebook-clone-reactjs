import React from 'react';

import { Avatar } from '@material-ui/core';

import './sidebarRow.css';

const SidebarRow = ( { src, Icon, title } ) => (
  <div className="sidebarRow">
      { src && <Avatar src={src} /> }
      { Icon && <Icon /> }
      <h4>{title}</h4>
  </div>
)

export default SidebarRow;