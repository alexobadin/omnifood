'use strict';

const modal = document.querySelector('.header ');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');

const headerListItems = document.querySelectorAll('.header-list-items');

const openModal = function () {
  modal.classList.add('nav-open');
};
const closeModal = function () {
  modal.classList.remove('nav-open');
};

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
document.querySelector('.header-nav').addEventListener('click', closeModal);
