import React from 'react';
import { Sidebar, Main, Advertisements } from './allComponents';
import { collapseHamburgerMenu } from './utils';


class Wiki extends React.Component {

    render() {
        return (
            <>
            <Sidebar page="home" />
            <Main class="master" route="master" />
            <Advertisements />
            <div id="overlay" className="overlay" onClick={collapseHamburgerMenu}>
            </div>
            </>
        );
    }
}

export default Wiki;
