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