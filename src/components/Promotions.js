import React from 'react';
import LazyLoad from 'react-lazy-load';
import { ads } from '../dataLoader.js';

class Promotions extends React.Component {

    render() {
        return (
            <>
            <div id="ads">

            <div className="promotions tux">
            <LazyLoad>
            <img src={ads.Tux} alt="Tux Logo"/>
            </LazyLoad>

            <p>This is a Linux promotion. I encourage everyone to use Linux. <a
            className="need-attention"
            href="https://www.opensourceforu.com/2020/03/reasons-to-use-linux/">
            Here's why.</a></p>
            </div>

            <div className="promotions donation">
            <button id="fonepay" onClick={this.props.togglefunc}>
            <LazyLoad>
            <img src={ads.WeAcceptFonePay} alt="Tux Logo"/>
            </LazyLoad>
            <p>Support me in staying motivated on this project.</p>
            </button>
            </div>

            {/* <div className="promotions coffee"> */}
            {/* <LazyLoad> */}
            {/* <img src={ads.BuyMeACoffee} alt="Tux Logo"/> */}
            {/* </LazyLoad> */}
            {/* <p>Or a book</p> */}
            {/* </div> */}

            </div>

            </>
        );
    }
}

export default Promotions;
