import React from 'react';

import Story from '../Story/Story';
import { useStateValue } from '../StateProvider/StateProvider';

import './StoryReel.css';

const StoryReel = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="storyReel">
        { /* Stories */ }
        <Story
          image='https://pbs.twimg.com/profile_images/1268962740741103616/x0-DE29X_400x400.jpg'
          profileSrc={user.photoURL}
          title={user.displayName}
        />
        <Story
          image='https://img.mensxp.com/media/content/2019/Jun/qualities-amp-flaws-of-chandler-lsquo-sarcastic-rsquo-bing1200-1560855891_1200x900.jpg'
          profileSrc='https://i.pinimg.com/originals/24/e8/c4/24e8c4da0e0eb6dd11e20c50d4e61c88.png'
          title='Chandler Bing'
        />
        <Story
          image='https://images.mygoodtimes.in/wp-content/uploads/2019/07/25104444/17.jpg'
          profileSrc='https://i.guim.co.uk/img/media/ae14333615408ab5d5ba6c23810be683e0d6f631/389_282_1481_889/master/1481.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=fe8e04916fba748b25cc93727609a391'
          title='Joey Tribbiani'
        />
        <Story
          image='https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-friends-courteney-cox.jpg'
          profileSrc='https://sparkchronicles.com/wp-content/uploads/2020/05/262a6fa1d7942d8ad415777fdc2e18fd.jpg'
          title='Monica Geller'
        />
        <Story
          image='https://images.news18.com/ibnlive/uploads/2015/08/Phoebe-Guitar.jpg'
          profileSrc='https://www.stylist.co.uk/images/app/uploads/2019/09/12102728/gettyimages-143479380.jpg?w=1200&h=1&fit=max&auto=format%2Ccompress'
          title='Phoebe Buffay'
        />
        
    </div>
  );
}

export default StoryReel;