// const showMenu = (toggleId, navId) => {
//     const toggle = document.getElementById(toggleId);
//     const nav = document.getElementById(navId)

//     toggle.addEventListener('click', ()=>{
//         nav.classList.toggle('show-menu');

//         toggle.classList.toggle('show-icon')

//     })

// }
// showMenu('nav-toggle', 'nav-menu')
const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
  navToggle.classList.toggle('show-icon');
});