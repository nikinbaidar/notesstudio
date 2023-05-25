import data from './data/data.json';

/* Images */
import BuyMeACoffee from './data/images/BuyMeACoffee.jpg';
import ActiveLPF from './data/images/Low_pass_filter.jpg';
import Entrapment from './data/images/Entrapment.png';

/* Export loaders */

export function loadPolicies() {
  return data.policies;
}

export function loadNavigationBar() {
  return data.navBarItems;
}

export function loadSideBar() {
    return data.sideBarItems;
}

export function loadCurriculum() {
  return data.curriculum;
}

export function loadQuiz(questionSet) {
  return data[questionSet];
}

export function loadMsg() {
  return data.memos;
}

export function loadFAQ() {
  return data.faq;
}

export function getRoutes(namespace) {
    return data.routes[namespace];
}


export const ads = {
    BuyMeACoffee,
};


export const images = {
    ActiveLPF,
    Entrapment,
};
