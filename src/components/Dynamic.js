import { Suspense } from 'react';
import { ComingSoon, ComponentRegistry } from './allComponents';

const DynamicComponent = ({ name, props = {} }) => {

  const Component = ComponentRegistry[name];

  if (!Component) {
    return <ComingSoon />;
  }

  return (
    <Suspense fallback={<div className="loading"></div>}>
      <Component {...props} />
    </Suspense>
  );
};

export default DynamicComponent;
