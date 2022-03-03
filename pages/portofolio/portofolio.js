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
    const projectWrap = document.querySelector('.projectWrap');
    const footer = document.querySelector('footer');
    const icon = document.querySelectorAll('.icons')
    const text = document.querySelectorAll('.interactive__text')
    const links = document.querySelectorAll('a')
    const navLinks = document.querySelectorAll('.navLinks');
    const viewWork = document.querySelectorAll('.viewWork');

    
    if (togglePort.checked) {
        mode.style.color = '#fff';
        headerOne.style.color = '#ECB365'
        mobileNav.style.backgroundColor = '#191A19'
        topSection.style.backgroundColor = '#191A19'
        projectWrap.style.backgroundColor = '#191A19'
        footer.style.backgroundColor = '#191A19'
        one.style.backgroundColor = '#fff';
        two.style.backgroundColor = '#fff';
        three.style.backgroundColor = '#fff';
        sideNavContainer.style.backgroundColor = '#041C32';

        
        for (let i = 0;i < text.length; i++) {
            text[i].style.color = 'white'
        }

        for (let i = 0;i < icon.length; i++) {
            icon[i].style.color = 'white'
        }
        
        for (let i = 0;i < links.length; i++) {
            links[i].style.color = '#fff'
        }

        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = '#fff'
        }

        for(let i = 0; i < viewWork.length; i++) {
            viewWork[i].style.color = '#fff'
        }
    } else {
        mode.style.color = 'black';
        headerOne.style.color = '#484B6A'
        footer.style.backgroundColor = '#E4E5F1';
        mobileNav.style.backgroundColor = '#fff';
        sideNavContainer.style.backgroundColor = '#E4E5F1';
        topSection.style.backgroundColor = '#FAFAFA'
        projectWrap.style.backgroundColor = '#FAFAFA'
        one.style.backgroundColor = '#000';
        two.style.backgroundColor = '#000';
        three.style.backgroundColor = '#000';
        sideNavContainer.style.backgroundColor = '#E4E5F1';
        
        for (let i = 0;i < text.length; i++) {
            text[i].style.color = '#102542'
        }

        for (let i = 0;i < icon.length; i++) {
            icon[i].style.color = '#18314F'
        }

        for (let i = 0;i < links.length; i++) {
            links[i].style.color = '#2F4858'
        }

        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = '#200116'
        }

        for(let i = 0; i < viewWork.length; i++) {
            viewWork[i].style.color = '#fff'
        }
    }
}

togglePort.addEventListener('change',toggle);


