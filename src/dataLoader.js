import data from './data/data.json';

import BElectronics  from './data/images/BElectronics.jpg';
import Biomaterials  from './data/images/biomaterials.jpg';
import Biochemistry  from './data/images/biochemistry.avif';
import BuyMeACoffee  from './data/images/BuyMeACoffee.jpg';
import Computer      from './data/images/computer.jpg';
import Computer2     from './data/images/computer_system.avif';
import Chemistry     from './data/images/chemistry.avif';
import DigitalLogic  from './data/images/digital_logic.jpg';
import Drawing       from './data/images/drawing.png';
import Eem           from './data/images/eem.png';
import Electrical    from './data/images/electrical.jpg';
import Entrapment    from './data/images/Entrapment.png';
import Escape        from './data/images/escape.webp';
import Fluid         from './data/images/fluid.avif';
import Anatomy1      from './data/images/anatomy1.avif';
import LowPassFilter from './data/images/Low_pass_filter.jpg';
import Math1         from './data/images/Math1.jpg';
import Math2         from './data/images/math2.jpg';
import Math3         from './data/images/math3.jpg';
import Mechanical    from './data/images/mechanical.avif';
import Micro         from './data/images/microprocessors.png';
import Physics       from './data/images/relativity.jpg';


export const ads = {
    BuyMeACoffee,
}

export const quizQuestionImages = {
    ActiveLPF: LowPassFilter,
    Entrapment,
}

export const covers = {
    Anatomy1,
    Chemistry,
    DigitalLogic,
    Biomaterials,
    Biochemistry,
    Eem,
    Escape,
    Fluid,
    Physics,
    Math1,
    Math2,
    Math3,
    Mechanical,    
    Micro,    
    Belectronics: BElectronics,
    Drawing,
    Electrical,
    computer : Computer,
    Computer2 : Computer2,
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
