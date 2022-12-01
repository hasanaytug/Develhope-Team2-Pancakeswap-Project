/* START of NAVBAR section*/
window.onscroll = hideNav;

function hideNav() {
    const phishingWarningVisible = phishingWarning.style.display !== 'none';
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            if (phishingWarningVisible)
                phishingWarning.classList.add('hide-onscroll-warning');
        navbar.classList.add('hide-onscroll-navbar');
    } else {
        navbar.classList.remove('hide-onscroll-navbar');
        phishingWarning.classList.remove('hide-onscroll-warning');
    }
};
/* end of NAVBAR section*/