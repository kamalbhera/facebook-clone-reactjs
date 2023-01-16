import React, {useState} from 'react';

import {Button} from '@material-ui/core';

import { Link } from 'react-router-dom';
import { auth } from '../firebase.utils/firebase';
import { useStateValue } from '../StateProvider/StateProvider';
import { actionTypes } from '../StateProvider/Reducer';
import { useHistory } from 'react-router-dom';

import './PasswordReset.styles.css';

const PasswordReset = () => {
    const [email, setEmail] = useState("");
    const [emailHasBeenSent, setemailHasBeenSent] = useState(false);
    const [error, setError] = useState(null);
    const [state, dispatch] = useStateValue();
    const [signinEmail, setSigninEmail] = useState("");
    const [signinPassword, setSigninPassword] = useState("");

    const history = useHistory();

    const signin = () => history.push('/');

    const onChangeHandler = event => {
        const {name, value} = event.currentTarget;
        if(name === 'userEmail') {
            setEmail(value);
        }
        else if(name=='sign_in_email') {
            setSigninEmail(value);
        }
        else if(name=='sign_in_password') {
            setSigninPassword(value);
        }
    };

    const sendResetEmail = event => {
        event.preventDefault();
        auth.sendPasswordResetEmail(email)
        .then(() => {
            setemailHasBeenSent(true);
            setTimeout(() => {setemailHasBeenSent(false)}, 3000);
        })
    };

    const signInwithEmailandPassword = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(signinEmail, signinPassword)
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
    };

    return (
        <div className='reset'>
            <div className='reset_header'>
                <div className='reset_logo'>
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/196px-Facebook_Logo_%282019%29.svg.png"
                        alt=""
                    />
                </div>
                <div className='sign_in_reset'>
                    <div className='sign_in_email_reset'>
                        <input
                            type='text'
                            name='sign_in_email'
                            value={signinEmail}
                            placeholder='Email'
                            className='reset_email_password'
                            id='sign_in_email'
                            onChange={event => onChangeHandler(event)}
                            required
                        />
                    </div>
                    <div className='sign_in_email_reset'>
                        <input 
                            type='password' 
                            name='sign_in_password'
                            value={signinPassword}
                            placeholder='Password' 
                            className='reset_email_password'
                            id='sign_in_password'
                            onChange={event => onChangeHandler(event)}
                            required
                        />
                    </div>
                    <Button type="submit" onClick={signInwithEmailandPassword}>
                        Sign In
                    </Button>
                </div>
            </div>
            <div className='reset_body'>
                <div className='reset_body_container'>
                    <div className='reset_body_contents'>
                        <div className='reset_contents_title'>
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png"
                                alt=""
                            />
                            <div>
                                <h1>
                                    Reset your Password
                                </h1>
                            </div>
                        </div>
                        <div className='reset_container'>
                            <form action="">
                                {emailHasBeenSent && (
                                    <div className='Email_sent'>
                                        An email has been sent to you!
                                    </div>
                                )}
                                {error!=null && (
                                    <div className='reset_error'>
                                        {error}
                                    </div>
                                )}
                                <div className='ribc'>
                                    <div className='reset_input_block'>
                                        <label htmlFor='userEmail' className='reset_block'>
                                            Email:
                                        </label>
                                        <div className='reset_input_email'>
                                            <input
                                                type="email"
                                                name="userEmail"
                                                id="userEmail"
                                                value={email}
                                                placeholder="Email address"
                                                onChange={onChangeHandler}
                                                className='reset_email'
                                            />
                                        </div>
                                    </div>
                                    <Button onClick={sendResetEmail}>
                                        Send me a reset Link
                                    </Button>
                                </div>
                            </form>
                            <Link to='/' style={{ color: '#2e81f4', fontWeight: 'bold', textDecoration: 'none', width: 'fit-content'}}>Back to Sign in</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PasswordReset;