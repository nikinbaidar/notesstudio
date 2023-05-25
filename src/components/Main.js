import React from 'react';
import Router from './router'

class Main extends React.Component {
    render() {
        return <section id="main">{Router.defineRoutes('main')}</section>;
    }
}

export default Main;
