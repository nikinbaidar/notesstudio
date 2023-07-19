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
export { default as SEO } from './Seo';

/* Components bound to anchors. */

const navigationModules = {
    Home       : lazy(() => import('./ComingSoon')),
    Projects   : lazy(() => import('./Projects')),
    Wiki       : lazy(() => import('./Wiki')),
    Forums     : lazy(() => import('./ComingSoon')),
    Blog       : lazy(() => import('./ComingSoon')),
    LogIn      : lazy(() => import('./ComingSoon')),
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
    Subject    : lazy(() => import('./Master')),
};

const projects = {
    Ideas      : lazy(() => import('./projects/Ideas')),
}

const intros = {
    introMath  : lazy(() => import('./Subject').then( module => ({ default: module.MathFirst }))),
    introPhy   : lazy(() => import('./Subject').then(module =>  ({ default: module.Physics }))),
};

const wikiFirst = {
    leibniz : lazy(() => import('./first/maths/math')),
    physics : lazy(() => import('./first/physics')),
};

export const ComponentRegistry = {
    ...navigationModules, 
    ...policyModules,
    ...projects,
    ...wikiModules,
    ...intros,
    ...wikiFirst, 
};
