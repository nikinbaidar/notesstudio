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


class Router {
    static mapComponent(namespace, component, p) {
        switch (namespace) {
            case 'main': {
                return {
                    Wiki: <Wiki />,
                    Terms: <h1>Terms of use</h1>,
                };
            }
            case 'master': {
                return {
                    Faq: <Faq title={p.title} />,
                    Semesters: <Semesters name={p.name} title={p.title} />,
                    Quiz: <Quiz name={p.name} title={p.title} heading={p.heading} />,
                };
            }
            default:
                return null;
        }
    }

    static defineRoutes(namespace) {
        const namespaceRoutes = getRoutes(namespace);
        const routes = namespaceRoutes.map((item, index) => {
            const elem = {
                id: crypto.randomUUID(),
                path: item.path,
                component: Router.mapComponent(
                    namespace,
                    item.component,
                    item.props
                )[item.component],
                /* component: Dynamically load component; */
            };

            return <Route key={elem.id} path={elem.path} element={elem.component} />;
        });

        return <Routes>{routes}</Routes>;
    }
}


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
            <Master name="master" />
            {/* Right sidebar */}
            <Advertisements />
            <div id="overlay" className="overlay"
            onClick={this.collapseHamburgerMenu}>
            </div>
            </>
        );
    }
}

class Master extends React.Component {
    render() {
        return <div className="master">{Router.defineRoutes(this.props.name)}</div>;
    }
}


class Main extends React.Component {
    render() {
        return <section id="main">{Router.defineRoutes('main')}</section>;
    }
}



export default Main;
