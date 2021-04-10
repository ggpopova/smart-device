'use strict'

const body = document.querySelector(`body`);

const noJsElement = document.querySelector(`.no-js`);
noJsElement.classList.remove(`no-js`);

const menuNav = document.querySelector(`.menu-nav`);
const menuNavToggle = document.querySelector(`.menu-nav__toggle`);

if (menuNav && menuNavToggle) {
  menuNav.classList.remove(`menu-nav-nojs`);

  menuNav.classList.add(`menu-nav--closed`);

  menuNavToggle.addEventListener(`click`, () => {
      if (menuNav.classList.contains(`menu-nav--closed`)) {
        menuNav.classList.remove(`menu-nav--closed`);
        menuNav.classList.add(`menu-nav--opened`);
        body.style.overflow = `hidden`;
      } else {
        menuNav.classList.add(`menu-nav--closed`);
        menuNav.classList.remove(`menu-nav--opened`);
        body.style.overflow = `none`;
      }
    }
  );
}
