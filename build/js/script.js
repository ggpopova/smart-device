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

`use strict`;

// Хранение данных в localStorage
const phoneInput = document.querySelector(`#phone`);
const phoneInputModal = document.querySelector(`#phone-modal`);

const contactsForm = document.querySelector(`#contacts .form`);
const contactsFormModal = document.querySelector(`.modal .form`);

if (contactsForm) {
  contactsForm.addEventListener(`submit`, function (event) {
    event.preventDefault();

    localStorage.setItem(`name-field`, nameInput.value);
    localStorage.setItem(`phone-field`, phoneInput.value);
    localStorage.setItem(`message-field`, messageInput.value);
  });
}

if (contactsFormModal) {
  contactsFormModal.addEventListener(`submit`, function (event) {
    event.preventDefault();

    localStorage.setItem(`name-modal`, nameInputModal.value);
    localStorage.setItem(`phone-modal`, phoneInputModal.value);
    localStorage.setItem(`message-modal`, messageInputModal.value);
  });
}

'use strict';

  // Управление отображением модального окна

(() => {
  const ESCAPE_KEYCODE = 27;

  const modalOpenButton = document.querySelector(`.menu-main__item--btn a`);
  const modal = document.querySelector(`.modal`);
  const modalCloseButton = document.querySelector(`.modal__close-btn`);
  const body = document.querySelector(`body`);

  const openModal = () => {
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
