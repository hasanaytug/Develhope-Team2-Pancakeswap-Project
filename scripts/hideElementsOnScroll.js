/* START of NAVBAR section*/
//document.body.scrollTop = document.documentElement.scrollTop = 0;
window.onscroll = hideNav;

const phishingClass = 'hide-onscroll-warning';
const navbarClass = 'hide-onscroll-navbar';

const fab = document.querySelector('#fab');
const fabClassName = 'fab-visible';

function hideNav() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            if (!phishingWarning.classList.contains(phishingClass) || !navbar.classList.contains(navbarClass)) {
                phishingWarning.classList.add(phishingClass);
                navbar.classList.add(navbarClass);
            }
    } else {
        if (phishingWarning.classList.contains(phishingClass) || navbar.classList.contains(navbarClass))
        navbar.classList.remove(navbarClass);
        phishingWarning.classList.remove(phishingClass);
    }

    if ((document.body.scrollTop >= 350 || document.documentElement.scrollTop >= 350)) {
        if (!fab.classList.contains(fabClassName))
            fab.classList.add(fabClassName);
    } else {
        if (fab.classList.contains(fabClassName))
            fab.classList.remove(fabClassName);
    }
};
/* end of NAVBAR section*/