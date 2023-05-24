import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import  Components  from './Components/MyComponents';
import { getRoutes } from './dataLoader';
import './App.css';

class App extends React.Component {

    constructor() {
        super();
        this.helmetContext = {};
    }

    hideLeftSideBar = () => {
        const leftsidebar = document.getElementById('leftsidebar');
        const overlay = document.querySelector('section > div.overlay');
        leftsidebar.classList.remove('active');
        leftsidebar.classList.add('inactive');
        overlay.classList.remove('active');
    }

    mapComponent = (namespace, component, p) => {
        let Members;

        switch (namespace) {
            case "Main":
                {
                    Members = {
                        "Faq" : <Components.Faq title={p.title} />,
                        "Semesters" : <Components.Semesters name={p.name} title={p.title} />,
                        "Quiz" : <Components.Quiz name={p.name} title={p.title} heading={p.heading} />,
                    }
                    break;
                }
            case "Copyright":
                {
                    Members = {
                        "Terms" : <h1>Hello, World!</h1>
                    }
                    break;
                }
            default: 
                return null;
        }

        return Members[component];

    }


    defineRoutes = (namespace) => {
        const namespaceRoutes = getRoutes(namespace);
        const routes = namespaceRoutes.map((item, index) => {
            const elem = { 
                id: crypto.randomUUID(),
                path: item.path,
                component: this.mapComponent(namespace, item.component, item.props),
            };

            return (
                <React.Fragment key={elem.id}>
                <Route path={elem.path} element={elem.component} />
                </React.Fragment>
            )
        });

        return (
            <Routes>{routes}</Routes>
        );
    }


    render() {
        return (
            <HelmetProvider context={this.helmetContext}>
            <BrowserRouter>
                <Components.Navigation/>
                <section>
                    <Components.Sidebar page="home"/>
                    <div id="main">{this.defineRoutes("Main")}</div>
                    <Components.Advertisements/>
                    <div className="overlay" onClick={this.hideLeftSideBar}></div>
                </section>
                <Components.Copyright/>
            </BrowserRouter>
            </HelmetProvider>
        );
    }; 
}

export default App;
