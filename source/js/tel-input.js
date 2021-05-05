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
