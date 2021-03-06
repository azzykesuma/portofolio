
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
    const interactive__text = document.querySelector('.interactive__text');
    const icons = document.querySelectorAll('.icons')
    const navLinks = document.querySelectorAll('.navLinks');
    const mode = document.getElementById('mode');

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
      interactive__text.style.color = '#fff';
      mode.innerHTML = 'Dark Mode';
      

      links.forEach(link => {
        link.style.color = '#bb86fc';
      });

      label.forEach(label => {
        label.style.color = '#fff';
      })

      icons.forEach(icon => {
        icon.style.color = '#fff'
      })

      navLinks.forEach(link => {
        link.style.color = '#fff';
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
      interactive__text.style.color = '#102542';
      mode.innerHTML = 'Light Mode';

      links.forEach(link => {
        link.style.color = '#2F4858';
      });

      label.forEach(label => {
        label.style.color = 'black';
      });

      icons.forEach(icon => {
        icon.style.color = '#18314F'
      })

      navLinks.forEach(link => {
        link.style.color = '#200116';
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

}

submit.addEventListener('click',(e) => {
  submitForm();
});
