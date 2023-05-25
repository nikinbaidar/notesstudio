import { Routes, Route } from 'react-router-dom';

import { getRoutes } from '../dataLoader';

/* Import the components */

import { Wiki, Quiz, Semesters, Faq } from './MyComponents';


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

export default Router;
