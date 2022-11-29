const swipperBullets = document.querySelectorAll('.header-swipper');
const active = 'header-bullet-active';
const headerButton = document.querySelector('.ibrahim-button');

swipperBullets.forEach((bullet) => bullet.addEventListener('click', () => {
    if (!bullet.hasAttribute('id')) {
        document.querySelector(`#${active}`).removeAttribute('id');
        bullet.setAttribute('id', active);

        let selectedBullet = Array.from(swipperBullets).indexOf(bullet);
        buttonContent = Array.from(headerButton.querySelectorAll('span'));

        if (selectedBullet >= 0 && selectedBullet < buttonContent.length)
            buttonContent[selectedBullet].style.display = 'flex';

        buttonContent.map(el => {
            if (buttonContent.indexOf(el) !== selectedBullet)
                el.style.display = 'none';
        });
        
    }
}))

console.log(swipperBullets);