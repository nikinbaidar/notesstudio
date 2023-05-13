import data from './data.json';

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
