import React from 'react';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import CreateIcon from '@material-ui/icons/Create';
import { CustomTooltip } from '../Tooltip.component';

import './Photo.css'

const Photo = ({image, likes, comments}) => {
    return (
        <div className='photo'>
            <div  className='edit_photo_container'>
                <CustomTooltip title="Edit">
                    <div className='edit_photo'>
                        <CreateIcon style={{color: 'white', padding: '5px 5px 5px 5px', opacity: '1.0'}}/>
                    </div>
                </CustomTooltip>
            </div>
            <div className='photo__container' style={{backgroundImage: `url(${image})`}}>
                <div className='photo_hover_content'>
                    <div className='photo_specs'>
                        <div style={{alignItems: 'center'}}>
                            <ThumbUpIcon style={{color : '#eff2f5'}}/>
                        </div>
                        <h4 style={{color : '#eff2f5', marginLeft: '5px'}}>{likes}</h4>
                    </div>
                    <div className='photo_specs'>
                        <h4 style={{color : '#eff2f5', marginRight: '5px'}}>{comments}</h4>
                        <ModeCommentIcon style={{color : 'white'}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Photo; 