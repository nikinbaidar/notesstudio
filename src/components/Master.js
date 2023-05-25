import React from 'react';
import Router from './router'

class Master extends React.Component {
    render() {
        return (
            <div className="master">
            {Router.defineRoutes(this.props.route)}
            </div>
        );
    };
};

export default Master;
