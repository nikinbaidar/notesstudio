import { Suspense } from 'react';
import { ComingSoon, ComponentRegistry } from './allComponents';

const DynamicComponent = ({ name }) => {

    const Component = ComponentRegistry[name];

    if (!Component) {
        return <ComingSoon />;
    }
    return (
        <Suspense>
        <Component />
        </Suspense>
    );
};

export default DynamicComponent;
