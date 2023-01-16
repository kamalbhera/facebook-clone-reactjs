import React from 'react';

import {Button, Radio} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase.utils/firebase';
import { generateUserDocument } from '../../firebase.utils/firebase';
import { useStateValue } from '../../StateProvider/StateProvider';
import { actionTypes } from '../../StateProvider/Reducer';

import './SignUp.styles.css';
import { Label } from '@material-ui/icons';

const SignUp = () => {

    const [state, dispatch] = useStateValue();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [firstname, setFirstname] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [confirmpassword, setConfirmPassword] = React.useState('');
    const [dateOfbirth, SetdateOfbirth] = React.useState('');
    const [error, setError] = React.useState(null);
    const [photoURL, setphotoURL] = React.useState('');
    const [gender, setgender] = React.useState('Male')

    const history = useHistory();

    const signin = () => history.push('/');

    const createUserWithEmailandPassword = async (event) => {
        event.preventDefault();
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            const displayName = firstname+" "+lastname;
            generateUserDocument(user, {displayName, photoURL, dateOfbirth, gender} );
            user.updateProfile({
                displayName: displayName,
                photoURL: '',
                coverphotoURL: '',
                gender: gender
            })
        }
        catch(error){
            console.log(error);
            setError(error);
            alert(error);
        }

        if(!error){
            auth.signInWithEmailAndPassword(email, password)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                });
                signin();
            }).catch(error => {
                setError("Error signing in with E-mail & Password!!!");
                console.log(error);
                alert('Username/Password is incorrect!!');
            })
        }
    };

    const onChangeHandler = event => {
        const {name, value} = event.currentTarget;
        if (name === 'firstname') {
            setFirstname(value);
        }
        else if (name === 'lastname') {
            setLastname(value);
        }
        else if (name === 'email') {
            setEmail(value);
        }
        else if (name === 'password') {
            setPassword(value);
        }
        else if (name === 'confirmpassword') {
            setConfirmPassword(value);
        }
        else if (name === 'dateOfbirth') {
            SetdateOfbirth(value);
        }
    }

    return (
        <div className='sign_up'>
            <div className='form'>
                <div className='registration'>
                    <div className='form_images'>
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png" 
                            alt=""
                        />
                        <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/196px-Facebook_Logo_%282019%29.svg.png"
                                alt=""
                        />
                    </div>
                    <h2>Create your Facebook Account</h2>
                        <input
                            type='text'
                            name='firstname'
                            value={firstname}
                            placeholder='First Name'
                            className='input_form'
                            id='firstname'
                            onChange={event => onChangeHandler(event)}
                            required
                        />
                        <input 
                            type='text' 
                            name='lastname'
                            value={lastname}
                            placeholder='Last Name' 
                            className='input_form'
                            id='lastname'
                            onChange={event => onChangeHandler(event)}
                            required
                        />
                        <input 
                            type='date' 
                            name='dateOfbirth'
                            value={dateOfbirth}
                            placeholder='Date of Birth' 
                            className='input_form'
                            id='dateOfbirth'
                            onChange={event => onChangeHandler(event)}
                            required
                        />
                        <div className='radio_group'>
                            <h4>Gender:</h4>
                            <input 
                                type='radio' 
                                name='gender'
                                checked={gender === 'Male'}
                                value='Male'
                                id='gender'
                                className='radio'
                                onChange={event => setgender(event.target.value)}
                                style={{marginLeft:'10px', marginRight: '10px', marginTop: '4px'}}
                            />
                            <h4 style={{marginTop: '1px'}}>Male</h4>
                            <input 
                                type='radio' 
                                name='gender'
                                checked={gender === 'Female'}
                                value='Female'
                                id='gender'
                                className='radio'
                                onChange={event => setgender(event.target.value)}
                                style={{marginLeft:'10px', marginRight: '10px', marginTop: '4px'}}
                            />
                            <h4 style={{marginTop: '2px'}}>Female</h4>
                        </div>
                        <input 
                            type='email' 
                            name='email'
                            value={email}
                            placeholder='Username/email address' 
                            className='input_form'
                            id='email'
                            onChange={event => onChangeHandler(event)}
                            required
                        />
                        <h4>{`You can use letter, numbers & periods`}</h4>
                        <input 
                            type='password' 
                            name='password'
                            value={password}
                            placeholder='Password' 
                            className='input_form'
                            id='password'
                            onChange={event => onChangeHandler(event)}
                            required
                        />
                        <input 
                            type='password' 
                            name='confirmpassword'
                            value={confirmpassword}
                            placeholder='Confirm Password' 
                            className='input_form'
                            id='confirmpassword'
                            onChange={event => onChangeHandler(event)}
                            required
                        />
                        <div>
                            <Button type="submit" onClick={createUserWithEmailandPassword} style={{textDecoration: 'none'}}>
                                Sign Up
                            </Button>
                            <div className='sign_in_instead' onClick={signin}>
                                <h3>Sign in instead</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default SignUp;