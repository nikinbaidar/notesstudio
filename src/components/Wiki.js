import React from 'react';
import { Main, Advertisements } from './allComponents';
import { collapseHamburgerMenu } from './utils';


class Wiki extends React.Component {

    render() {
        return (
            <>
            <Main className="pilot-master-wrapper" pilot="wiki" route="wikimaster" />
            <Advertisements />
            <div id="overlay" className="overlay" onClick={collapseHamburgerMenu}>
            </div>
            </>
        );
    }
}

export default Wiki;
