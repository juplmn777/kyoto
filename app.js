const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.nav-list');

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
});

/* ====== closing navbar mobile view ======*/

const allLinks = document.querySelectorAll('.nav-item');

allLinks.forEach((item) => {
  item.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
});
