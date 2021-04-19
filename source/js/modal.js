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
