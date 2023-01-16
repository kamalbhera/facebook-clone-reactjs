import React from 'react';

import './Widgets.css';

const Widgets = () => {

    return (
        <div className="widgets">
            <iframe className="iframe"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffriends.tv&tabs=timeline&width=250&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                width="240"
                height="1500"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true} 
                allowtransparency="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            ></iframe>
        </div>
    );
}

export default Widgets;