import React from 'react';
import './header.css';

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import { Avatar, IconButton } from '@material-ui/core';
import { useHistory, Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FeedbackIcon from '@material-ui/icons/Feedback';
import HelpIcon from '@material-ui/icons/Help';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import Divider from '@material-ui/core/Divider';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { CustomTooltip } from '../components/Tooltip.component';
import { useStateValue } from '../StateProvider/StateProvider';
import { actionTypes } from '../StateProvider/Reducer';
import Item from '../components/Item.component';
import {auth} from '../firebase.utils/firebase';

const Header = () => {
    const [{ user }, dispatch] = useStateValue();

//    const [open, setOpen] = React.useState(false);


    const [anchorE1, setAnchorE1] = React.useState(null);

    const [active, setActive] = React.useState('Home');

    const handleClose = () => {
        setAnchorE1(null);
    }

    const openMenu = (e) => {
        setAnchorE1(e.currentTarget);
    }
    
    const LogOut = () => {
        auth.signOut()
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: null
            });
        }).catch((error) => alert(error.message));
    }

    const history = useHistory();

    const navigateToHome = () => history.push('/');

    return (
        <div className='header'>
            <div className='header_left'>
                <div className='header_image_container' onClick={navigateToHome}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png" alt="" style={{height: '44px', width: '44px'}}/>
                </div>
                <div className='header_input' onClick={()=>{}}>
                    <SearchIcon />
                    <input placeholder="Search Facebook" type="text"/>
                </div>
            </div>
            <div className='header_center'>
                <CustomTooltip title="Home">
                    <div className={ active==='Home' ? "header_option header_option--active" : "header_option"} onClick={() => setActive('Home')}>         
                        <HomeIcon fontSize="large" />
                    </div>
                </CustomTooltip>
                <CustomTooltip title="Pages">
                    <div className={ active==='Pages' ? "header_option header_option--active" : "header_option"} onClick={() => setActive('Pages')}>
                        <FlagIcon fontSize="large" />
                    </div>
                </CustomTooltip>
                <CustomTooltip title="Watch">
                    <div className={ active==='Watch' ? "header_option header_option--active" : "header_option"} onClick={() => setActive('Watch')}>
                        <SubscriptionsOutlinedIcon fontSize="large" />
                    </div>
                </CustomTooltip>
                <CustomTooltip title="Marketplace">
                    <div className={ active==='Marketplace' ? "header_option header_option--active" : "header_option"} onClick={() => setActive('Marketplace')}>
                        <StorefrontOutlinedIcon fontSize="large" />
                    </div>
                </CustomTooltip>    
                <CustomTooltip title="Groups">
                    <div className={ active==='Groups' ? "header_option header_option--active" : "header_option"} onClick={() => setActive('Groups')}>
                        <SupervisedUserCircleOutlinedIcon fontSize="large" />
                    </div>
                </CustomTooltip>
            </div>
            <div className='header_right'>
                <Link to={{pathname: `/profile/${user.displayName}`, prop1: `${user.displayName}`, prop2: `${user.photoURL}`, prop3: `${user.uid}`}} style={{textDecoration: 'none', color: 'black'}}>
                    <div className="header_info">
                        <Avatar className="avatar" src={user.photoURL}/>
                        <h4>{user.displayName.substring(0,user.displayName.indexOf(" "))}</h4>
                    </div>
                </Link>
                <CustomTooltip title="Create">
                    <IconButton>
                        <AddIcon/>
                    </IconButton>
                </CustomTooltip>
                <CustomTooltip title="Messenger">
                    <IconButton>
                        <ForumIcon/>
                    </IconButton>
                </CustomTooltip>
                <CustomTooltip title="Notifications">
                    <IconButton>
                        <NotificationsActiveIcon/>
                    </IconButton>
                </CustomTooltip>
                <CustomTooltip title="Account">
                    <IconButton onClick={openMenu}>
                        <ExpandMoreIcon/>
                    </IconButton>
                </CustomTooltip>
                <div className="menu-container" style={{position: "relative"}}>
                    <Menu
                        id="menu"
                        anchorE1={anchorE1}
                        keepMounted
                        getContentAnchorEl={null}
                        anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                        transformOrigin={{vertical: 'top', horizontal: 'right'}}
                        open={Boolean(anchorE1)}
                        onClose={handleClose}
                        disableScrollLock={true}
                        style={{padding: "5px 5px 5px", poition: 'absolute' }}
                    >
                        <MenuItem onClick={handleClose}>
                            <Item src={user.photoURL} name={user.displayName} subtitle="See your profile"/>
                        </MenuItem>
                        <Divider variant="middle"/>
                        <MenuItem onClick={handleClose}>
                            <Item Icon={FeedbackIcon} title="Give feedback" subtitle="Help us improve the new Facebook"/>
                        </MenuItem>
                        <Divider variant="middle"/>
                        <MenuItem onClick={handleClose}>
                            <Item Icon={SettingsIcon} title={`Settings & Privacy`} arrow={ArrowForwardIosIcon}/>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Item Icon={HelpIcon} title={'Help & Support'} arrow={ArrowForwardIosIcon}/>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Item Icon={NightsStayIcon} title={`Display & accessibility`} arrow={ArrowForwardIosIcon}/>
                        </MenuItem>
                        <MenuItem onClick={LogOut}>
                            <Item Icon={ExitToAppIcon} title="Log Out"/>
                        </MenuItem>
                        <MenuItem onClick={handleClose}></MenuItem>
                        <MenuItem className='last'  style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                            <p style={{color: 'gray', fontSize: 'small'}}>Privacy-Terms . Advertising . Ad choices ▷. Cookies . More.</p>
                            <p style={{color: 'gray', fontSize: 'small'}}>Facebook © 2021</p>
                        </MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;