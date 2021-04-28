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

// Управление вводом номера телефона

(() => {
  const telInputFront = document.querySelector(`.form-box input[type=tel]`);

  telInputFront.addEventListener(`focus`, () => {
    telInputFront.value = `+7(`;
  });

  telInputFront.addEventListener(`input`, () => {
    if (telInputFront.value.length === 6) {
      telInputFront.value += `)`;
    }
  });

  const telInputModal = document.querySelector(`.modal input[type=tel]`);

  telInputModal.addEventListener(`focus`, () => {
    telInputModal.value = `+7(`;
  });

  telInputModal.addEventListener(`input`, () => {
    if (telInputModal.value.length === 6) {
      telInputModal.value += `)`;
    }
  });
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
