import React from 'react';

import { Avatar, IconButton } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Divider } from '@material-ui/core';
import { ProfileTooltip } from '../Tooltip.component';
import Floatingdesc from '../Floatingdesc';
import FriendMenu from '../friends/Friend_menu/Friend_menu.component';

import './Friend.css';

const Friend = ({username, profilePic, mutualFriends}) => {
    return (
        <div className='friends_container'>
            <div className='friend_container'>
                <div className='friend'>
                    <ProfileTooltip
                        title={
                            <>
                                <Floatingdesc
                                    profilepic={profilePic} 
                                    username={username}
                                />
                            </>
                        }
                            
                        interactive
                    >
                        <Avatar className='friend_profile_avatar' src={profilePic} style={{marginRight: '35px', transform: 'scale(1.8)'}}/>
                    </ProfileTooltip>
                    <div className='friend_text_data'>
                        <ProfileTooltip
                            title={
                                <>
                                    <Floatingdesc
                                        profilepic={profilePic} 
                                        username={username}
                                    />
                                </>
                            }
                                
                            interactive
                        >
                            <p className='friend_profile_text' style={{fontWeight: '500px'}}>{username}</p>
                        </ProfileTooltip>
                        <p style={{fontSize: '11px',color: 'gray'}}>{mutualFriends} mutual friends</p>
                    </div>
                </div>
                <ProfileTooltip
                    title={
                        <>
                            <FriendMenu/>
                        </>
                    }
                    interactive
                >
                    <IconButton>
                        <MoreHorizIcon/>
                    </IconButton>
                </ProfileTooltip>
            </div>
            <Divider style={{marginTop: '25px'}}/>
        </div>
    );
}

export default Friend;