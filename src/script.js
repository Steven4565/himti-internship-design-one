
const menuToggle = document.querySelector('.menu-toggle input');
const ul = document.querySelector('ul li');

menuToggle.addEventListener('click', function () {
  ul.classList.toggle('slide');
});