import { Routes, Route } from 'react-router-dom';
import { DynamicComponent, } from './allComponents';

import { getRoutes } from '../dataLoader';

class Router {

    static mapComponent(component, props) {
        return <DynamicComponent name={component} props={props} />;
    }

    static defineRoutes(namespace) {
        const namespaceRoutes = getRoutes(namespace);
        const routes = namespaceRoutes.map((item, index) => {
            const elem = {
                id: crypto.randomUUID(),
                path: item.path,
                component: this.mapComponent(item.component, item.props),
                /* component: Dynamically load component; */
            };

            return <Route key={elem.id} path={elem.path} element={elem.component} />;
        });

        return <Routes>{routes}</Routes>;
    }
}

export default Router;
