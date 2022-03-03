const toggleSwitch  = document.getElementById('toggleSwitch');

const toggle = () => {
    const leftContainer = document.querySelector('.leftContainer');
    const mobileNav = document.querySelector('.mobileNav');
    const aboutProject = document.querySelector('.aboutProject');
    const technicals = document.querySelector('.technicals');
    const gallery = document.querySelector('.gallery');
    const footer = document.querySelector('footer');
    const headerOne = document.querySelector('h1');
    const headerTwo = document.querySelector('h2');
    const headerThree = document.querySelector('h3');
    const interactive__text = document.querySelector('.interactive__text');
    const list = document.querySelectorAll('li');
    const paragraph = document.querySelectorAll('p');
    const one = document.querySelector('.one');
    const two = document.querySelector('.two');
    const three = document.querySelector('.three');
    const links = document.querySelectorAll('a');
    const icons = document.querySelectorAll('.icons')
    const sideNavContainer = document.querySelector('.sidenavContainer')

    if(toggleSwitch.checked) {
        leftContainer.style.backgroundColor = '#191A19';
        mobileNav.style.backgroundColor = '#191A19';
        aboutProject.style.backgroundColor = '#191A19';
        technicals.style.backgroundColor = '#191A19';
        gallery.style.backgroundColor = '#191A19';
        footer.style.backgroundColor = '#191A19';
        headerOne.style.color = '#D8E9A8';
        headerTwo.style.color = '#D8E9A8';
        headerThree.style.color = '#D8E9A8';
        interactive__text.style.color = '#fff';
        one.style.backgroundColor = '#fff';
        two.style.backgroundColor = '#fff';
        three.style.backgroundColor = '#fff';
        sideNavContainer.style.backgroundColor = '#041C32';

        list.forEach( li => {
            li.style.color = '#fff';
        })

        paragraph.forEach( p => {
            p.style.color = '#fff';
        })

        links.forEach( a => {
            a.style.color = '#fff'
        })

        icons.forEach(icon => {
            icon.style.color = '#fff'
        })
    } else {
        leftContainer.style.backgroundColor = '#FAFAFA';
        mobileNav.style.backgroundColor = '#FAFAFA';
        aboutProject.style.backgroundColor = '#FAFAFA';
        technicals.style.backgroundColor = '#E4E5F1';
        gallery.style.backgroundColor = '#FAFAFA';
        footer.style.backgroundColor = '#E4E5F1';
        headerOne.style.color = '#484B6A';
        headerTwo.style.color = '#484B6A';
        headerThree.style.color = '#484B6A';
        interactive__text.style.color = '#fff';
        one.style.backgroundColor = '#000';
        two.style.backgroundColor = '#000';
        three.style.backgroundColor = '#000';
        sideNavContainer.style.backgroundColor = '#E4E5F1';

        list.forEach( li => {
            li.style.color = '#102542';
        })

        paragraph.forEach( p => {
            p.style.color = '#102542';
        })

        links.forEach( a => {
            a.style.color = '#102542'
        })

        icons.forEach(icon => {
            icon.style.color = '#102542'
        })
    }
}

toggleSwitch.addEventListener('change',toggle);