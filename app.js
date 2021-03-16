const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.nav-list');

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
});
