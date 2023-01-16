import React from 'react';

import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import CancelPresentationOutlinedIcon from '@material-ui/icons/CancelPresentationOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import BlockOutlinedIcon from '@material-ui/icons/BlockOutlined';
import AnnouncementOutlinedIcon from '@material-ui/icons/AnnouncementOutlined';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';

import Divider from '@material-ui/core/Divider';

import './Postmenu.css';

const Postmenu = ({username}) => (
    <div className='Postmenu'>
        <div className='container'>
            <div className='postmenu_top'>
                <TurnedInNotOutlinedIcon style={{ height: '45px', width: '35px', color: 'rgb(88, 81, 81)'}}/>
                <div>
                    <h4 style={{marginLeft: '10px', fontSize: '13px', fontWeight: 'normal'}}>Save post</h4>
                    <h5 style={{color: 'gray', marginLeft: '10px', fontSize: '10px', marginTop: '2px'}}>Add this to your saved items.</h5>
                </div>
            </div>
            <Divider/>
            <div className='postmenu_middle'>
                <div className='middle_content'>
                    <LinkOutlinedIcon style={{ height: '45px', width: '35px', color: 'rgb(88, 81, 81)'}}/>
                    <h4 style={{marginLeft: '10px', marginTop: '15px' , fontSize: '13px', fontWeight: 'normal'}}>Copy link</h4>
                </div>
                <div className='middle_content'>
                    <NotificationsOutlinedIcon style={{ height: '45px', width: '35px', color: 'rgb(88, 81, 81)'}}/>
                    <div>
                        <h4 style={{marginLeft: '10px', marginTop: '14px', fontSize: '13px', fontWeight: 'normal'}}>Turn on notifications for this post</h4>
                    </div>
                </div>
            </div>
            <Divider/>
            <div className='postmenu_bottom'>
                <div className='bottom_content'>
                    <CancelPresentationOutlinedIcon style={{ height: '45px', width: '35px', color: 'rgb(88, 81, 81)'}}/>
                    <div>
                        <h4 style={{marginLeft: '10px', fontSize: '13px', fontWeight: 'normal'}}>Hide Post</h4>
                        <h5 style={{color: 'gray', marginLeft: '10px', fontSize: '10px', marginTop: '2px'}}>See fewer posts like this.</h5>
                    </div>
                </div>
                <div className='bottom_content'>
                    <QueryBuilderOutlinedIcon style={{ height: '45px', width: '35px', color: 'rgb(88, 81, 81)'}}/>
                    <div>
                        <h4 style={{marginLeft: '10px', fontSize: '13px', fontWeight: 'normal'}}>{`Snooze ${username} for 30 days`}</h4>
                        <h5 style={{color: 'gray', marginLeft: '10px', fontSize: '10px', marginTop: '2px'}}>Temporarily stop seeing posts.</h5>
                    </div>
                </div>
                <div className='bottom_content'>
                    <BlockOutlinedIcon style={{ height: '45px', width: '35px', color: 'rgb(88, 81, 81)'}}/>
                    <div>
                        <h4 style={{marginLeft: '10px', fontSize: '13px', fontWeight: 'normal'}}>{`Unfollow ${username}`}</h4>
                        <h5 style={{color: 'gray', marginLeft: '10px', fontSize: '10px', marginTop: '2px'}}>Stop seeing posts but stay friends.</h5>
                    </div>
                </div>
                <div className='bottom_content'>
                    <AnnouncementOutlinedIcon style={{ height: '45px', width: '35px', color: 'rgb(88, 81, 81)'}}/>
                    <div>
                        <h4 style={{marginLeft: '10px', fontSize: '13px', fontWeight: 'normal'}}>Find support or related posts</h4>
                        <h5 style={{color: 'gray', marginLeft: '10px', fontSize: '10px', marginTop: '2px'}}>I'm concerned about this post.</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Postmenu;