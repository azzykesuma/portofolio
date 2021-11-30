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
webDev.addEventListener('mouseenter', mouse_enter);
webDev.addEventListener('mouseleave', mouse_leave);

function mouse_enter() {
  // webDev.style.opacity = '.6';
  workDescription.classList.add('work_active')
}
function mouse_leave() {
  // webDev.style.opacity = '1';
  workDescription.classList.remove('work_active')
}
