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
