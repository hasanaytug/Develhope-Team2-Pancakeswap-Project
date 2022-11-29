const swipperBullets = document.querySelectorAll('.header-swipper');
const active = 'header-bullet-active';

swipperBullets.forEach((bullet) => bullet.addEventListener('click', () => {
    if (!bullet.hasAttribute('id')) {
        document.querySelector(`#${active}`).removeAttribute('id');
        bullet.setAttribute('id', active);
    }
}))

console.log(swipperBullets);