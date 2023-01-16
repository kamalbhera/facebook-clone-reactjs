import React, { useEffect } from 'react';

import Sidebar from '../../Sidebar/sidebar';
import Feed from '../../Feed/feed';
import Widgets from '../../Widgets/Widgets';
import { useStateValue } from '../../StateProvider/StateProvider';
import CircularIndeterminate from '../../components/Spinner/Spinner.component';

import './HomePage.css';

const HomePage = () => {

    const [{ user }, dispatch] = useStateValue();

    const [profileExist, setprofileExist] = React.useState(false);

    useEffect(
        () => {
            let timer = setTimeout(() => setprofileExist(true), 5000);
            return () => {
                clearTimeout(timer);
            };
        },[]
    );

    return (
        <div className={profileExist ? `homepage_body`:`homepage_body_spinner--active`}>
            {
                !profileExist ? (
                    <div className='homepage_spinner'>
                        <CircularIndeterminate />
                    </div>
                ) : (
                    <div className='homepage_body' style={{padding: '10px'}}>
                        <div><Sidebar/></div>
                        <div><Feed/></div>
                        <div><Widgets/></div>
                    </div>
                )
            }
        </div>
    );
}

export default HomePage;