/* Theme switching */
const themeButton = document.querySelector('#theme-selection');
themeButton.checked = false;

const themeIcon = document.querySelector('#f-theme-icon');
const dir = './assets/icons/theme-btn-'
const themeIcons = ['sun', 'moon'];

themeButton.addEventListener('click', () => 
    themeIcon.src = `${dir}${themeIcons[Number(themeButton.checked)]}.svg`);

/* Language switching (only abbreviation for now) */
const langButtons = document.querySelectorAll('#footer-langs button');
const langAbbr = document.querySelector('#lang-icons-wrapper > p');

langButtons.forEach(btn => btn.addEventListener('click', () => {
    if (langAbbr.textContent !== btn.value)
        langAbbr.textContent = btn.value;
    btn.parentNode.style.display = 'flex';
}));


document.addEventListener('click', (event) => {
    const footerLangs = document.querySelector('#footer-langs');
    if (event.target.parentNode.id !== footerLangs.id 
        && footerLangs.style.display === 'flex'
        && event.target.id !== 'up-down-button')
            footerLangs.style = '';
});