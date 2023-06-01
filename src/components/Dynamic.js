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

// import { Suspense } from 'react';
// import { ComingSoon, ComponentRegistry } from './allComponents';
//
// const DynamicComponent = ({ name, ...props }) => {
//   const Component = ComponentRegistry[name];
//
//   if (!Component) {
//     return <ComingSoon />;
//   }
//
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Component {...props} />
//     </Suspense>
//   );
// };
//
// export default DynamicComponent;
