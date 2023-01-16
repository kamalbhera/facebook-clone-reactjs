import React from 'react';

import {Button} from '@material-ui/core';
import { auth, provider } from '../firebase.utils/firebase';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider/StateProvider';
import { actionTypes } from '../StateProvider/Reducer';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';

import './Login.css';

const Login = () => {
    const [state, dispatch] = useStateValue();

    const history = useHistory();

    const [email, setEmail] = React.useState('');

    const[error, setError] = React.useState('');

    const [password, setPassword] = React.useState('');

    const [visibility, setVisibility] = React.useState(0);
    const [visibilitytype, setVisibilitytype] = React.useState('password');

    const handleChange = event => {
        const { name, value } = event.currentTarget;
        if(name==='email'){
            setEmail(value);
        }
        else if(name==='password'){
            setPassword(value);
            if (value === '') {
                setVisibility(0);
                if(visibilitytype !== 'password') {
                    setVisibilitytype('password');
                }
            } else {
                if (visibility!==2) {
                    setVisibility(1);
                }
            }
        }
    };

    const signIn = () => {
        // sign in...
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            });
        }).catch((error) => alert(error.message));
    };

    const signup = () => history.push('/signup');

    const signInwithEmailandPassword = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            });
        }).catch(error => {
            setError("Error signing in with E-mail & Password!!!");
            console.log(error);
            alert('Username/Password is incorrect!!');
        })
    };

    const handleVisibility = () => {
        visibility === 1 ? setVisibility(2) : setVisibility(1);
        visibility === 1 ? setVisibilitytype('text') : setVisibilitytype('password');
    }

    return (
        <div className='login'>
            <div className="login_logo">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png"
                    alt=""
                />
                <div className="fb_text">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/196px-Facebook_Logo_%282019%29.svg.png"
                        alt=""
                    />
                </div>
            </div>
            <div className='login_input'>
                <form>
                    <div className='login_email'>
                        <input 
                            placeholder="Email address"
                            name='email'
                            type="email" 
                            style={{border: 'none', outline: 'none', backgroundColor: '#eff2f5'}}
                            value={email}
                            onChange={handleChange}
                            required
                            />
                    </div>
                    <div className='login_password'>
                        <input 
                            placeholder="Password" 
                            name='password'
                            type={visibilitytype} 
                            style={{border: 'none', outline: 'none', backgroundColor: '#eff2f5'}}
                            value={password}
                            onChange={handleChange}
                            required
                            />
                            {
                                visibility === 0 ?
                                (
                                    <></>
                                ) : (
                                    visibility === 1 ?
                                    (
                                        <div className='visibility' onClick = {handleVisibility}>
                                            <VisibilityIcon style={{color: 'gray'}}/>
                                        </div>
                                    ) : (
                                        <div className='visibility' onClick = {handleVisibility}>
                                            <VisibilityOffIcon style={{color: '#2e81f4'}}/>
                                        </div>
                                    )
                                )
                            }
                    </div>
                    <button onClick={signInwithEmailandPassword} type="submit" />
                </form>
                <Button type="submit" onClick={signInwithEmailandPassword}>
                    Sign In
                </Button>
            </div>
            <Link to='/passwordReset' className='forgot_password_text'>
                <h3>Forgot Password ?</h3>
            </Link>
            <div className='login_page_text'>
                <h3>Don't have an Account ?</h3>
            </div>
            <div className='alt_buttons'>
                <Button type="submit" onClick={signup} style={{marginRight: '5px'}}>
                        Sign Up
                </Button>
                <h4 style={{marginLeft:'5px', marginRight: '5px' , marginTop: '25px', color: 'gray'}}>OR</h4>
                <Button type="submit" onClick={signIn} style={{marginLeft: '5px'}}>
                    Sign in with Google
                </Button>
            </div>
        </div>
    );
}

export default Login;