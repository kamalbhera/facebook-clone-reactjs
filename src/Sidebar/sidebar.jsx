import React from 'react';

import SidebarRow from './sidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import TurnedInOutlinedIcon from '@material-ui/icons/TurnedInOutlined';
import HistoryIcon from '@material-ui/icons/History';
import EventIcon from '@material-ui/icons/Event';
import Divider from '@material-ui/core/Divider';
import { useStateValue } from '../StateProvider/StateProvider';
import { useStyles } from '../components/FabIcon';
import Fab from '@material-ui/core/Fab';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { CustomTooltip } from '../components/Tooltip.component';

import './sidebar.css'

const Sidebar = () => {
    const [{ user }, dispatch] = useStateValue();

    const classes = useStyles();

    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName}/>
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>
            <SidebarRow Icon={PeopleIcon} title='Friends'/>
            <SidebarRow Icon={ChatIcon} title='Messenger'/>
            <SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
            <SidebarRow Icon={VideoLibraryIcon} title='Videos'/>
            <SidebarRow Icon={EventIcon} title='Events'/>
            <SidebarRow Icon={HistoryIcon} title='Memories'/>
            <SidebarRow Icon={TurnedInOutlinedIcon} title='Saved'/>
            <SidebarRow Icon={ExpandMoreOutlined} title='See more..'/>
            <Divider />
            <div className={classes.root}>
                <CustomTooltip title="New Message">
                    <Fab color="white" aria-label="message" style={{ marginTop: "20px", width: "45px", height: "45px" }}>
                        <BorderColorIcon />
                    </Fab>
                </CustomTooltip>
            </div>
            <div className='last'  style={{display: 'flex', alignItems: 'flex-start', marginTop: '10px'}}>
                <p style={{color: 'gray', fontSize: 'small'}}>Privacy-Terms . Advertising . Ad choices ▷. Cookies . More. Facebook © 2021</p>
            </div>
        </div>
    );
}

export default Sidebar;