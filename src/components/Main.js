import React from 'react';
import { Router } from './allComponents';

class Main extends React.Component {
    /* @module {Component} Main : The main layout component. */

    render() {

        const { toggleParentState } = this.props;

        return (
            <React.Fragment>
            
            <div id={this.props.id} className={this.props.className}>
                {Router.defineRoutes(this.props.route, toggleParentState)}
            </div>
            </React.Fragment>

        );    
    };
}

export default Main;
