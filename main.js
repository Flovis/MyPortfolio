const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');
const succesMessage = document.getElementById('succes');
const dangerMessage = document.getElementById('danger');


navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
  navToggle.classList.toggle('show-icon');
});

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
//     reset: true
});

sr.reveal('.home__data, .home-description, .skills__subtitle, .skills__text, .card',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__box',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

const form = document.querySelector('.form');
const btnSendMessage = document.getElementById('btn-contact');
const btnText = btnSendMessage.innerHTML;
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  btnSendMessage.innerHTML = `<svg viewBox="25 25 50 50">
  <circle r="20" cy="50" cx="50"></circle>
  </svg>`
  send_email();
  
})

const name = document.getElementById('name');
const email = document.getElementById('name');
const message = document.getElementById('name');
// name.addEventListener('change', () => {
//   if (name.value.length < 3) {
//     let spanError = document.createElement('span');
//     spanError.innerHTML = 'Le nom est trop court';
//     name.insertAdjacentElement('afterend', spanError);
//   }
// })
function send_email(){
  const SERVICE_ID = 'service_811k0va';
  const TEMPLATE_ID = 'template_g150p2o'
  const params = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    message: document.getElementById('message').value.trim(),
  }
  emailjs
  .send(SERVICE_ID, TEMPLATE_ID, params)
  .then((res) => {
    // alert('Message evoye');
    btnSendMessage.innerHTML = btnText;

    succesMessage.innerHTML = 'Your email has been received successfully';
    setTimeout(function(){
      succesMessage.innerHTML = '';
    }, 3000)
    
  })
  .catch((err) => {
    console.log(err);
    btnSendMessage.innerHTML = btnText;
    dangerMessage.innerHTML = 'Something went wrong';
    setTimeout(function(){
      dangerMessage.innerHTML = '';
    }, 3000)
  });
}

