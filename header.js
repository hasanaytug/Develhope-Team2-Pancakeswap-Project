const swipperBullets = document.querySelectorAll('.header-swipper');
const active = 'header-bullet-active';
const headerButton = document.querySelector('.ibrahim-button');
const buttonChildren = Array.from(headerButton.querySelectorAll('span'));
const headerBox = document.querySelector('.ibrahim-rectangle');
const headerBoxImages = Array.from(headerBox.querySelectorAll('.header-box-imgs'));

swipperBullets.forEach((bullet) => bullet.addEventListener('click', () => {
    if (!bullet.hasAttribute('id')) {
        document.querySelector(`#${active}`).removeAttribute('id');
        bullet.setAttribute('id', active);

        let selectedBullet = Array.from(swipperBullets).indexOf(bullet);

        if (selectedBullet >= 0 && selectedBullet < buttonChildren.length) {
            buttonChildren[selectedBullet].style.display = 'flex';
            headerBoxImages[selectedBullet].style.display = 'flex';            
        }

        buttonChildren.map(el => {
            if (buttonChildren.indexOf(el) !== selectedBullet)
                el.style.display = 'none';
        });

        headerBoxImages.map(el => {
            if (headerBoxImages.indexOf(el) !== selectedBullet)
                el.style.display = 'none';
        });
        
    }
}))

console.log(swipperBullets);