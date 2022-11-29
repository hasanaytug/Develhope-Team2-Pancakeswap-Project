/* START of PHISHING-WARNING */
const phishingWarning = document.querySelector('#phishing-warning');
const navbar = document.querySelector('.navbar');

const phishingButton = document.querySelector('#phishing-warning > button');
phishingButton.addEventListener('click', () => {
  phishingWarning.style.display = 'none';
  document.querySelector('.navbar').style.top = '0px';
});
/* END of PHISHIN-WARNING */