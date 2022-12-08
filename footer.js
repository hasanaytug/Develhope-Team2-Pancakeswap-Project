const themeButton = document.querySelector('#theme-selection');

themeButton.checked = false;

const themeIcon = document.querySelector('#f-theme-icon');
const dir = './assets/icons/theme-btn-'
const themeIcons = ['sun', 'moon'];

themeButton.addEventListener('click', () => 
    themeIcon.src = `${dir}${themeIcons[Number(themeButton.checked)]}.svg`);