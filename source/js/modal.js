'use strict';

// модальное окно Заказать звонок
(function () {
  var modal = document.querySelector('.modal');
  var body = document.querySelector('body');

  var name = document.querySelector('[name=call-name]');
  var phone = document.querySelector('[name=call-phone]');
  var comment = document.querySelector('[name=call-comment]');
  var form = document.querySelector('.form--modal');

  var isStorage = true;
  var nameStorage = '';
  var phoneStorage = '';
  var commentStorage = '';

  try {
    nameStorage = localStorage.getItem('nameStorage');
    phoneStorage = localStorage.getItem('phoneStorage');
    commentStorage = localStorage.getItem('commentStorage');
  } catch (err) {
    isStorage = false;
  }

  var setVisible = function (visible) {
    if (visible) {
      document.addEventListener('keydown', escapeClickHandler);
    } else {
      modal.classList.remove('modal-overlay--show');
      document.removeEventListener('keydown', escapeClickHandler);
    }
  };

  var escapeClickHandler = function (evt) {
    if (evt.key === window.utils.KeyCode.ESCAPE) {
      evt.preventDefault();
      setVisible(false);
    }
  };

  if (modal) {
    modal.addEventListener('click', function (evt) {
      if (evt.target === modal && evt.target !== form) {
        setVisible(false);
      }
    });
  }

  if (modalOpen) {
    modalOpen.addEventListener('click', function (evt) {
      evt.preventDefault();
      if (modal) {
        modal.classList.add('modal-overlay--show');
        setVisible(true);
        name.focus();
      }

      if (nameStorage && phoneStorage) {
        name.value = nameStorage;
        phone.value = phoneStorage;
        comment.value = commentStorage;
      }
    });
  }

  if (modalClose) {
    modalClose.addEventListener('click', function (evt) {
      evt.preventDefault();
      modal.classList.remove('modal-overlay--show');
      setVisible(false);
    });
  }

  if (form) {
    form.addEventListener('submit', function (evt) {
      if (!name.value || !phone.value) {
        evt.preventDefault();
      } else {
        if (isStorage) {
          localStorage.setItem('nameStorage', name.value);
          localStorage.setItem('phoneStorage', phone.value);
          localStorage.setItem('commentStorage', comment.value);
        }
      }
    });
  }

})();
