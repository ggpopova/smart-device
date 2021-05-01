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
