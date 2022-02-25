// hover animation for project cards
const projectCard = document.querySelectorAll('.projectCard');

const hoverIn = (e) => {
   const target = e.target
    for (let i;i < projectCard.length;i++) {
        if(target === projectCard[i]) {
           const tech = projectCard[i].querySelectorAll('.techStack');
           console.log(tech);
        }
    }
}

projectCard.forEach(arr => {
    arr.addEventListener('mouseover',hoverIn)
    // tech.addEventListener('onmouseout',hoverOut)
});

// toggling portofolio page
const togglePort = document.getElementById('togglePort');
const toggle = () => {
    const mode = document.querySelector('.mode');
    const headerOne = document.querySelector('h1');
    const one = document.querySelector('.one');
    const two = document.querySelector('.two');
    const three = document.querySelector('.three');
    const mobileNav = document.querySelector('.mobileNav');
    const sideNavContainer = document.querySelector('.sidenavContainer');
    const topSection = document.querySelector('.topSection');
    const filterPart = document.querySelector('.filterPart');
    const projectWrap = document.querySelector('.projectWrap');
    const footer = document.querySelector('footer');
    const links= document.querySelectorAll('a');
    const icon = document.querySelectorAll('.icons')
    const text = document.querySelectorAll('.interactive__text')
    
    if (togglePort.checked) {
        mode.style.color = '#fff';
        headerOne.style.color = '#ECB365'
        mobileNav.style.backgroundColor = '#191A19'
        topSection.style.backgroundColor = '#191A19'
        filterPart.style.backgroundColor = '#191A19'
        projectWrap.style.backgroundColor = '#191A19'
        footer.style.backgroundColor = '#191A19'
        one.style.backgroundColor = 'white';
        two.style.backgroundColor = 'white';
        three.style.backgroundColor = 'white';


        for (let i = 0;i < links.length; i++) {
            links[i].style.color = '#bb86fc'
        }
        
        for (let i = 0;i < text.length; i++) {
            text[i].style.color = 'white'
        }

        for (let i = 0;i < icon.length; i++) {
            icon[i].style.color = 'white'
        }
    } else {
        mode.style.color = 'black';
        headerOne.style.color = '#484B6A'
        footer.style.backgroundColor = '#E4E5F1';
        mobileNav.style.backgroundColor = '#E4E5F1';
        sideNavContainer.style.backgroundColor = '#E4E5F1';
        topSection.style.backgroundColor = '#FAFAFA'
        filterPart.style.backgroundColor = '#E4E5F1'
        projectWrap.style.backgroundColor = '#FAFAFA'
        one.style.backgroundColor = 'black';
        two.style.backgroundColor = 'black';
        three.style.backgroundColor = 'black';

        for (let i = 0;i < links.length; i++) {
            links[i].style.color = '#bb86fc'
        }
        
        for (let i = 0;i < text.length; i++) {
            text[i].style.color = '#102542'
        }

        for (let i = 0;i < icon.length; i++) {
            icon[i].style.color = '#18314F'
        }
    }
}

togglePort.addEventListener('change',toggle);


// filter function
const buttonWrap = document.querySelector('.buttonWrap');
const filterPart = document.querySelector('.filterPart');
const filterResult = document.getElementById('filterResult');

buttonWrap.addEventListener('click',filter);
function filter(e) {
    const target = e.target;
    const addNode = document.createElement('li');
    filterResult.appendChild(addNode);

    addNode.innerHTML = `<button>${target.id}<span><ion-icon name="close-circle-outline"></ion-icon></span></button>`;
}