let portfolios = document.querySelectorAll('.portfolios__item');

const hideElements = () => {
  let windowInnerWidth = window.innerWidth;
  if (windowInnerWidth >= 678) {
    let portfoliosDesktop = document.querySelectorAll('.portfolios__item--hidden-desktop');
    portfolios.forEach((element) => {
      element.classList.remove('hidden');
    });
    portfoliosDesktop.forEach((element) => {
      element.classList.add('hidden');
    });
  } else {
    let portfoliosMobile = document.querySelectorAll('.portfolios__item--hidden-mobile');
    portfolios.forEach((element) => {
      element.classList.remove('hidden');
    });
    portfoliosMobile.forEach((element) => {
      element.classList.add('hidden');
    });
  }
};

const showElements = () => {
  portfolios.forEach((element) => {
    element.classList.remove('hidden');
  });
};

const manageVisibility = () => {
  let button = document.querySelector('.portfolios__button');
  hideElements();
  button.addEventListener('click', () => {
    let buttonTextClose = document.querySelector('.portfolios__button-text--close');
    let buttonTextOpen = document.querySelector('.portfolios__button-text--open');

    if (buttonTextClose.classList.contains('hidden')) {
      buttonTextClose.classList.remove('hidden');
      buttonTextOpen.classList.add('hidden');
      showElements();
    } else {
      buttonTextClose.classList.add('hidden');
      buttonTextOpen.classList.remove('hidden');
      hideElements();
    }
  })
};

export {manageVisibility};