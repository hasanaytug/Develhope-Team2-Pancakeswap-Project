const arrayFromNodeList = (arr) => Array.from(arr);

const swipperBullets = document.querySelectorAll('.header-swipper');
const active = 'header-bullet-active';

const headerButton = document.querySelector('.ibrahim-button');
const buttonChildren = 
        arrayFromNodeList(headerButton.querySelectorAll('span'));

const headerBox = document.querySelector('.ibrahim-rectangle');
const headerBoxImages = 
        arrayFromNodeList(headerBox.querySelectorAll('.header-box-imgs'));

const headerBoxTagChildren = document.querySelectorAll('#headTag h1, #header-counter');
const headerBoxTagChildrenArr = arrayFromNodeList(headerBoxTagChildren);

const headerBoxContainer = document.querySelector('.ibrahim-rectangle');


swipperBullets.forEach((bullet) => bullet.addEventListener('click', () => {
    if (!bullet.hasAttribute('id')) {
        document.querySelector(`#${active}`).removeAttribute('id');
        bullet.setAttribute('id', active);

        let selectedBullet = Array.from(swipperBullets).indexOf(bullet);

        if (selectedBullet >= 0 && selectedBullet < buttonChildren.length) {
            buttonChildren[selectedBullet].style.display = 'flex';
            headerBoxImages[selectedBullet].style.display = 'flex'; 
            headerBoxTagChildren[selectedBullet].style.display = 'flex';

            /*
            selectedBullet === 0 
                ? headerBoxContainer.style.background 
                = 'linear-gradient(rgb(0, 191, 165) 0%, rgb(0, 90, 90) 100%);'
                : 'linear-gradient(rgb(115, 67, 211) 0%, rgb(72, 44, 128) 100%);';
            */
            if (selectedBullet === 0)
                headerBoxContainer.style.background = 'linear-gradient(rgb(0, 191, 165) 0%, rgb(0, 90, 90) 100%)';
            else
                headerBoxContainer.style.background = 'linear-gradient(rgb(115, 67, 211) 0%, rgb(72, 44, 128) 100%)';

            console.log(headerBoxContainer.style.background);
        }

        hideUnselectedElements(buttonChildren, selectedBullet);
        hideUnselectedElements(headerBoxImages, selectedBullet);
        hideUnselectedElements(headerBoxTagChildrenArr, selectedBullet);


        
    }
}));


const hideUnselectedElements = (itemsArr, selected) => {
    return itemsArr.map(el => {
        if (itemsArr.indexOf(el) !== selected)
            el.style.display = 'none';
    });
}

