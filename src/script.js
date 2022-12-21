const checkbox = document.querySelector('.checkbox');
const ul = document.querySelector('ul');
const buttons = document.querySelector('ul li a');

checkbox.addEventListener('click', function () {
  ul.classList.toggle('slide');
});

buttons.forEach((button) => {
  menuToggle.addEventListener('click', () => {
    checkbox.checked = false;
  });
});
