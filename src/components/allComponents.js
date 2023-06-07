import { lazy } from 'react';

/* Components that aren't bound to any anchors */

export { default as ComingSoon } from './ComingSoon';
export { default as Copyright } from './Copyright';
export { default as Master } from './Master';
export { default as Main } from './Main';
export { default as Navigation } from './NavigationBar';
export { default as Router } from './Router';
export { default as Pilot } from './Pilot';
export { default as Promotions } from './Promotions';

/* Components bound to anchors. */

const navigationModules = {
    Home       : lazy(() => import('./Landing')),
    Projects   : lazy(() => import('./Projects')),
    Wiki       : lazy(() => import('./Wiki')),
};

const policyModules = {
    Philosophy : lazy(() => import('./Philosophy')),
    Privacy    : lazy(() => import('./Privacy')),
    Terms      : lazy(() => import('./Terms')),
}

const wikiModules = {
    Faq        : lazy(() => import('./Faq')),
    Quiz       : lazy(() => import('./Quiz')),
    Semesters  : lazy(() => import('./Card')),
    Subject    : lazy(() => import('./Subject')),
};

const projects = {
    Ideas      : lazy(() => import('./projects/Ideas')),
}

const wikiFirst = {
    math_one   : lazy(() => import('./first/math')),
    phy        : lazy(() => import('./first/physics')),
};

export const ComponentRegistry = {
    ...navigationModules, ...policyModules,
    ...projects,
    ...wikiModules,
    ...wikiFirst, 
};
