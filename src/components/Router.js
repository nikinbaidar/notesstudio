import { Routes, Route } from 'react-router-dom';
import { ComingSoon, DynamicComponent, } from './allComponents';

import { getRoutes } from '../dataLoader';

import { Faq, Quiz, Semesters, Subject, } from './allComponents';

class Router {

    static mapComponent(namespace, component, p) {
        switch (namespace) {
            case 'main': {
                return <DynamicComponent name={component} />;
            }
            case 'master': {
                let x = {
                    Faq: <Faq title={p.title} />,
                    Semesters: <Semesters name={p.name} title={p.title} />,
                    Quiz: <Quiz name={p.name} title={p.title} heading={p.heading} />,
                    Subject: <Subject name={p.name} bgc={p.bgc} cover={p.cover}/>,
                };
                return x[component];
            }
            default:
                return <ComingSoon />;
        }
    }

    static defineRoutes(namespace) {
        const namespaceRoutes = getRoutes(namespace);
        const routes = namespaceRoutes.map((item, index) => {
            const elem = {
                id: crypto.randomUUID(),
                path: item.path,
                component: this.mapComponent(
                    namespace,
                    item.component,
                    item.props
                ),
                /* component: Dynamically load component; */
            };

            return <Route key={elem.id} path={elem.path} element={elem.component} />;
        });

        return <Routes>{routes}</Routes>;
    }
}

export default Router;
