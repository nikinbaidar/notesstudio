import React from 'react';
import LazyLoad from 'react-lazy-load';
import { ads } from '../dataLoader.js';

class Fonepay extends React.Component {
    
    render() {
        return (
            <div className="fonepay" >
            <LazyLoad>
            <img src={ads.Fonepay} alt="Fonepay QR"/>
            </LazyLoad>
            </div>
        )
    }
}

export default Fonepay;
