const checkbox = document.querySelector('.checkbox-element');

const ul = document.querySelector('ul');
const buttons = document.querySelector('ul li a');

checkbox.addEventListener('click', function () {
  ul.classList.toggle('slide');
});
