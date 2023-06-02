import { Route, Routes } from 'react-router-dom';
import { Master, Pilot, Promotions } from './allComponents';
import { getRoutes } from '../dataLoader';
import { collapseHamburgerMenu } from './utils';

class Router {
    static mapComponent(component, props, pilot) {
        return (
            <>
            <Pilot page={pilot} />
            <div className="master">
            <Master name={component} props={props} />
            </div>
            <Promotions />
            <div id="overlay" className="overlay" onClick={collapseHamburgerMenu}>
            </div>
            </>
        ) ;
    }

    static defineRoutes(namespace) {
        const namespaceRoutes = getRoutes(namespace);
        const routes = namespaceRoutes.map((item, index) => {
            const hasPilot = (item.pilot !== undefined) ? true : false;
            let elem = null; // Declare x with a default value

            if (hasPilot === true) {
                elem = {
                    id: crypto.randomUUID(),
                    path: item.path,
                    component: this.mapComponent(item.component, item.props, item.pilot),
                };
            } else {
                elem = {
                    id: crypto.randomUUID(),
                    path: item.path,
                    component: <Master name={item.component} props={item.props} />,
                };
            }

            return <Route key={elem.id} path={elem.path} element={elem.component} />;
        });

        return <Routes>{routes}</Routes>;
    }
}

export default Router;
