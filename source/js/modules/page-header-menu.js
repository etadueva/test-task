let button = document.querySelector('.page-header__button');
let logo = document.querySelector('.page-header__logo');
let header = document.querySelector('.page-header');
let wrapperBackgroun = document.querySelector('.background-wrapper');
let listMenu = document.querySelector('.page-header__list');
let links = document.querySelectorAll('.page-header__link');
let items = document.querySelectorAll('.page-header__item');
let wrapper = document.querySelector('.wrapper');
let wrapperMenu = document.querySelector('.page-header__wrapper');
let wrapperOverlay = document.querySelector('.wrapper__overlay');

const clickOutside = (e) => {
  let headerOpen = document.querySelector('.page-header--open');
  if (!headerOpen.contains(e.target)) {
    closeMenu();
  }
};

const closeMenu = () => {
  button.classList.add('page-header__button--close');
  button.classList.remove('page-header__button--open');
  logo.classList.add('page-header__logo--close');
  logo.classList.remove('page-header__logo--open');
  header.classList.add('page-header--close');
  header.classList.remove('page-header--open');
  listMenu.classList.add('page-header__list--close');
  listMenu.classList.remove('page-header__list--open');
  wrapper.classList.remove('wrapper--open');
  wrapperMenu.classList.remove('page-header__wrapper--open');
  wrapperOverlay.classList.remove('wrapper__overlay--open');
  links.forEach((element) => {
    element.classList.add('page-header__link--close');
    element.classList.remove('page-header__link--open');
    element.removeEventListener('click', closeMenu);
  });
  items.forEach((element) => {
    element.classList.add('page-header__item--close');
    element.classList.remove('page-header__item--open');
  });
  document.removeEventListener('click', clickOutside, {passive: true});
};

const openMenu = () => {
  button.classList.remove('page-header__button--close');
  button.classList.add('page-header__button--open');
  logo.classList.remove('page-header__logo--close');
  logo.classList.add('page-header__logo--open');
  header.classList.remove('page-header--close');
  header.classList.add('page-header--open');
  listMenu.classList.remove('page-header__list--close');
  listMenu.classList.add('page-header__list--open');
  wrapper.classList.add('wrapper--open');
  wrapperMenu.classList.add('page-header__wrapper--open');
  wrapperOverlay.classList.add('wrapper__overlay--open');
  links.forEach((element) => {
    element.classList.remove('page-header__link--close');
    element.classList.add('page-header__link--open');
    element.addEventListener('click', closeMenu);
  });
  items.forEach((element) => {
    element.classList.remove('page-header__item--close');
    element.classList.add('page-header__item--open');
  });
  document.addEventListener('click', clickOutside, {passive: true});
};

const switchMenu = () => {
  header.classList.remove('page-header--nojs');
  wrapperBackgroun.classList.remove('background-wrapper--nojs');

  button.addEventListener('click', () => {
    if (button.classList.contains('page-header__button--close')) {
      openMenu();
    } else {
      closeMenu();
    }
  }, {passive: true});
};

export {switchMenu};
