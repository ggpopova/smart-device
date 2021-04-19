'use strict';

const ESCAPE_KEYCODE = 27;

const body = document.querySelector(`body`);

// Управление отображением мобильного меню

// const noJsElement = document.querySelector(`.no-js`);
// if (noJsElement) {
//   noJsElement.classList.remove(`no-js`);
// }

// const menuNav = document.querySelector(`.menu-main`);
// const menuNavToggle = document.querySelector(`.menu-main__toggle`);

// if (menuNav && menuNavToggle) {
//   menuNav.classList.remove(`menu-main-nojs`);

//   menuNav.classList.add(`menu-main--closed`);

//   menuNavToggle.addEventListener(`click`, () => {
//       if (menuNav.classList.contains(`menu-main--closed`)) {
//         menuNav.classList.remove(`menu-main--closed`);
//         menuNav.classList.add(`menu-main--opened`);
//         body.style.overflow = `hidden`;
//       } else {
//         menuNav.classList.add(`menu-main--closed`);
//         menuNav.classList.remove(`menu-main--opened`);
//         body.style.overflow = `none`;
//       }
//     }
//   );
// }

// Управление отображением модального окна

const modalOpenButton = document.querySelector(`.menu-main__item--btn a`);
const modal = document.querySelector(`.modal`);
const modalCloseButton = document.querySelector(`.modal__close-btn`);

const openModal = () => {
  modal.classList.remove(`modal--closed`);
  modal.classList.add(`modal--opened`);

  document.addEventListener(`keydown`, escapeClickHandler);
  modalOpenButton.removeEventListener(`click`, openModal);
  modalCloseButton.addEventListener(`click`, closeModal);
};

const closeModal = () => {
  modal.classList.add(`modal--closed`);
  modal.classList.remove(`modal--opened`);

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

modalOpenButton.addEventListener(`click`, openModal);



// Плавная прокрутка

const smoothLinks = document.querySelectorAll(`a[href^="#"]`);
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener(`click`, function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute(`href`);

        document.querySelector(id).scrollIntoView({
            behavior: `smooth`,
            block: `start`
        });
    });
};
