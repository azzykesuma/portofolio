var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
}
// hover state in work section
const webDev = document.getElementById('web-development');
const workDescription = document.querySelector('.workDescription');
console.log(workDescription);
// make hover function
webDev.addEventListener('mouseover', mouse_enter);
webDev.addEventListener('mouseout', mouse_leave);

function mouse_enter() {
  // webDev.style.opacity = '.6';
  workDescription.classList.add('work_active')
}
function mouse_leave() {
  // webDev.style.opacity = '1';
  workDescription.classList.remove('work_active')
}

// form validation
const form = document.querySelector('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const error = document.querySelectorAll('.error');
const errorEmail = document.querySelector('.errorEmail');
const button = form.querySelector('button');
console.log(error);

button.addEventListener('click', (e) => {
  e.preventDefault();
  checkInput();
})

// make a function to check input
function checkInput() {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  if(nameValue === '') {
    error[0].classList.add('error_active');
  } else {
    error[0].classList.remove('error_active');
  }


  if(emailValue === '') {
    error[1].classList.add('error_active');
  } else {
    error[1].classList.remove('error_active');
  }

  // checking the correct email format\
  if(emailValue !== '') {
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!emailFormat.test(emailValue)) {
      errorEmail.classList.add('errorEmail_active');
    } else {
      errorEmail.classList.remove('errorEmail_active');
    }
  }

  if(messageValue === '') {
    error[2].classList.add('error_active');
  } else {
    error[2].classList.remove('error_active');
  }

}