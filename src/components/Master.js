import React, { Suspense } from 'react';
import { ComingSoon, ComponentRegistry } from './allComponents';

const Master = ({ name, props = {} }) => {
    /*
     * @module {Component} Master : The main content component. 
     * 
     */

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

export default Master;
