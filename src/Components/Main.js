import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { getRoutes } from '../dataLoader';

import {
    Sidebar,
    Advertisements,
    Quiz,
    Semesters,
    Faq 
} from './MyComponents';


class Main extends React.Component {

    hideLeftSideBar = () => {
        const leftsidebar = document.getElementById('leftsidebar');
        const overlay = document.getElementById('overlay');
        leftsidebar.classList.remove('active');
        leftsidebar.classList.add('inactive');
        overlay.classList.remove('active');
    }

    mapComponent = (namespace, component, p) => {
        /* Returns a map of all components in the current namespace. */
        switch (namespace) {
            case "main": {
                return ({
                    Wiki: <Wiki />,
                    Terms: <h1>Terms of use</h1>,
                });
            }
            case "master":
                {
                    return {
                        Faq: <Faq title={p.title} />,
                        Semesters: <Semesters name={p.name} title={p.title} />,
                        Quiz: <Quiz name={p.name} title={p.title} heading={p.heading} />,
                    }
                }
            default: 
                return null;
        }
    }

    defineRoutes = (namespace) => {
        const namespaceRoutes = getRoutes(namespace);
        const routes = namespaceRoutes.map((item, index) => {
            const elem = { 
                id: crypto.randomUUID(),
                path: item.path,
                component: this.mapComponent(namespace, item.component,
                    item.props)[item.component],
                /* component: Dynamiclly load component; */
            };

            return <Route key={elem.id} path={elem.path}
                element={elem.component} />;
        });

        return <Routes>{routes}</Routes>;
    }

    render() { return <div id="main">{this.defineRoutes("main")}</div>; }; 
}


class Wiki extends Main {

    render() {
        return (
            <>
            <Sidebar page="home"/>
            <div id="master">{this.defineRoutes("master")}</div>
            <Advertisements/>
            <div id="overlay" className="overlay" onClick={this.hideLeftSideBar}></div>
            </>
        );
    }
}

export default Main;
