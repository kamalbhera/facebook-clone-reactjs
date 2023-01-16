import { Button } from '@material-ui/core';
import React from 'react';

import { Redirect } from 'react-router';
import { useStateValue } from '../../StateProvider/StateProvider';
import { storage } from '../../firebase.utils/firebase';
import db from '../../firebase.utils/firebase';
import { auth } from '../../firebase.utils/firebase';
import firebase from 'firebase';

import './image_upload.styles.css';

const ImageUpload = ({from_prop}) => {

    const [{ user }, dispatch] = useStateValue();

    const [image, setImage] = React.useState(null);

    const[URL, setUrl] = React.useState('');

    const [progress, setProgress] = React.useState(0);

    const handleChange = event => {
        if(event.target.files[0]) {
            setImage(event.target.files[0]);
        }
    };

    if(!user) {
        return <Redirect push to='/'/>
    }

    const handleUpload = () => {
        if(!image) {
            alert('Please select an image');
            return;
        }
        const uploadTask = storage.ref(`Images/${user.uid}/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            error => {
                alert(error.message);
            },
            () => {
                storage
                .ref(`Images/${user.uid}`)
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    setUrl(url);
                    var current_user = auth.currentUser;
                    console.log('current_user: ',current_user);
                    if (from_prop.toString() === "1") {
                        console.log(from_prop);
                        user.updateProfile({
                            photoURL: url
                        }).catch(error => {
                            console.log(error);
                            alert(error.message);
                        })
                        try {
                            db.collection('Users').doc(user.uid).update({photoURL: url});
                            db.collection('Posts').get().then(querySnapshot => {
                                querySnapshot.forEach(doc => {
                                    console.log('doc',doc.data().uid);
                                    if(doc.data().uid === user.uid) {
                                        doc.ref.update({
                                            profilepic: url
                                        });
                                    }
                                });
                            })
                            db.collection("Photos").doc(`${user.uid}`).collection('Profile_pictures').add(
                                {
                                    name: `${image.name}${Math.random().toString()}`,
                                    image: url,
                                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                                    username: user.displayName,
                                    uid: user.uid,
                                    comments: 0,
                                    likes: 0
                                }
                            )
                            db.collection('Posts').add({
                                message: 'Updated Profile Picture',
                                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                                profilepic: user.photoURL,
                                username: user.displayName,
                                uid: user.uid
                            }).then(event => {
                                console.log('updated_user:',current_user);
                                alert('Profile picture Upadated');
                            })
                        } catch (error) {
                            console.log(error);
                            alert(error.message);
                        }
                    }
                    else if (from_prop.toString() === '2') {
                        try{
                            db.collection('Users').doc(user.uid).update({coverphotoURL: url});
                            db.collection("Photos").doc(`${user.uid}`).collection('Cover_photos').add(
                                {
                                    name: `${image.name}${Math.random().toString()}`,
                                    image: url,
                                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                                    username: user.displayName,
                                    uid: user.uid,
                                    comments: 0,
                                    likes: 0
                                }
                            )
                            db.collection('Posts').add({
                                message: 'Updated Cover Photo',
                                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                                profilepic: user.photoURL,
                                username: user.displayName,
                                image: url,
                                uid: user.uid
                            }).then(event => {
                                alert('Cover Photo Upadated');
                            })
                        } catch (error) {
                            console.log(error);
                            alert(error.message);
                        }
                    }
                    else if (from_prop.toString() === '3') {
                        try{
                            db.collection("Photos").doc(`${user.uid}`).collection('Uploads').add(
                                {
                                    name: `${image.name}${Math.random().toString()}`,
                                    image: url,
                                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                                    username: user.displayName,
                                    uid: user.uid,
                                    comments: 0,
                                    likes: 0
                                }
                            )
                            db.collection('Posts').add({
                                message: 'Added a new photo',
                                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                                profilepic: user.photoURL,
                                username: user.displayName,
                                image: url,
                                uid: user.uid
                            }).then(event => {
                                alert('Image Uploaded');
                            })
                        }catch(error) {
                            console.log(error);
                            alert(error.message);
                        }
                    }
                });
            }
        );
    };

    return (
        <div className='upload'>
            <div className='upload_container'>
                <div className='upload_contents'>
                    {
                        progress === 100 ?
                        (
                            <div className='completed'>
                                <label htmlFor='Image Uploaded' className='image_uploaded' style={{fontWeight: 'bold', padding: '10px'}}>Image Uploaded</label>
                            </div>
                        ) : (<></>)
                    }
                    <div className='upload_input'>
                        <label htmlFor='Files' className='reset_block'>Files:</label>
                        <input type='file' onChange={handleChange} style={{marginLeft: '20px'}}/>
                        {
                            progress > 0 ?
                                (<p>{progress}%</p>)
                                :
                                (<></>)
                        }
                    </div>
                    {
                        progress > 0 ?
                        (<progress value={progress} max="100" style={{marginTop: '20px'}}/>) : (<></>)
                    }
                    <Button onClick={handleUpload}>
                        Upload
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ImageUpload;