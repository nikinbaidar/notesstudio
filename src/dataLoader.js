/** Data Loader Module
 *
 * This module provides functions and data for dynamically loading various
 * information, including policies, navigation bar items, curriculum, quiz
 * questions, memos, FAQs, routes, and images.
 *
 * @module dataLoader
 *
 ** Images Exported by Data Loader
 *
 * The exported images used by the data loader module. The images are provided
 * as named exports and can be used in other parts of the application.
 *
 * @exports {Object} ads
 * @exports {Object} quizQuestionImages
 * @exports {Object} covers
 *
 *
 ** Text Data Exported by Data Loader
 *
 * The exported text data used by the data loader module. The text data
 * includes policies, navigation bar items, curriculum, quiz questions, memos,
 * FAQs, and routes. These data can be accessed through the provided functions.
 *
 * @exports {Function} loadPolicies
 * @exports {Function} loadNavigationBar
 * @exports {Function} boardPilot
 * @exports {Function} loadCurriculum
 * @exports {Function} loadQuiz
 * @exports {Function} loadMsg
 * @exports {Function} loadFAQ
 * @exports {Function} getRoutes 
 *
 */


import data from './data/data.json';

import BElectronics  from './data/images/BElectronics.jpg';
import BuyMeACoffee  from './data/images/BuyMeACoffee.jpg';
import Computer      from './data/images/computer.jpg';
import Drawing       from './data/images/drawing.png';
import Electrical    from './data/images/electrical.jpg';
import Entrapment    from './data/images/Entrapment.png';
import Escape        from './data/images/escape.webp';
import LowPassFilter from './data/images/Low_pass_filter.jpg';
import Math1         from './data/images/Math1.jpg';
import Physics       from './data/images/relativity.jpg';


export const ads = {
    BuyMeACoffee,
}

export const quizQuestionImages = {
    ActiveLPF: LowPassFilter,
    Entrapment,
}

export const covers = {
    Escape,
    Physics,
    Math1,
    Belectronics: BElectronics,
    Drawing,
    Electrical,
    computer : Computer,
}


export function loadPolicies() {
    return data.policies;
}

export function loadNavigationBar() {
    return data.navBarItems;
}

export function boardPilot(page) {
    return data.pilot[page];
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
