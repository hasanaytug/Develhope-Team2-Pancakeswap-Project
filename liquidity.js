
// const fbtn = document.querySelector('.firstBtn');
// const sbtn = document.querySelector('.secondBtn');
// const retu = document.querySelector('.return');
// fbtn.addEventListener('click',() => {
//   sbtn.classList.remove('secondBtn');
//   fbtn.classList.add('hide');
// })
// retu.addEventListener('click',() => {
//   fbtn.classList.remove('hide');
//   sbtn.classList.add('secondBtn');
// })

const addLqdtyCL = document.querySelector('.add-liquidityClick');
const addLqdtybtn = document.querySelector('.add-liquidity');

const secondPageUp = document.querySelector('.seondPage-hide');

const arrlft = document.querySelector('.fa-arrow-left');

addLqdtybtn.addEventListener('click', () => {
  addLqdtyCL.classList.add('hideMainPage');

  secondPageUp.classList.remove('seondPage-hide');
})

arrlft.addEventListener('click', () => {
  secondPageUp.classList.add('seondPage-hide');
  addLqdtyCL.classList.remove('hideMainPage');
});

console.log('Hellow');
