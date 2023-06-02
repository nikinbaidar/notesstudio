import { lazy } from 'react';

/* Components that aren't bound to any anchors */

export { default as Advertisements } from './Ads';
export { default as ComingSoon } from './ComingSoon';
export { default as Copyright } from './Copyright';
export { default as Master } from './Master';
export { default as Main } from './Main';
export { default as Navigation } from './NavigationBar';
export { default as Router } from './Router';
export { default as Pilot } from './Pilot';

/* Components bound to anchors. */

const navigationModules = {
    Home       : lazy(() => import('./Landing')),
    Philosophy : lazy(() => import('./Philosophy')),
    Privacy    : lazy(() => import('./Privacy')),
    Projects   : lazy(() => import('./Projects')),
    Terms      : lazy(() => import('./Terms')),
    Wiki       : lazy(() => import('./Wiki')),
};


const wikiModules = {
    Faq        : lazy(() => import('./Faq')),
    Quiz       : lazy(() => import('./Quiz')),
    Semesters  : lazy(() => import('./Semesters')),
    Subject    : lazy(() => import('./Subject')),
};


const wikiFirst = {
    math_one   : lazy(() => import('./first/math')),
    phy        : lazy(() => import('./first/physics')),
};


export const ComponentRegistry = {
    ...navigationModules,
    ...wikiModules,
    ...wikiFirst, 
};
