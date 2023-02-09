const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});


// to allocate the price in different direction AR or EN
let c_price_All = [...document.querySelectorAll('.courses .Price_c')]
if(document.dir === 'ltr') {
  c_price_All.map(c_price=>(
    c_price.style.right = '18px'
  ))
} else {
  c_price_All.map(c_price=>(
    c_price.style.left = '18px'
  ))
}