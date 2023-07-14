import React from 'react';
import LazyLoad from 'react-lazy-load';
import { ads } from '../dataLoader.js';

class ComingSoon extends React.Component {
    
    render() {
        return (
            <div className="comingsoon" >
            <h1>Hold on tight! We're crafting something amazing.</h1>
            <LazyLoad>
            <img src={ads.ComingSoon} alt="Coming Soon"/>
            </LazyLoad>
            </div>
        )
    }
}

export default ComingSoon;
