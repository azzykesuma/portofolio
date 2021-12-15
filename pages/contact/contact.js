const socialFlag = document.querySelector('.socialFlag');
const flag = socialFlag.querySelectorAll('div');
console.log(flag);

for (let i = 0; i < flag.length; i++) {
    flag[i].addEventListener('mouseover', hoverFlag);
}

function hoverFlag(e) {
    const target = e.target;
    target.classList.toggle('flag_active');
}

// dark mode
const togglePort = document.getElementById('togglePort');


const toggleDarkMode = () => {
    const mobileNav = document.querySelector('.mobileNav');
    const sidenavContainer = document.querySelector('.sidenavContainer');
    const projectContainer = document.querySelector('.projectContainer');
    const top_part = document.querySelector('.top_part');
    const bottom_part = document.querySelector('.bottom_part');
    const footer = document.querySelector('footer');
    const headerOne = document.querySelector('h1');
    const label = document.querySelectorAll('label');
    const links = document.querySelectorAll('a');
    const one = document.querySelector('.one');
    const two = document.querySelector('.two');
    const three = document.querySelector('.three');
    const paragraph = document.querySelector('p');
    const headerFour = document.querySelector('h4');

    if (togglePort.checked) {
      mobileNav.style.backgroundColor = '#191A19';
      sidenavContainer.style.backgroundColor = '#041C32';
      projectContainer.style.backgroundColor = '#04293A';
      top_part.style.backgroundColor = '#191A19';
      bottom_part.style.backgroundColor = '#191A19';
      footer.style.backgroundColor = '#191A19';
      headerOne.style.color = '#ECB365';
      one.style.backgroundColor = '#fff';
      two.style.backgroundColor = '#fff';
      three.style.backgroundColor = '#fff';
      paragraph.style.color = '#fff';
      headerFour.style.color = '#D8E9A8';

      links.forEach(link => {
        link.style.color = '#bb86fc';
      });

      label.forEach(label => {
        label.style.color = '#fff';
      })
    } else {
      mobileNav.style.backgroundColor = '#E4E5F1';
      sidenavContainer.style.backgroundColor = '#E4E5F1';
      projectContainer.style.backgroundColor = '#FAFAFA';
      top_part.style.backgroundColor = '#6BAB90';
      bottom_part.style.backgroundColor = '#6BAB90';
      footer.style.backgroundColor = '#E4E5F1';
      headerOne.style.color = '#484B6A';
      one.style.backgroundColor = 'black';
      two.style.backgroundColor = 'black';
      three.style.backgroundColor = 'black';
      paragraph.style.color = '#102542';
      headerFour.style.color = '#102542';

      links.forEach(link => {
        link.style.color = '#bb86fc';
      });

      label.forEach(label => {
        label.style.color = 'black';
      })
    }

}
togglePort.addEventListener('change',toggleDarkMode);

// form validation
const name_val = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const error = document.querySelectorAll('.error');
const errorEmailFormat = document.querySelector('.errorEmailFormat');
const submit = document.getElementById('submit');

const submitForm = () => {
  const nameVal = name_val.value.trim();
  const emailVal = email.value.trim();
  const messageVal = message.value.trim();

  if(nameVal === '') {
    error[0].classList.add('errorActive');
  } else {
    error[0].classList.remove('errorActive');
  }

  if (emailVal === '') {
    error[1].classList.add('errorActive');
  } else {
    error[1].classList.remove('errorActive');
  }

  // checking the correct email format
  if (emailVal !== '') {
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailFormat.test(emailVal)) {
      errorEmailFormat.classList.remove('errorEmail_active');
    } else {
      errorEmailFormat.classList.add('errorEmail_active');
    }
  }

  if (messageVal === '') {
    error[2].classList.add('errorActive');
  } else {
    error[2].classList.remove('errorActive');
  }

  alert('Thank you for your message!, we will get back to you soon');
}

submit.addEventListener('click',(e) => {
  e.preventDefault();
  submitForm();
});
