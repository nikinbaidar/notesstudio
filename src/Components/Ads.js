import React from 'react';
import Images from './Images.js';

class Advertisements extends React.Component {
    render() {
        return (
            <div id="ads">
                <a href="https://bit.ly/3Fw7B3R">
                    <div className="coffee">
                        <img src={Images.BuyMeACoffee} alt=""/>
                        <p>A cup of coffee and your support keeps me fueled!</p> 
                    </div>
                </a>
            </div>
        );
    }
}

export default Advertisements;
