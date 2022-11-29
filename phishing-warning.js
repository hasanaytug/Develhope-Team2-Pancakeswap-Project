/* START of PHISHING-WARNING */
const phishingWarning = document.querySelector('#phishing-warning');
setTimeout(() => phishingWarning.style.display = 'flex', 3000);

const phishingButton = document.querySelector('#phishing-warning > button');
phishingButton.addEventListener('click', () => {
  phishingWarning.style.display = 'none';
  document.querySelector('.navbar').style.top = '0';
});
/* END of PHISHIN-WARNING */