let portfolios = document.querySelectorAll('.portfolios__item');

const determineWidthScreen = () => {
  let windowInnerWidth = window.innerWidth;
  console.log(windowInnerWidth);
  if (windowInnerWidth >= 678) {
    let portfoliosDesktop = document.querySelectorAll('.portfolios__item--hidden-desktop');
    portfolios.forEach((element) => {
      element.classList.remove('portfolios__item--hidden');
    });
    portfoliosDesktop.forEach((element) => {
      element.classList.add('portfolios__item--hidden');
    });
  } else {
    let portfoliosMobile = document.querySelectorAll('.portfolios__item--hidden-mobile');
    portfolios.forEach((element) => {
      element.classList.remove('portfolios__item--hidden');
    });
    portfoliosMobile.forEach((element) => {
      element.classList.add('portfolios__item--hidden');
    });
  }
};

const manageVisibility = () => {
  determineWidthScreen();
  let button = document.querySelector('.portfolios__button');
  button.addEventListener('click', () => {
    portfolios.forEach((element) => {
      element.classList.remove('portfolios__item--hidden')
    });
  })
};

export {manageVisibility};