import React from 'react';
import { Main, Advertisements } from './allComponents';
import { collapseHamburgerMenu } from './utils';

class Projects extends React.Component {

    render() {
        return (
            <>
            <Main className="pilot-master-wrapper" pilot="test" route="projectmaster" />
            <Advertisements />
            <div id="overlay" className="overlay" onClick={collapseHamburgerMenu}>
            </div>
            </>
        );
    }
}

export default Projects;
