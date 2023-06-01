import { lazy } from 'react';

/* Components that aren't bound to any routes */

export { default as Advertisements } from './Ads';
export { default as ComingSoon } from './ComingSoon';
export { default as Copyright } from './Copyright';
export { default as DynamicComponent } from './Dynamic';
export { default as Main } from './Main';
export { default as Navigation } from './NavigationBar';
export { default as Router } from './Router';


/* Components that are bound to a route and have props 
 * TODO: Optimize DynamicComponent to implement props; maybe use webpack to
 * have more control over dynamic componenets.
 */
 
export { default as Faq } from './Faq';
export { default as Quiz } from './Quiz';
export { default as Semesters } from './Semesters';
export { default as Sidebar } from './Sidebar';
export { default as Subject } from './Subject';

/* Components bound to a route */

const navigationModules = {
    Home       : lazy(() => import('./Landing')),
    Wiki       : lazy(() => import('./Wiki')),
    Terms      : lazy(() => import('./Terms')),
    Privacy    : lazy(() => import('./Privacy')),
    Philosophy : lazy(() => import('./Philosophy')),
}

const coreFirst = {
    math_one   : lazy(() => import('./first/math')),
    phy        : lazy(() => import('./first/physics')),
}

export const ComponentRegistry = {
    ...navigationModules, ...coreFirst,
};
