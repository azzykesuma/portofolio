// toggling mode
const toggleMode = document.querySelector('.switch');
const switchMode = toggleMode.getElementsByTagName('input');
const mode = document.querySelectorAll('.mode');
// checking the toggle is checked
for (let i = 0; i < switchMode.length; i++) {
  switchMode[i].addEventListener('click', checkToggle);
}
function checkToggle() {
  for(let i = 0; i < mode.length; i++) {
    if (switchMode[i].checked) {
      mode[i].innerHTML = 'Dark Mode';
    } else {
      mode[i].innerHTML = 'Light Mode';
    }
  }
}


// hamburger animation
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', clickHamburger);
const sidenavContainer = document.querySelector('.sidenavContainer');

function clickHamburger() {
  const activeElements = document.querySelectorAll('.active-elements');

  for(let i = 0; i < activeElements.length; i++) {
    activeElements[i].classList.toggle('active');
  }
  if(activeElements[1].classList.contains('active')) {
    sidenavContainer.classList.add('active_nav');
    sidenavContainer.style.width = '300px';
  } else {
    sidenavContainer.classList.remove('active_nav');
    sidenavContainer.style.width = '0px'
  }
}

const cross = document.querySelector('.cross');
cross.addEventListener('click', close);

function close() {
  const activeElements = document.querySelectorAll('.active-elements');
  for(let i = 0; i < activeElements.length; i++) {
    activeElements[i].classList.toggle('active');
  }
  sidenavContainer.classList.remove('active_nav');
  sidenavContainer.style.width = '0px'
}

const projectNav = document.getElementById('projectNav');
const projectContainer = document.querySelector('.projectContainer');

function closeProject() {
  projectContainer.classList.remove('active_nav');
  projectContainer.style.width = '0px';
}

// project nav sidebar
projectNav.addEventListener('click', function(e) {
  projectContainer.classList.add('active_nav')
  projectContainer.style.width = '300px';
});