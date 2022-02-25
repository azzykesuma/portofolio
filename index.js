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

// showcase function
const portoImg = document.querySelectorAll('.porto');
const portodesc = document.querySelectorAll('.portoDesc');

portoImg.forEach(item => {
  item.addEventListener('click', (e) => {
    const target = e.target;
    // add active class to the clicked portodesc
     if(target === portoImg[0]) {
      portodesc[0].classList.add('active');
      portoImg[0].style.filter = 'brightness(0.2)';
      portodesc[0].addEventListener('click', e => {
        if(portodesc[0].classList.contains('active')) {
          portodesc[0].classList.remove('active');
          portoImg[0].style.filter = 'brightness(1)';
        }
      });
    } 
    else if(target === portoImg[1]) {
      portodesc[1].classList.add('active');
      portoImg[1].style.filter = 'brightness(0.2)';
      portodesc[1].addEventListener('click', e => {
        if(portodesc[1].classList.contains('active')) {
          portodesc[1].classList.remove('active');
          portoImg[1].style.filter = 'brightness(1)';
        }
      });
    } 
    else if(target === portoImg[2]) {
      portodesc[2].classList.add('active');
      portoImg[2].style.filter = 'brightness(0.2)';
      portodesc[2].addEventListener('click', e => {
        if(portodesc[2].classList.contains('active')) {
          portodesc[2].classList.remove('active');
          portoImg[2].style.filter = 'brightness(1)';
        }
      });
    } else if (target === portoImg[3]) {
      portodesc[3].classList.add('active');
      portoImg[3].style.filter = 'brightness(0.2)';
      portodesc[3].addEventListener('click', e => {
        if(portodesc[3].classList.contains('active')) {
          portodesc[3].classList.remove('active');
          portoImg[3].style.filter = 'brightness(1)';
        }
      });
    } else if (target === portoImg[4]) {
      portodesc[4].classList.add('active');
      portoImg[4].style.filter = 'brightness(0.2)';
      portodesc[4].addEventListener('click', e => {
        if(portodesc[4].classList.contains('active')) {
          portodesc[4].classList.remove('active');
          portoImg[4].style.filter = 'brightness(1)';
        }
      });
    } else if (target === portoImg[5]) {
      portodesc[5].classList.add('active');
      portoImg[5].style.filter = 'brightness(0.2)';
      portodesc[5].addEventListener('click', e => {
        if(portodesc[5].classList.contains('active')) {
          portodesc[5].classList.remove('active');
          portoImg[5].style.filter = 'brightness(1)';
        }
      });
    }
  }
)});
