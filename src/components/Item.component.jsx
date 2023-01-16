import React from 'react';

import { Avatar } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import './Item.styles.css';

const Item = ({src, Icon, name, title, subtitle, arrow}) => (
    <div className='item'>
        { src && <Avatar src={src} style={{height: "60px", width: "60px"}}/> }
        <div className="icon-wrapper">
            { Icon && <Icon style={{ padding: '8px 8px 8px', height: "25px", width: "25px"}}/> }
        </div>
        <div className='title'>
            <h3>{name}</h3>
            <h4>{title}</h4>
            <h5 style={{color: 'gray'}}>{subtitle}</h5>
        </div>
        { arrow && <ArrowForwardIosIcon style={{marginLeft: 'auto', marginRight: "0", color: 'gray'}}/>}
    </div>
);

export default Item;