let i = 0;
let i_Index = 0;
let interval_val;
let name = document.getElementById('name');
let blink = document.getElementById('blink')
let text = [
  'I am Azzy',
  'I am a web developer',
]

function typewriter() {
  let textPart = text[i].substring(0, i_Index + 1);
  name.innerHTML = textPart;
  i_Index++;
  
  if(textPart === text[i]) {
    // blink.style.display = 'none'
    clearInterval(interval_val);
    setTimeout(function() {
      interval_val = setInterval(Delete, 50);
    },1000)
  } 
}

function Delete() {
  let textPart = text[i].substring(0, i_Index - 1);
  name.innerHTML = textPart;
  i_Index--;

  if(textPart === '') {
    clearInterval(interval_val);
    if(i === text.length - 1) {
      i = 0;
    } else {
      i++;
      i_Index = 0;
    }

    setTimeout(function() {
      blink.style.display = 'inline-block';
      interval_val = setInterval(typewriter, 50);
    },1000)
  }
}

interval_val = setInterval(typewriter, 100);


// slideshow
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
const workDescription = document.querySelectorAll('.workDescription');
const upgrade = document.getElementById('upgrade');
console.log(workDescription);
webDev.addEventListener('mouseover', mouse_enter);
webDev.addEventListener('mouseout', mouse_leave);
upgrade.addEventListener('mouseover',mouse_enter);
upgrade.addEventListener('mouseout',mouse_leave);

function mouse_enter(e) {
  const target = e.target;
    if( target.id === 'web-development') {
      workDescription[0].classList.add('work_active')
    }
    else {
      workDescription[1].classList.add('work_active')
    }
}
function mouse_leave(e) {
  const target = e.target;
  if( target.id === 'web-development') {
    workDescription[0].classList.remove('work_active')
  }
  else {
    workDescription[1].classList.remove('work_active')
  }
}

// hover state in tablet and desktop
const webDev_tablet = document.getElementById('web-development-tablet');
const upgrade_tablet = document.getElementById('upgrade-tablet');

webDev_tablet.addEventListener('mouseover', mouse_enter_tablet);
webDev_tablet.addEventListener('mouseout', mouse_leave_tablet);
upgrade_tablet.addEventListener('mouseover',mouse_enter_tablet);
upgrade_tablet.addEventListener('mouseout',mouse_leave_tablet);

function mouse_enter_tablet(e) {
  const target = e.target;
    if( target.id === webDev_tablet.id) {
      workDescription[2].classList.add('work_active')
    }
    else {
      workDescription[3].classList.add('work_active')
    }
}
function mouse_leave_tablet(e) {
  const target = e.target;
  if( target.id === webDev_tablet.id) {
    workDescription[2].classList.remove('work_active')
  }
  else {
    workDescription[3].classList.remove('work_active')
  }
}

// form validation
const form = document.querySelector('form');
const name_val = document.getElementById('nameVal');
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
  const nameValue = name_val.value.trim();
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

const toggleSwitch  = document.getElementById('toggleSwitch');

const toggle = () => {
  const intro = document.querySelector('.intro');
  const work = document.querySelector('.work');
  const tools = document.querySelector('.tools');
  const recentWork = document.querySelector('.recentWork');
  const contact = document.querySelector('.contact');
  const footer = document.querySelector('footer')
  const mobileNav = document.querySelector('.mobileNav')
  const headerOne = document.querySelector('h1');
  const headerTwo = document.querySelectorAll('h2');
  const headerThree = document.querySelectorAll('h3');
  const headerfour = document.querySelectorAll('h4');
  const paragraph = document.querySelectorAll('p');
  const links= document.querySelectorAll('a');
  const sideNavContainer = document.querySelector('.sidenavContainer')
  const projectContainer = document.querySelector('.projectContainer')
  const one = document.querySelector('.one')
  const two = document.querySelector('.two')
  const three = document.querySelector('.three')
  const form = document.querySelector('form');
  const label = form.querySelectorAll('label');

  
  if(toggleSwitch.checked) {
    headerOne.style.color = '#ECB365'
    intro.style.backgroundColor = '#191A19';
    work.style.backgroundColor = '#191A19';
    tools.style.backgroundColor = '#191A19';
    recentWork.style.backgroundColor = '#191A19';
    contact.style.backgroundColor = '#191A19';
    footer.style.backgroundColor = '#191A19';
    mobileNav.style.backgroundColor = '#191A19';
    sideNavContainer.style.backgroundColor = '#041C32';
    projectContainer.style.backgroundColor = '#04293A';
    one.style.backgroundColor = 'white';
    two.style.backgroundColor = 'white';
    three.style.backgroundColor = 'white';


    for (let i = 0;i < paragraph.length; i++) {
      paragraph[i].style.color = 'white'
    }

    for (let i = 0;i < headerTwo.length; i++) {
      headerTwo[i].style.color = '#D8E9A8'
    } 

    for (let i = 0;i < headerThree.length; i++) {
      headerThree[i].style.color = '#D8E9A8'
    }
     
    for (let i = 0;i < headerfour.length; i++) {
      headerfour[i].style.color = '#D8E9A8'
    } 
    
    for (let i = 0;i < links.length; i++) {
      links[i].style.color = '#bb86fc'
    } 

    for (let i = 0;i < links.length; i++) {
      label[i].style.color = '#bb86fc'
    } 
  } else {
    headerOne.style.color = '#484B6A'
    intro.style.backgroundColor = '#FAFAFA';
    work.style.backgroundColor = '#E4E5F1';
    tools.style.backgroundColor = '#FAFAFA';
    recentWork.style.backgroundColor = '#E4E5F1';
    contact.style.backgroundColor = '#FAFAFA';
    footer.style.backgroundColor = '#E4E5F1';
    mobileNav.style.backgroundColor = '#E4E5F1';
    sideNavContainer.style.backgroundColor = '#E4E5F1';
    projectContainer.style.backgroundColor = '#FAFAFA';
    one.style.backgroundColor = 'black';
    two.style.backgroundColor = 'black';

    for (let i = 0;i < paragraph.length; i++) {
      paragraph[i].style.color = 'black'
    }

    for (let i = 0;i < headerTwo.length; i++) {
      headerTwo[i].style.color = '#102542'
    } 

    for (let i = 0;i < headerThree.length; i++) {
      headerThree[i].style.color = '#484B6A'
    }
     
    for (let i = 0;i < headerfour.length; i++) {
      headerfour[i].style.color = '#102542'
    } 
    
    for (let i = 0;i < links.length; i++) {
      links[i].style.color = '#bb86fc'
    } 
    
    for (let i = 0;i < links.length; i++) {
      label[i].style.color = '#bb86fc'
    } 
  }

}
toggleSwitch.addEventListener('change',toggle);