'use strict';

// Управление аккордионом на мобильной ширине

(() => {
  const accordionButtons = document.querySelectorAll(`.accordion__button`);

  document.querySelector(`.accordion__panel--no-js`).classList.remove(`accordion__panel--no-js`);

  if (accordionButtons) {
    accordionButtons.forEach((accordionButton) => {
      accordionButton.addEventListener(`click`, () => {
        accordionButtons.forEach((accordionButton) => {
          accordionButton.classList.remove(`accordion__button--active`);
          const accordionPanel = accordionButton.nextElementSibling;
          accordionPanel.classList.remove(`accordion__panel--active`);
        });
        accordionButton.classList.add(`accordion__button--active`);
        const accordionPanel = accordionButton.nextElementSibling;
        accordionPanel.classList.add(`accordion__panel--active`);
      });
    });
  }
})();
