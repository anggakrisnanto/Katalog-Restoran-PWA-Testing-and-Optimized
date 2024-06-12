const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerElement = document.querySelector('.nav-menu');
const mainElement = document.body;

hamburgerButtonElement.addEventListener('click', (event) => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
});

mainElement.addEventListener('click', (event) => {
  drawerElement.classList.remove('open');
  event.stopPropagation();
});
