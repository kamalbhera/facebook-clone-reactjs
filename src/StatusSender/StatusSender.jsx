import React, { useState } from 'react';

import {Avatar} from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from '../StateProvider/StateProvider';
import db from '../firebase.utils/firebase';
import firebase from 'firebase';
import {CustomDialog} from '../components/DialogComponent/Dialog.component';
import ImageUpload from '../components/ImageUpload/Image_upload.component';

import './StatusSender.css';

const StatusSender = () => {
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [{ user }, dispatch] = useStateValue();
    const [error, setError] = useState(null);
    const [isopen, SetisOpen] = useState(false);

    const handleClose = () => {
        SetisOpen(false);
    }

    const handleClick = () => {
        console.log('clicked');
        SetisOpen(true);
    }

    const handleSubmit = e => {
        e.preventDefault();
        // some database stuff
        try{
            db.collection('Posts').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                profilepic: user.photoURL,
                username: user.displayName,
                image: imageUrl,
                uid: user.uid
            })
        }catch(error) {
            setError(error);
        }
        setInput("");
        setImageUrl("");
    };

    return(
        <div className="statusSender">
            <div className="statusSender_top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)} 
                        className="statusSender_input" 
                        type="text" 
                        placeholder={`What's on your mind, ${user.displayName.substring(0,user.displayName.indexOf(" "))}?`}
                    />
                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        type="text" 
                        placeholder="Image URL (Optional)"
                    />
                    <button onClick={handleSubmit} type="submit">Hidden submit</button>
                </form>
            </div>
            <div className="statusSender_bottom">
                <div className="statusSender_option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <CustomDialog
                        isopen={isopen}
                        handleClose={handleClose}
                        title={`Upload new Image`}
                    >
                        <ImageUpload from_prop={'3'}/>
                </CustomDialog>
                <div className="statusSender_option" onClick={handleClick}>
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="statusSender_option">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    );
}
export default StatusSender;