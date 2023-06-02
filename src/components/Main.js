import React from 'react';
import { Router } from './allComponents';

class Main extends React.Component {
    render() {
        return (
            <div id={this.props.id} className={this.props.className}>
                {Router.defineRoutes(this.props.route)}
            </div>
        );    
    };
}

export default Main;
