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

'use strict';

// Управление хранением данных в localStorage

const phoneInput = document.querySelector(`#phone`);
const phoneInputModal = document.querySelector(`#phone-modal`);

const contactsForm = document.querySelector(`#contacts .form`);
const contactsFormModal = document.querySelector(`.modal .form`);

if (contactsForm) {
  contactsForm.addEventListener(`submit`, (evt) => {
    evt.preventDefault();

    localStorage.setItem(`name-field`, nameInput.value);
    localStorage.setItem(`phone-field`, phoneInput.value);
    localStorage.setItem(`message-field`, messageInput.value);
  });
}

if (contactsFormModal) {
  contactsFormModal.addEventListener(`submit`, (evt) => {
    evt.preventDefault();

    localStorage.setItem(`name-modal`, nameInputModal.value);
    localStorage.setItem(`phone-modal`, phoneInputModal.value);
    localStorage.setItem(`message-modal`, messageInputModal.value);
  });
}

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

'use strict';

// Управление плавной прокруткой

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

// Управление вводом номера телефона

(() => {
  const InputButtonType = {
    BACKSPACE: `deleteContentBackward`,
    DELETE: `deleteContentForward`,
  };

  const telInputFront = document.querySelector(`.form-box input[type=tel]`);

  telInputFront.addEventListener(`focus`, () => {
    if (telInputFront.value.length === 0) {
      telInputFront.value = `+7(`;
    }
    setTimeout(() => {
      telInputFront.setSelectionRange(telInputFront.value.length, telInputFront.value.length)
    }, 0);
  });

  telInputFront.addEventListener(`input`, (evt) => {
    if (telInputFront.value.length === 6 && evt.inputType !== InputButtonType.BACKSPACE) {
      telInputFront.value += `)`;
    }

    if (telInputFront.value.length === 6 && telInputFront.selectionStart === 6 && telInputFront.selectionEnd === 6 && evt.inputType === InputButtonType.BACKSPACE) {
      telInputFront.value = telInputFront.value.slice(0, -1);
    }

    if (telInputFront.value.length === 6 && telInputFront.selectionStart === 5 && telInputFront.selectionEnd === 5 && evt.inputType === InputButtonType.DELETE) {
      telInputFront.value = telInputFront.value.slice(0, -1);
    }

    if (telInputFront.value.length === 2) {
      telInputFront.value = `+7(`;
    }
  });

  const telInputModal = document.querySelector(`.modal input[type=tel]`);

  telInputModal.addEventListener(`focus`, () => {
    if (telInputModal.value.length === 0) {
      telInputModal.value = `+7(`;
    }
    setTimeout(() => {
      telInputModal.setSelectionRange(telInputModal.value.length, telInputModal.value.length)
    }, 0);
  });

  telInputModal.addEventListener(`input`, (evt) => {
    if (telInputModal.value.length === 6 && evt.inputType !== InputButtonType.BACKSPACE) {
      telInputModal.value += `)`;
    }

    if (telInputModal.value.length === 6 && telInputModal.selectionStart === 6 && telInputModal.selectionEnd === 6 && evt.inputType === InputButtonType.BACKSPACE) {
      telInputModal.value = telInputModal.value.slice(0, -1);
    }

    if (telInputModal.value.length === 6 && telInputModal.selectionStart === 5 && telInputModal.selectionEnd === 5 && evt.inputType === InputButtonType.DELETE) {
      telInputModal.value = telInputModal.value.slice(0, -1);
    }

    if (telInputModal.value.length === 2) {
      telInputModal.value = `+7(`;
    }
  });
})();
