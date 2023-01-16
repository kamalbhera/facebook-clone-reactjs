import React, { useEffect, useState } from 'react';

import { Button } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Photo from './Photo';
import db from '../../firebase.utils/firebase';
import { useStateValue } from '../../StateProvider/StateProvider';
import CircularIndeterminate from '../../components/Spinner/Spinner.component';

import './Photos.styles.css';

const Photos = ({username}) => {

    const [photos, setPhotos] = useState([]);

    const [{ user }, dispatch] = useStateValue();

    const [datafetch, setDatafetch] = useState(false);

    useEffect(() => {
        try {
            db.collection('Photos').doc(user.uid).collection('Uploads').orderBy("timestamp", "desc").get()
            .then(snapshot => (
                setPhotos(snapshot.docs.map(doc => ({ data: doc.data() })))
            ))
            setDatafetch(true);
        } catch(error) {
            console.log('Error fetching data');
            alert('Network or Server issue!!');
        }
    },[user.uid])

    return (
        <div className='photos_body'>
            <div className='photos_container'>
                <div className='photos__top'>
                    <div className='photos_top_left'>
                        <h3 style={{fontSize: '17px'}}>Photos</h3>
                    </div>
                    <div className='photos_top_right'>
                        <div className='photos_body_option'>
                            <p style={{color: '#2e81f4', fontWeight: 'bold'}}>Add Photos/Video</p>
                        </div>
                        <div className='friends_option_more'>
                            <Button>
                                <MoreHorizIcon/>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='photos_middle'>
                    <div className='photos_middle_option photos_middle_option--active'>
                        <p style={{padding: '15px 15px 15px 15px', fontWeight: '500px'}}>Photos of {username.substring(0,username.indexOf(" "))}</p>
                    </div>
                    <div className='photos_middle_option'>
                        <p style={{padding: '15px 15px 15px 15px', fontWeight: '500px'}}>{username.substring(0,username.indexOf(" "))}'s Photos</p>
                    </div>
                    <div className='photos_middle_option'>
                        <p style={{padding: '15px 15px 15px 15px', fontWeight: '500px'}}>Albums</p>
                    </div>
                </div>
                <div className='photos_bottom'>
                    {
                        !datafetch ? (
                            <div className='loading'>
                                <CircularIndeterminate />
                            </div>  
                        ) : (
                            <div className='photos_bottom_container'>
                                {
                                    console.log('Photos ',photos),
                                    photos.map((photo, index) => (
                                        <Photo image={photo.data.image} likes={photo.data.likes} comments={photo.data.comments}/>
                                    ))
                                }
                            </div>
                        )
                    }
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
    );
}

export default Photos;