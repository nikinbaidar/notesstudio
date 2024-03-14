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
    Blog       : lazy(() => import('./BlogMaser')),
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

const blogs = {
    PackageManagement : lazy(() => import ('./blog/package_management'))
}

const intros = {
    introMath : lazy(() =>
        import('./Subject').then(module => ({
            default: () => <module.Intro name="introMath" />,
        }))
    ),
    Physics : lazy(() =>
        import('./Subject').then(module => ({
            default: () => <module.Intro name="physics" />,
        }))
    ),
    MedicalIndustryManagement : lazy(() =>
        import('./Subject').then(module => ({
            default: () => <module.Intro name="medicalIndustryManagement" />,
        }))
    ),
};

const wikiFirst = {
    leibniz : lazy(() => import('./first/maths/math')),
    physics : lazy(() => import('./first/physics')),
};

const wikiEighth = {
    intro : lazy(() => import('./eighth/mim/intro')),
    medindustry : lazy(() => import('./eighth/mim/medical_industry')),
    classification : lazy(() => import('./eighth/mim/classification')),
    reclassification: lazy(() => import('./eighth/mim/reclassification')),
    cemarking: lazy(() => import('./eighth/mim/cemarking')),
    general_requirements: lazy(() => import('./eighth/mim/requirements')),
};

export const ComponentRegistry = {
    ...navigationModules, 
    ...policyModules,
    ...projects,
    ...blogs,
    ...wikiModules,
    ...intros,
    ...wikiFirst, 
    ...wikiEighth,
};
