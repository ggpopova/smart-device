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
        button.classList.toggle(`accordion--active`);

        const panel = button.nextElementSibling;
        panel.classList.toggle(`accordion__panel--active`);
      });
    }
  }

})();

'use strict';

(() => {
  const ESCAPE_KEYCODE = 27;

  const body = document.querySelector(`body`);


  // Управление отображением модального окна

  const modalOpenButton = document.querySelector(`.menu-main__item--btn a`);
  const modal = document.querySelector(`.modal`);
  const modalCloseButton = document.querySelector(`.modal__close-btn`);

  const openModal = () => {
  modal.classList.toggle(`modal--opened`);

  document.addEventListener(`keydown`, escapeClickHandler);
  modalOpenButton.removeEventListener(`click`, openModal);
  modalCloseButton.addEventListener(`click`, closeModal);
  };

  const closeModal = () => {
  modal.classList.toggle(`modal--opened`);

  document.removeEventListener(`keydown`, escapeClickHandler);
  modalCloseButton.removeEventListener(`click`, closeModal);
  modalOpenButton.addEventListener(`click`, openModal);
  };

  const escapeClickHandler = (evt) => {
  if (evt.keyCode === ESCAPE_KEYCODE) {
    evt.preventDefault();
    closeModal();
  }
  };

  if (modalOpenButton) {
  modalOpenButton.addEventListener(`click`, openModal);
  }
})();

'use strict';

// Плавная прокрутка

(() => {
  const smoothLink = document.querySelector(`.header-title__scroll-down`);
  smoothLink.addEventListener(`click`, function (evt) {
    evt.preventDefault();
    const id = smoothLink.getAttribute(`href`);

    document.querySelector(id).scrollIntoView({
      behavior: `smooth`,
      block: `start`
    });
  });
})();
