'use strict';

// Управление отображением модального окна

(() => {
  const ESCAPE_KEYCODE = 27;

  const body = document.querySelector(`.modalfull-body`);
  const modalOpenButton = body.querySelector(`.menu-main__item--btn a`);
  const modal = body.querySelector(`.modal`);
  const modalWrapper = modal.querySelector(`.modal__wrapper`);
  const modalNameInput = modalWrapper.querySelector(`#name-modal`);
  const modalCloseButton = modalWrapper.querySelector(`.modal__close-btn`);

  const openModal = (evt) => {
    evt.preventDefault();
    modal.classList.toggle(`modal--opened`);
    body.classList.toggle(`modalfull-body--opened-modal`);
    modalNameInput.focus();

    document.addEventListener(`keydown`, escapeClickHandler);
    modalOpenButton.removeEventListener(`click`, openModal);
    modal.addEventListener(`click`, modalClickHandler);
    modalCloseButton.addEventListener(`click`, closeModal);
  };

  const closeModal = () => {
    modal.classList.toggle(`modal--opened`);
    body.classList.toggle(`modalfull-body--opened-modal`);

    document.removeEventListener(`keydown`, escapeClickHandler);
    modalCloseButton.removeEventListener(`click`, closeModal);
    modal.removeEventListener(`click`, modalClickHandler);
    modalOpenButton.addEventListener(`click`, openModal);
  };

  const escapeClickHandler = (evt) => {
    if (evt.keyCode === ESCAPE_KEYCODE) {
      evt.preventDefault();
      closeModal();
    }
  };

  const modalClickHandler = (evt) => {
    if (evt.target === modal) {
      closeModal();
    }
  };

  if (modalOpenButton) {
    modalOpenButton.addEventListener(`click`, openModal);
  }

})();
