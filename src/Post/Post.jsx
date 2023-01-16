import React from 'react';

import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import ReplyIcon from '@material-ui/icons/Reply';
import { ExpandMoreOutlined } from '@material-ui/icons';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useStateValue } from '../StateProvider/StateProvider';

import Divider from '@material-ui/core/Divider';

import Floatingdesc from '../components/Floatingdesc';
import Postmenu from '../components/Postmenu';
import { ProfileTooltip } from '../components/Tooltip.component';

import './Post.css';

const Post = ({profilepic, image, username, timestamp, message, uid}) => {

    const [isLike, setisLike] = React.useState(false);

    const [{ user }, dispatch] = useStateValue();

    const [comment, setComment] = React.useState("");

    const handleClick = () => {
        setisLike(!isLike);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setComment("");
    }

    return (
        <div className='post'>
            <div className="post_top">
                <ProfileTooltip
                    title={
                        <>
                            <Floatingdesc
                                profilepic={profilepic} 
                                username={username}
                            />
                        </>
                    }
                      
                    interactive
                >
                    <Avatar className="post_avatar" src={profilepic}/>
                </ProfileTooltip>
                <div className="post_topInfo">
                    <div className='post_topInfo_left'>
                        <ProfileTooltip
                            title={
                                <>
                                    <Floatingdesc 
                                        profilepic={profilepic}
                                        username={username}
                                    />
                                </>
                            }
                            interactive
                        >
                            <Link to={{pathname: `/profile/${username}`, prop1: `${username}`, prop2: `${profilepic}`, prop3: `${uid}`}} style={{textDecoration: 'none', color: 'black'}}>
                                <h3>{username}</h3>
                            </Link>
                        </ProfileTooltip>
                        <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                    </div>
                    <div className='post_topInfo_right'>
                        <ProfileTooltip
                            className='more_info'
                            title={
                                <>
                                    <Postmenu 
                                        username={username}
                                    />
                                </>
                            }
                            interactive
                        >
                            <MoreHorizIcon style={{color: 'gray'}}/>
                        </ProfileTooltip>
                    </div>
                </div>
            </div>
            <div className="post_bottom">
                <p>{message}</p>
            </div>
            <div className="post_image">
                <img src={image} alt=""/>
            </div>
            <div className="post_newprofilepic">
                {
                    message==='Updated Profile Picture' ? (
                        <Avatar src={profilepic} style={{borderRadius: '999px', border: '10px solid #c3c9ce', height: '43vh', width: '20vw', borderWidth: '10px'}}/>
                    ) : (
                        <></>
                    )
                }
            </div>
            <Divider variant="middle"/>
            <div className="post_options">
                <div className="post_option" onClick={handleClick} style={isLike ? {color: "#2e81f4"} : null}>
                    <ThumbUpIcon onClick={handleClick} />
                    <p>Like</p>
                </div>
                <div className="post_option">
                    <ModeCommentIcon/>
                    <p>Comment</p>
                </div>
                <div className="post_option">
                    <ReplyIcon/>
                    <p>Share</p>
                </div>
                <div className="post_option">
                    <AccountCircleIcon/>
                    <ExpandMoreOutlined/>
                </div>
            </div>
            <Divider variant="middle"/>
            <div className="comment">
                <Avatar src={user.photoURL}/>
                <form>
                    <input
                        value={comment}
                        onChange={(e) => setComment(e.target.value)} 
                        className="comment_input" 
                        type="text" 
                        placeholder={`Write a comment....`}
                    />
                    <button onClick={handleSubmit} type="submit">Hidden submit</button>
                </form>
            </div>
        </div>
    );
}

export default Post;