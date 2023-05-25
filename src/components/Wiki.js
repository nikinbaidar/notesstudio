import React from 'react';
import { Sidebar, Master, Advertisements } from './allComponents';


class Wiki extends React.Component {

    collapseHamburgerMenu = () => {
        const leftsidebar = document.getElementById('leftsidebar');
        const overlay = document.getElementById('overlay');
        leftsidebar.classList.remove('active');
        leftsidebar.classList.add('inactive');
        overlay.classList.remove('active');
    };

    render() {
        return (
            <>
            <Sidebar page="home" />
            <Master route="master" />
            <Advertisements />
            <div id="overlay" className="overlay"
            onClick={this.collapseHamburgerMenu}>
            </div>
            </>
        );
    }
}

export default Wiki;
