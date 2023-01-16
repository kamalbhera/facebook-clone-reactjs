import React from 'react';

import Typography from '@material-ui/core/Typography';
import DuoIcon from '@material-ui/icons/Duo';
import ChatBubbleRoundedIcon from '@material-ui/icons/ChatBubbleRounded';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import GroupIcon from '@material-ui/icons/Group';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Avatar } from '@material-ui/core';
import { CustomTooltip } from './Tooltip.component';

import './Floatingdesc.css';

const Floatingdesc = ({profilepic, username}) => {

    return (
        <div className="Floating">
            <div className='container' style={{padding: '10px 10px 10px'}}>
                <div className="floating_profile">
                    <Avatar src={profilepic} style={{ height: "120px", width: "120px"}}/>
                    <div className="box">
                        <Typography color="inherit" style={{ fontSize: '18px', fontWeight: 'bold', marginLeft: '20px'}}>{username}</Typography>
                        <div style={{marginTop: "10px"}}>
                            <div className ="desc">
                                <GroupIcon style={{color: 'gray',height: '25px', width: '35px'}}/>
                                <h3 style={{fontSize: '12px',marginLeft: "7px", marginTop: '8px'}}>Friends</h3>
                            </div>
                            <div className ="desc" style={{marginTop: '8px'}}>
                                <LocationOnIcon style={{color: 'gray',height: '25px', width: '35px'}}/>
                                <h3 style={{fontSize: '12px',marginLeft: "7px", marginTop: '8px'}}>From Kolkata, WB, India</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="functions" style={{marginTop: '20px'}}>
                    <div className="button">
                        <div className="content">
                            <ChatBubbleRoundedIcon style={{marginRight: '5px'}}/>
                            <h3>Message</h3>
                        </div>
                    </div>
                    <div className='icons' style={{display: 'flex', flexDirection: 'row', marginTop: '10px', justifyContent: 'space-evenly'}}>
                        <div className='buttonicon'>
                            <CustomTooltip title='Video call'>
                                <DuoIcon style={{ padding: '10px 10px 10px'}}/>
                            </CustomTooltip>
                        </div>
                        <div className='buttonicon'>
                            <CustomTooltip title='Contact'>
                                <CallRoundedIcon style={{ padding: '10px 10px 10px'}}/>
                            </CustomTooltip>
                        </div>
                        <div className='buttonicon'>
                            <MoreHorizIcon style={{ padding: '10px 10px 10px'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Floatingdesc;