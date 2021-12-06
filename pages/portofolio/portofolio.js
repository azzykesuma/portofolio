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
