import React, { useEffect, useState } from 'react';

import StoryReel from '../Story_Reel/StoryReel';
import StatusSender from '../StatusSender/StatusSender';
import Post from '../Post/Post';
import db from '../firebase.utils/firebase';

import './feed.css';

const Feed = () => {
//  const [{ user }, diapatch] = useStateValue();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      db.collection('Posts').orderBy("timestamp", "desc").onSnapshot(snapshot => (
        setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
      ))
  }, [])

  return (
    <div className="feed">
        { /* Story reel */ }
        { /* Status updater/sender */ }
        <StoryReel />
        <StatusSender />
        {
          posts.map((post) => (
            <Post 
              key={post.data.id}
              profilepic={post.data.profilepic}
              message={post.data.message}
              timestamp={post.data.timestamp}
              username={post.data.username}
              image={post.data.image}
              uid={post.data.uid}
            />
        ))}
    </div>
  );
}

export default Feed;