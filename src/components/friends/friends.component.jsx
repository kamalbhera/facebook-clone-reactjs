import React, { useState } from 'react';

import {Button} from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Friend from './Friend';
import FRIENDS_DATA from './Friends';

import './friends.styles.css';

const FriendList = () => {

    const [friends,setfriend]=useState(FRIENDS_DATA);

    return(
        <div className='friend_list'>
            <div className='friends_container'>
                <div className='friends_top'>
                    <h3 style={{fontSize: '17px'}}>Friends</h3>
                    <div className='friends_top_right'>
                        <div className='friends_option'>
                            <p style={{color: '#2e81f4', fontWeight: 'bold'}}>Friend requests</p>
                        </div>
                        <div className='friends_option'>
                            <p style={{color: '#2e81f4', fontWeight: 'bold'}}>Find Friends</p>
                        </div>
                        <div className='friends_option_more'>
                            <Button>
                                <MoreHorizIcon/>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='friends_middle'>
                    <div className='friends_middle_option friends_middle_option--active'>
                        <p style={{padding: '15px 15px 15px 15px', fontWeight: '500px'}}>All Friends</p>
                    </div>
                    <div className='friends_middle_option'>
                        <p style={{padding: '15px 15px 15px 15px', fontWeight: '500px'}}>Birthdays</p>
                    </div>
                    <div className='friends_middle_option'>
                        <p style={{padding: '15px 15px 15px 15px', fontWeight: '500px'}}>Work</p>
                    </div>
                    <div className='friends_middle_option'>
                        <p style={{padding: '15px 15px 15px 15px', fontWeight: '500px'}}>High School</p>
                    </div>
                    <div className='friends_middle_option'>
                        <p style={{padding: '15px 15px 15px 15px', fontWeight: '500px'}}>Current City</p>
                    </div>
                    <div className='friends_middle_option'>
                        <p style={{padding: '15px 15px 15px 15px', fontWeight: '500px'}}>Home Town</p>
                    </div>
                    <div className='friends_middle_option'>
                        <p style={{padding: '15px 15px 15px 15px', fontWeight: '500px'}}>Followers</p>
                    </div>
                    <div className='friends_middle_option'>
                        <p style={{padding: '15px 15px 15px 15px', fontWeight: '500px'}}>Following</p>
                    </div>
                </div>
                <div className='friends_bottom'>
                    <div className='friend_bottom_container'>
                        {
                            friends.map((friend,index) => (
                                <Friend username={friend.username} profilePic={friend.profilePic} mutualFriends={friend.mutualFriends}/>
                            ))
                        }
                    </div>
                    <div className='intro_button'>
                        <Button type="submit" onClick={()=>{}}>
                            <div>
                                <p style={{textTransform: 'none', fontWeight: 'bold'}}>See All...</p>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FriendList;