'use strict';

/////////// open/close menu btn
const modal = document.querySelector('.header ');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');

const headerListItems = document.querySelectorAll('.header-list-items');

const openModal = function () {
  modal.classList.add('nav-open');
  document.body.classList.add('no-scroll');
};
const closeModal = function () {
  modal.classList.remove('nav-open');
  document.body.classList.remove('no-scroll');
};

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
document.querySelector('.header-nav').addEventListener('click', closeModal);

//////////// sticky header

const sectionHeroEl = document.querySelector('.hero-section');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky');
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove('sticky');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
obs.observe(sectionHeroEl);
