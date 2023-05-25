import { Routes, Route } from 'react-router-dom';

import { getRoutes } from '../dataLoader';

import {
    Faq,
    Quiz,
    Semesters,
    Terms,
    Wiki,
} 
from './allComponents';


class Router {
    static mapComponent(namespace, component, p) {
        switch (namespace) {
            case 'main': {
                return {
                    Wiki: <Wiki />,
                    Terms: <Terms />,
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

export default Router;
