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
    const headerfour = document.querySelector('h4');
    const paragraph = document.querySelectorAll('p');
    
    if (togglePort.checked) {
        headerOne.style.color = '#ECB365'
        mobileNav.style.backgroundColor = '#191A19'
        topSection.style.backgroundColor = '#191A19'
        filterPart.style.backgroundColor = '#191A19'
        projectWrap.style.backgroundColor = '#191A19'
        footer.style.backgroundColor = '#191A19'
        one.style.backgroundColor = 'white';
        two.style.backgroundColor = 'white';
        three.style.backgroundColor = 'white';
        headerfour.style.color = '#D8E9A8'

        for (let i = 0;i < paragraph.length; i++) {
            paragraph[i].style.color = 'white'
        }

        for (let i = 0;i < links.length; i++) {
            links[i].style.color = '#bb86fc'
        } 
    } else {
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

        for (let i = 0;i < paragraph.length; i++) {
            paragraph[i].style.color = '#102542'
        }

        for (let i = 0;i < links.length; i++) {
            links[i].style.color = '#bb86fc'
        } 
    }
}

togglePort.addEventListener('change',toggle);


