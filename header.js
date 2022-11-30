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
const headerHeadElements = arrayFromNodeList(document.querySelectorAll('.header-head-el'));
let selectedBullet = 0;

const swipeTime = 5000;
let swipperTimerId = setInterval(() => toggleTimer(++selectedBullet % 3, swipperBullets), swipeTime);
swipperBullets.forEach((bullet) => {
    bullet.addEventListener('click', () => {
        clearInterval(swipperTimerId);
        swipperTimerId = setInterval(() => toggleTimer(++selectedBullet % 3, swipperBullets), swipeTime);

        if (!bullet.hasAttribute('id')) {
            document.querySelector(`#${active}`).removeAttribute('id');
            
            bullet.setAttribute('id', active);
            selected = Array.from(swipperBullets).indexOf(bullet);
            toggleHeaderBoxElements(selected);
        }
    });
});


/* functions */
const hideUnselectedElements = (itemsArr, selected) => {
    return itemsArr.map(el => {
        if (itemsArr.indexOf(el) !== selected)
            el.style.display = 'none';
    });
}

const toggleHeaderBoxElements = (selected) => {
    if (selected >= 0 && selected < buttonChildren.length) {
        buttonChildren[selected].style.display = 'flex';
        headerBoxImages[selected].style.display = 'flex'; 
        headerBoxTagChildren[selected].style.display = 'flex';
        headerHeadElements[selected].style.display = 'flex';

        if (selected === 0)
            headerBoxContainer.style.background = 
                'linear-gradient(rgb(0, 191, 165) 0%, rgb(0, 90, 90) 100%)';
        else
            headerBoxContainer.style.background = 
                'linear-gradient(rgb(115, 67, 211) 0%, rgb(72, 44, 128) 100%)';
        
        hideUnselectedElements(buttonChildren, selected);
        hideUnselectedElements(headerBoxImages, selected);
        hideUnselectedElements(headerBoxTagChildrenArr, selected);
        hideUnselectedElements(headerHeadElements, selected);
    }
}

const toggleTimer = (selected, bullets) => {
    toggleHeaderBoxElements(selected);
    bullets[selected === 0 ? 2 : selected - 1].removeAttribute('id');
    bullets[selected].setAttribute('id', `${active}`);
    console.log(selected);
}
