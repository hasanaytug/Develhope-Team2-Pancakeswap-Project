/* Theme switching */
const themeButton = document.querySelector('#theme-selection');
themeButton.checked = false;

const themeIcon = document.querySelector('#f-theme-icon');
const dir = './assets/icons/theme-btn-'
const themeIcons = ['sun', 'moon'];

const navbarLogo = document.querySelector('.logo > a > img');
const navbarLogos = ['black', 'white'];

const r = document.querySelector(':root');

themeButton.addEventListener('click', () => {
    let themeBtnState = Number(themeButton.checked);
    themeIcon.src = `${dir}${themeIcons[themeBtnState]}.svg`

    navbarLogo.src = `./Full Logo/color-${navbarLogos[themeBtnState]}.svg`;


    if (themeBtnState) {
        r.style.setProperty('--navbar-bg-color', 
            getComputedStyle(r).getPropertyValue('--navbar-bg-color-dark'));
        
        r.style.setProperty('--sublang-top-txt-color',
            getComputedStyle(r).getPropertyValue('--sublang-top-txt-color-alt'));

        r.style.setProperty('--world-img',
            getComputedStyle(r).getPropertyValue('--world-img-alt'));
        
        r.style.setProperty('--sublang-text-hover',
            getComputedStyle(r).getPropertyValue('--sublang-text-hover-alt'));

        r.style.setProperty('--select-net-bg-color',
            getComputedStyle(r).getPropertyValue('--select-net-bg-color-alt'));
        
        r.style.setProperty('--select-net-txt-color',
            getComputedStyle(r).getPropertyValue('--select-net-txt-color-alt'));
            
        
        r.style.setProperty('--select-net-txt-color-hover',
            getComputedStyle(r).getPropertyValue('--select-net-txt-color-hover-alt'));
        
        r.style.setProperty('--net-selection-bg-color',
            getComputedStyle(r).getPropertyValue('--net-selection-bg-color-alt'));

        r.style.setProperty('--nav-item-hover',
            getComputedStyle(r).getPropertyValue('--nav-item-hover-alt'));
        

        
        
    } else {
        r.style.setProperty('--navbar-bg-color', '');
        r.style.setProperty('--sublang-top-txt-color', '');
        r.style.setProperty('--world-img', '');
        r.style.setProperty('--sublang-text-hover', '');
        r.style.setProperty('--select-net-bg-color', '');
        r.style.setProperty('--select-net-txt-color', '');
        r.style.setProperty('--select-net-txt-color-hover', '');
        r.style.setProperty('--net-selection-bg-color', '');
        r.style.setProperty('--nav-item-hover', '');
    }

});























    
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