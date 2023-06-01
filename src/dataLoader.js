import data from './data/data.json';

/* Images */
import BuyMeACoffee from './data/images/BuyMeACoffee.jpg';
import ActiveLPF from './data/images/Low_pass_filter.jpg';
import Entrapment from './data/images/Entrapment.png';
import Escape from './data/images/Non-Coding-Hobbies-That-Keep-Programmers-Motivated-Inspired-Blog@2x-100.webp';
import Physics from './data/images/relativity.jpg';
import Belectronics from './data/images/BElectronics.jpg';
import Math1 from './data/images/Math1.jpg';
import computer from './data/images/computer.jpg';
import Drawing from './data/images/drawing.png';
import Electrical from './data/images/electrical.jpg';

/* Export loaders */

export function loadPolicies() {
  return data.policies;
}

export function loadNavigationBar() {
  return data.navBarItems;
}

export function loadSideBar(page) {
    return data.sideBarItems[page];
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

export const covers = {
    Escape,
    Physics,
    Math1,
    Belectronics,
    Drawing,
    Electrical,
    computer,
}
