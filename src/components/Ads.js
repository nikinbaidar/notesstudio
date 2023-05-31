import React from 'react';
import { ads } from '../dataLoader';

class Advertisements extends React.Component {
    render() {
        return (
            <div id="ads">
            <a href="https://bit.ly/3Fw7B3R">
            <div className="coffee">
            <img src={ads.BuyMeACoffee} alt="BuyMeACoffee"/>
            <p>Or a book...</p> 
            </div>
            </a>
            </div>
        );
    }
}

export default Advertisements;
