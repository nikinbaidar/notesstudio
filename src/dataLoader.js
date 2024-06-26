import data from './data/data.json';

import Anatomy1      from './data/images/anatomy1.avif';
import Anatomy2      from './data/images/anatomy2.jpg';
import BElectronics  from './data/images/BElectronics.jpg';
import Biochemistry  from './data/images/biochemistry.avif';
import Biomaterials  from './data/images/biomaterials.jpg';
import BioMedInsI    from './data/images/biomedical_instrumentation1.jpg'
import BioMedInsII   from './data/images/biomedical_instrumentation2.jpg'
import BuyMeACoffee  from './data/images/BuyMeACoffee.jpg';
import ComingSoon    from './data/images/coming_soon.avif';
import Communication from './data/images/communication.avif';
import Computer      from './data/images/computer.jpg';
import Computer2     from './data/images/computer_system.avif';
import Control       from './data/images/control.avif';
import Chemistry     from './data/images/chemistry.avif';
import DigitalLogic  from './data/images/digital_logic.jpg';
import DigitalSignal from './data/images/digital_signal.jpg';
import Drawing       from './data/images/drawing.png';
import Economics     from './data/images/economics.avif';
import Epp           from './data/images/epp.avif';
import FonepayQR     from './data/images/fonepay.jpg';
import Tdi           from './data/images/tdi.jpg';
import Nn            from './data/images/NN.avif';
import Eem           from './data/images/eem.png';
import Implantable   from './data/images/implantable.avif';
import Informatics   from './data/images/informatics.avif';
import MedElx        from './data/images/med_electronics.jpg';
import MedImg1       from './data/images/imagign1.avif';
import MedImg2       from './data/images/imagign2.avif';
import Mip           from './data/images/image_processing.png';
import MiM           from './data/images/mim.png';
import Embedded      from './data/images/embedded.webp';
import Electrical    from './data/images/electrical.jpg';
import Entrapment    from './data/images/Entrapment.png';
import Escape        from './data/images/escape.webp';
import Fluid         from './data/images/fluid.avif';
import LowPassFilter from './data/images/Low_pass_filter.jpg';
import Tux           from './data/images/c7b8113247fecd83bd9b5ed5bd3f34d5.jpg';
import Maintenance   from './data/images/equipmentmaintenance.avif';
import Math1         from './data/images/Math1.jpg';
import Math2         from './data/images/math2.jpg';
import Math3         from './data/images/math3.jpg';
import Mechanical    from './data/images/mechanical.avif';
import Measurement   from './data/images/measurement.avif';
import Micro         from './data/images/microprocessors.png';
import Physics       from './data/images/relativity.jpg';
import ProjectMgmt   from './data/images/project.avif';
import Research      from './data/images/research.jpg';
import Robotics      from './data/images/robotics.jpg';
import Sociology     from './data/images/sociology.jpg';
import Structural    from './data/images/structural.jpg';
import Biomechanics  from './data/images/biomechanics.jpg';
import Electronics   from './data/images/electronics.jpg';
import Math4         from './data/images/math4.jpg';
import Probability   from './data/images/probability.jpg';
import Numerical     from './data/images/numerical.jpg';
import TEQues        from './data/images/modelquestion01B64.png';
import ImagingQues   from './data/images/mri_modalities.png';
import ECGQues       from './data/images/ecg_lead_attachments.png';
import PertQues      from './data/images/pertQues.png';
import FonePay       from './data/images/weacceptfonepay.png';


export const ads = {
    BuyMeACoffee,
    ComingSoon,
    Tux,
    Fonepay: FonepayQR,
    WeAcceptFonePay: FonePay,
}


export const quizQuestionImages = {
    ActiveLPF: LowPassFilter,
    Entrapment,
    TEQues,
    ImagingQues,
    ECGQues,
    PertQues,
}


export const covers = {
    Anatomy1,
    Anatomy2,
    Electronics,
    Biomechanics,
    Chemistry,
    DigitalLogic,
    NN: Nn,
    DigitalSignal,
    Biomaterials,
    Biochemistry,
    Tdi,
    Numerical,
    Economics,
    Epp,
    Eem,
    Instrumentation1: BioMedInsI,
    Instrumentation2: BioMedInsII,
    Implantable,
    Informatics,
    Escape,
    Fluid,
    Physics,
    Maintenance,    
    Math1,
    Math2,
    Math3,
    Math4,
    Measurement,    
    Mechanical,    
    MedElx,    
    MedImg1,    
    MedicalImagingII: MedImg2,    
    Micro,    
    Mim: MiM,    
    Mip,    
    Belectronics: BElectronics,
    Drawing,
    Electrical,
    Communication,
    Control,
    computer : Computer,
    Computer2 : Computer2,
    Research,
    Robotics,
    Probability,
    Project: ProjectMgmt,
    Sociology,
    Structural,
    Embedded,
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

export function loadCards(page) {
    return data.cards[page];
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
