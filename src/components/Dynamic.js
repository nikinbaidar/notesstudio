import React, { lazy, Suspense } from 'react';
import ComingSoon from './comingsoon.js';

const componentRegistry = {
  math_one: lazy(() => import('./first/math.js')),
  phy: lazy(() => import('./first/physics.js')),
};

const DynamicComponent = ({ props }) => {
  const componentName = props.name;
  const Component = componentRegistry[componentName];

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
