'use strict';

// аккордион на mobile в футере
(function () {
  const accordionButtons = document.querySelectorAll(`.accordion__button`);

  document.querySelector(`.accordion__panel--no-js`).classList.remove(`accordion__panel--no-js`);

  if (accordionButtons) {
    accordionButtons.forEach((accordionButton) => {
      accordionButton.addEventListener(`click`, () => {
        accordionButton.classList.toggle(`accordion__button--active`);
        const accordionPanel = accordionButton.nextElementSibling;
        accordionPanel.classList.toggle(`accordion__panel--active`);
      });
    });
  }

})();
