/* START of NAVBAR section*/
window.onscroll = hideNav;

function hideNav() {
    const phishingWarningVisible = phishingWarning.style.display !== 'none';
    if (document.body.scrollTop > 500 
        || document.documentElement.scrollTop > 500) {
            if (phishingWarningVisible)
                phishingWarning.style.top = '-100px';
        navbar.style.top = '-100px';
        
    } else {
        if (phishingWarningVisible) {
            phishingWarning.style.top = '0px';
            navbar.style.top = '70px';
        } else {
            navbar.style.top = '0px';
        }
    }
};
/* end of NAVBAR section*/