/* START of NAVBAR section*/
window.onscroll = hideNav;

const phishing = document.querySelector('#phishing-warning');
const navbar = document.querySelector('.navbar');

function hideNav() {
    const phishingWarningVisible = phishing.style.display !== 'none';
    if (document.body.scrollTop > 500 
        || document.documentElement.scrollTop > 500) {
            if (phishingWarningVisible)
                phishing.style.top = '-100px';
        navbar.style.top = '-100px';
        
    } else {
        if (phishingWarningVisible) {
            phishing.style.top = '0';
            navbar.style.top = '70px';
        } else {
            navbar.style.top = '0px';
        }
    }
};
/* end of NAVBAR section*/