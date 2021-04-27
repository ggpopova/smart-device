'use strict';

  // Управление отображением модального окна

(() => {
  const ESCAPE_KEYCODE = 27;

  const modalOpenButton = document.querySelector(`.menu-main__item--btn a`);
  const modal = document.querySelector(`.modal`);
  const modalCloseButton = document.querySelector(`.modal__close-btn`);
  const body = document.querySelector(`body`);

  const openModal = (evt) => {
    evt.preventDefault();
    modal.classList.toggle(`modal--opened`);
    body.style.overflow = `hidden`;
    body.style.height = `100vh`;

    document.addEventListener(`keydown`, escapeClickHandler);
    modalOpenButton.removeEventListener(`click`, openModal);
    modalCloseButton.addEventListener(`click`, closeModal);
  };

  const closeModal = () => {
    modal.classList.toggle(`modal--opened`);
    body.style.overflow = `auto`;
    body.style.height = `auto`;

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
