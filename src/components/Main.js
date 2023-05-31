import React from 'react';
import Router from './router'

class Main extends React.Component {
    render() {
        return (
            <div id={this.props.id} className={this.props.class}>
            {Router.defineRoutes(this.props.route)}
            </div>
        );    
    };
}

export default Main;
