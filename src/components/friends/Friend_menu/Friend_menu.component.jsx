import React from 'react';

import StarOutlineOutlinedIcon from '@material-ui/icons/StarOutlineOutlined';
import CancelPresentationOutlinedIcon from '@material-ui/icons/CancelPresentationOutlined';
import PersonAddDisabledOutlinedIcon from '@material-ui/icons/PersonAddDisabledOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

import './Friend_menu.styles.css';

const FriendMenu = () => (
    <div className='friend_menu'>
        <div className='friend_menu_container'>
            <div className='friend_menu_item'>
                <StarOutlineOutlinedIcon style={{transform: 'scale(1.3)', marginRight: '10px'}}/>
                <p style={{fontSize: '15px', fontWeight: '400px'}}>Favourites</p>
            </div>
            <div className='friend_menu_item'>
                <PersonAddDisabledOutlinedIcon style={{transform: 'scale(1.3)', marginRight: '10px'}}/>
                <p style={{fontSize: '15px', fontWeight: '400px'}}>Edit Friend List</p>
            </div>
            <div className='friend_menu_item'>
                <CancelPresentationOutlinedIcon style={{transform: 'scale(1.1)', marginRight: '10px'}}/>
                <p style={{fontSize: '15px', fontWeight: '400px'}}>Unfollow</p>
            </div>
            <div className='friend_menu_item'>
                <DeleteOutlinedIcon style={{transform: 'scale(1.3)', marginRight: '10px'}}/>
                <p style={{fontSize: '15px', fontWeight: '400px'}}>Unfriend</p>
            </div>
        </div>
    </div>
);

export default FriendMenu;