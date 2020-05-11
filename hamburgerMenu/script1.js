const arrow= document.querySelector('div.arrow');
const menu = document.querySelector('div.menu');
arrow.addEventListener('click', function(){
   menu.classList.toggle('menu-show');
   arrow.classList.toggle('menu-show');
});