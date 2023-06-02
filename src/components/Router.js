import { Routes, Route } from 'react-router-dom';
import { Master, Pilot } from './allComponents';

import { getRoutes } from '../dataLoader';

class Router {

    static mapComponent(component, props, pilot) {
        return (
            <>
            <Pilot page={pilot} />
            <div className="master">
                <Master name={component} props={props} />
            </div>
            </>
        ) ;
    }

    static defineRoutes(namespace) {
        const namespaceRoutes = getRoutes(namespace);
        const routes = namespaceRoutes.map((item, index) => {
            const hasPilot = (item.pilot !== undefined) ? true : false;
            let x = null; // Declare x with a default value

            if (hasPilot === true) {
                x = this.mapComponent(item.component, item.props, item.pilot);
            } else {
                x = <Master name={item.component} props={item.props} />;
            }

            const elem = {
                id: crypto.randomUUID(),
                path: item.path,
                component: x, // Use the updated value of x here
            };

            return <Route key={elem.id} path={elem.path} element={elem.component} />;
        });

        return <Routes>{routes}</Routes>;
    }
}

export default Router;
