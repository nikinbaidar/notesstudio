import React from 'react';
import { Router } from './allComponents';

class Main extends React.Component {
    /* @module {Component} Main : The main layout component. */
    constructor(props) {
        super(props);
        this.state = {
            showFonepay: false
        };
    }


    toggleFonepay = () => {
        this.setState(prevState => ({
            showFonepay: !prevState.showFonepay
        }), () => {
            document.documentElement.classList.toggle('no-scroll', this.state.showFonepay);
        })
    };


    render() {
        return (
            <React.Fragment>
             <div id="whiteblur" className={`fpoverlay ${this.state.showFonepay ? 'visible' : 'hidden'}`} onClick={this.toggleFonepay}></div>
            <div id={this.props.id} className={this.props.className}>
            {Router.defineRoutes(this.props.route, this.state.showFonepay, this.toggleFonepay)}
            </div>
            </React.Fragment>

        );    
    };
}

export default Main;
