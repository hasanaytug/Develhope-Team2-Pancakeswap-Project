
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

const addLqdty = document.querySelector('.add-liquidity');
const secondPageUp = document.querySelector('#seondPage-hide');

addLqdty.addEventListener('click', () => {
  secondPageUp.classList.add('seondPage-hide');
})
