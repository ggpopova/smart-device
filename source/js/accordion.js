'use strict';

// аккордион на mobile в футере
(function () {
  const accordion = document.querySelectorAll(`.accordion__button`);
  const panels = document.querySelectorAll(`.accordion__panel`);

  document.querySelector(`.accordion__panel--no-js`).classList.remove(`accordion__panel--no-js`);

  if (accordion) {
    for (let i = 0; i < accordion.length; i++) {
      accordion[i].addEventListener(`click`, function (evt) {

        for (let j = 0; j < panels.length; j++) {
          panels[j].classList.remove(`accordion__panel--active`);
        }

        const button = evt.target;
        button.classList.toggle(`accordion__button--active`);

        const panel = button.nextElementSibling;
        panel.classList.toggle(`accordion__panel--active`);
      });
    }
  }

})();
