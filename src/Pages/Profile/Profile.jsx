import React, {useEffect} from 'react';

import { Avatar, IconButton, Button } from '@material-ui/core';
import { Redirect } from 'react-router';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import Intro from '../../components/Intro/Intro.component';
import FriendList from '../../components/friends/friends.component';
import Photos from '../../components/Photos/Photos.component';
import { useStateValue } from '../../StateProvider/StateProvider';
import { CustomTooltip } from '../../components/Tooltip.component';
import {CustomDialog} from '../../components/DialogComponent/Dialog.component';
import ImageUpload from '../../components/ImageUpload/Image_upload.component';
import db from '../../firebase.utils/firebase';
import CircularIndeterminate from '../../components/Spinner/Spinner.component';

import './Profile.css';

const Profile = (props) => {

    const [{ user }, dispatch] = useStateValue();

    const [isopen, SetisOpen] = React.useState(false);
    const [isopenCover, SetisOpenCover] = React.useState(false);
    const [coverphotoURL, setcoverphotoURL] = React.useState(null);
    const [profileExist, setprofileExist] = React.useState(false);

    try {
        db.collection('Users').doc(props.location.prop3).get().then(querySnapshot => {
            setcoverphotoURL(querySnapshot.data().coverphotoURL);
        })
    } catch(error) {
        alert('Error fetching Cover photo of user');
        console.log(error.message);
    }

    useEffect(
        () => {
            let timer = setTimeout(() => setprofileExist(true), 7000);
            return () => {
                clearTimeout(timer);
            };
        },[]
    );

    const handleClose = () => {
        SetisOpen(false);
    }

    const handleClick = () => {
        console.log('clicked');
        SetisOpen(true);
    }

    const handleClickCover = () => {
        console.log('clicked');
        SetisOpenCover(true);
    }

    const handleCloseCover = () => {
        SetisOpenCover(false);
    }

    if(!user) {
        return <Redirect push to='/'/>
    }

    return (

        <div className={profileExist ? ``:`homepage_body_spinner--active`}>
            {
                !profileExist ? (
                    <div className='homepage_spinner'>
                        <CircularIndeterminate />
                    </div>
                ) : (
                        <div className='Profile'>
                        <div className='profile_top'>
                            <div className='coverphoto-container'>
                                {
                                    coverphotoURL ?
                                    (
                                        <div className='coverphoto' style={{backgroundImage: `url(${coverphotoURL})`}} />
                                    ) : (
                                        <div className='coverphoto--null'/>
                                    )
                                }
                            </div>
                            <div className='profile_avatar'>
                                <Avatar src={props.location.prop2} style={{border: 'solid', borderColor: 'white', height: '175px', width: '175px', borderWidth: '5px'}}/>
                            </div>
                            {
                                user.uid === props.location.prop3 ? 
                                (
                                    <div className='change_profilepic'>
                                        <CustomDialog
                                            isopen={isopen}
                                            handleClose={handleClose}
                                            title={`Change Profile picture`}
                                        ><ImageUpload from_prop={'1'}/></CustomDialog>
                                        <IconButton onClick={handleClick}>
                                            <CameraAltIcon style={{width: '30px', height: '25px'}}/>
                                        </IconButton>
                                    </div>
                                ) : ( <></> )
                            }
                            
                            <div className='profile_top_name_info'>
                                <h1>{props.location.prop1}</h1>
                                {
                                    user.uid === props.location.prop3 ?
                                    (
                                        <h4 className='bio' style={{color: '#2e81f4'}}>Add Bio</h4>
                                    ) : (
                                        <></>
                                    )
                                }
                            </div>
                            {
                                user.uid === props.location.prop3 ?
                                (
                                    <div className='cover_photo_button'>
                                        <div className='cover_photo_button_container'>
                                            <CustomDialog
                                                isopen={isopenCover}
                                                handleClose={handleCloseCover}
                                                title={`Change Cover Photo`}
                                            ><ImageUpload from_prop={'2'}/></CustomDialog>
                                            <Button type="submit" onClick={handleClickCover}>
                                                <div className='button_content'>
                                                    <CameraAltIcon/>
                                                    <p style={{marginLeft: '3px', textTransform: 'none'}}>Edit Cover Photo</p>
                                                </div>
                                            </Button>
                                        </div>
                                    </div>
                                ) : (<></>)
                            }
                        </div>
                        <div className='profile_middle'>
                            <div className='profile_options'>
                                <div className='profile_option'>
                                    <p style={{padding: '15px 15px 15px 15px', fontWeight: 'bold'}}>Posts</p>
                                </div>
                                <div className='profile_option profile_option--active'>
                                    <p style={{padding: '15px 15px 15px 15px', fontWeight: 'bold'}}>About</p>
                                </div>
                                <div className='profile_option'>
                                    <p style={{padding: '15px 15px 15px 15px', fontWeight: 'bold'}}>Friends</p>
                                </div>
                                <div className='profile_option'>
                                    <p style={{padding: '15px 15px 15px 15px', fontWeight: 'bold'}}>Photos</p>
                                </div>
                                <div className='profile_option'>
                                    <p style={{padding: '15px 15px 15px 15px', fontWeight: 'bold'}}>Videos</p>
                                </div>
                                <div className='profile_option'>
                                    <p style={{padding: '15px 15px 15px 15px', fontWeight: 'bold'}}>StoryArchive</p>
                                </div>
                                <div className='profile_option'>
                                    <p style={{padding: '15px 15px 15px 15px', fontWeight: 'bold'}}>More</p>
                                </div>
                            </div>
                            <div className='profile_actions'>
                                <div className='profile_action_button'>
                                    <Button type="submit" onClick={()=>{}}>
                                        <div className='profile_button_content'>
                                            <EditIcon/>
                                            <p style={{marginLeft: '3px', textTransform: 'none', fontWeight: 'bold'}}>Edit Profile</p>
                                        </div>
                                    </Button>
                                </div>
                                <div className='profile_action_button'>
                                    <CustomTooltip title="View as">
                                        <Button type="submit" onClick={()=>{}}>
                                            <div className='profile_button_content'>
                                                <VisibilityIcon/>
                                            </div>
                                        </Button>
                                    </CustomTooltip>
                                </div>
                                <CustomTooltip title="Search">
                                    <div className='profile_action_button'>
                                        <Button type="submit" onClick={()=>{}}>
                                            <div className='profile_button_content'>
                                                <SearchIcon/>
                                            </div>
                                        </Button>
                                    </div>
                                </CustomTooltip>
                                <div className='profile_action_button'>
                                    <Button type="submit" onClick={()=>{}}>
                                        <div className='profile_button_content'>
                                            <MoreHorizIcon/>
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className='profile_bottom'>
                            <div className='profile_botton_container'>
                                <div className='profile_bottom_components'>
                                    <Intro props={props.location}/>
                                </div>
                                <div className='profile_bottom_components'>
                                    <FriendList/>
                                </div>
                                <div className='profile_bottom_components'>
                                    <Photos username={user.displayName}/>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Profile;