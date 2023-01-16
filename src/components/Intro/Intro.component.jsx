import React from 'react';

import {Button, IconButton} from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PhoneIcon from '@material-ui/icons/Phone';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import CreateIcon from '@material-ui/icons/Create';
import { useStateValue } from '../../StateProvider/StateProvider';
import { CustomTooltip } from '../../components/Tooltip.component';

import './Intro.styles.css'

const Intro = ({props}) => {

    const [{ user }, dispatch] = useStateValue();

    console.log(props.prop3);
    console.log(user.uid);

    return (
        <div className='intro'>
            <div className='container'>
                <div className='heading'>
                    <h3>About</h3>
                </div>
                <div className='intro-params'>
                    <div className='params'>
                        <div className='left_content_params'>
                            <div style={{paddingTop: '2px', paddingRight: '10px'}}>
                                <BusinessCenterIcon style={{color: 'gray', transform: 'scale(1.3)'}}/>
                            </div>
                            <p style={{color: 'gray', fontWeight: 'bold', fontSize: '12px'}}>Works at Tata Consultancy Services</p>
                        </div>
                        <div className='right_content_params'>
                            <CustomTooltip title='Edit'>
                                <IconButton> <CreateIcon style={{color: 'gray', transform: 'scale(1.3)'}}/>  </IconButton>
                            </CustomTooltip>
                        </div>
                    </div >
                    <div className='params'>
                        <div className='left_content_params'>
                            <div style={{paddingTop: '2px', paddingRight: '10px'}}>
                                <SchoolIcon style={{color: 'gray', transform: 'scale(1.3)'}}/>
                            </div>
                            <p style={{color: 'gray', fontWeight: 'bold', fontSize: '12px'}}>Studied B.tech Cse at Govt. College of Engg. and Textile Technology,Serampore(GCETTS)</p>
                        </div>
                        <div className='right_content_params'>
                            <CustomTooltip title='Edit'>
                                <IconButton> <CreateIcon style={{color: 'gray', transform: 'scale(1.3)'}}/>  </IconButton>
                            </CustomTooltip>
                        </div>
                    </div >
                    <div className='params'>
                        <div className='left_content_params'>
                            <div style={{paddingTop: '2px', paddingRight: '10px'}}>
                                <SchoolIcon style={{color: 'gray', transform: 'scale(1.3)'}}/>
                            </div>
                            <p style={{color: 'gray', fontWeight: 'bold', fontSize: '12px'}}>Went to ABC School</p>
                        </div>
                        <div className='right_content_params'>
                            <CustomTooltip title='Edit'>
                                <IconButton> <CreateIcon style={{color: 'gray', transform: 'scale(1.3)'}}/>  </IconButton>
                            </CustomTooltip>
                        </div>
                    </div >
                    <div className='params'>
                        <div className='left_content_params'>
                            <div style={{paddingRight: '10px'}}>
                                <HomeIcon style={{color: 'gray', transform: 'scale(1.3)'}}/>
                            </div>
                            <p style={{color: 'gray', fontWeight: 'bold', fontSize: '12px'}}>Lives in Bangalore, India</p>
                        </div>
                        <div className='right_content_params'>
                            <CustomTooltip title='Edit'>
                                <IconButton> <CreateIcon style={{color: 'gray', transform: 'scale(1.3)'}}/>  </IconButton>
                            </CustomTooltip>
                        </div>
                    </div>
                    <div className='params'>
                        <div className='left_content_params'>
                            <div style={{paddingRight: '10px'}}>
                                <LocationOnIcon style={{color: 'gray', transform: 'scale(1.3)'}}/>
                            </div>
                            <p style={{color: 'gray', fontWeight: 'bold', fontSize: '12px'}}>From Kolkata</p>
                        </div>
                        <div className='right_content_params'>
                            <CustomTooltip title='Edit'>
                                <IconButton> <CreateIcon style={{color: 'gray', transform: 'scale(1.3)'}}/>  </IconButton>
                            </CustomTooltip>
                        </div>
                    </div>
                    <div className='params'>
                        <div className='left_content_params'>
                            <div style={{paddingRight: '10px'}}>
                                <RssFeedIcon style={{color: 'gray', transform: 'scale(1.3)'}}/>
                            </div>
                            <p style={{color: 'gray', fontWeight: 'bold', fontSize: '12px'}}>Followed by 100 people</p>
                        </div>
                        <div className='right_content_params--hidden'>
                            <IconButton disableRipple className='right_content_params--hidden' style={{ backgroundColor: 'transparent' }}> <CreateIcon style={{color: 'transparent', transform: 'scale(1.3)'}}/>  </IconButton>
                        </div>
                    </div>
                    <div className='params'>
                        <div className='left_content_params'>
                            <div style={{paddingRight: '10px'}}>
                                <FavoriteIcon style={{color: 'gray', transform: 'scale(1.3)'}}/>
                            </div>
                            <p style={{color: 'gray', fontWeight: 'bold', fontSize: '12px'}}>Single</p>
                        </div>
                        <div className='right_content_params'>
                            <CustomTooltip title='Edit'>
                                <IconButton> <CreateIcon style={{color: 'gray', transform: 'scale(1.3)'}}/>  </IconButton>
                            </CustomTooltip>
                        </div>
                    </div>
                    <div className='params'>
                        <div className='left_content_params'>
                            <div style={{paddingRight: '10px'}}>
                                <PhoneIcon style={{color: 'gray', transform: 'scale(1.3)'}}/>
                            </div>
                            <div className='phone_contact'>
                                <p style={{color: 'gray', fontWeight: 'bold', fontSize: '12px'}}>123456789</p>
                                <p style={{color: 'gray', fontSize: '10px'}}>Mobile</p>
                            </div>
                        </div>
                        <div className='right_content_params'>
                            <CustomTooltip title='Edit'>
                                <IconButton> <CreateIcon style={{color: 'gray', transform: 'scale(1.3)'}}/>  </IconButton>
                            </CustomTooltip>
                        </div>
                    </div>
                </div>
                <div className='intro-buttons'>
                    <div className='intro_button'>
                        <Button type="submit" onClick={()=>{}}>
                            <div>
                                <p style={{textTransform: 'none', fontWeight: 'bold'}}>Edit Details</p>
                            </div>
                        </Button>
                    </div>
                    <div className='intro_button'>
                        <Button type="submit" onClick={()=>{}}>
                            <div>
                                <p style={{textTransform: 'none', fontWeight: 'bold'}}>Add Hobbies</p>
                            </div>
                        </Button>
                    </div>
                    <div className='intro_button'>
                        <Button type="submit" onClick={()=>{}}>
                            <div>
                                <p style={{textTransform: 'none', fontWeight: 'bold'}}>Add Featured</p>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;