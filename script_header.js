const menuresponsive = document.getElementById('sommaireMobile');
const burgerUp = document.getElementById('burger-up');
const burgerDown = document.getElementById('burger-down');

burgerUp.addEventListener('click', function(){
    menuresponsive.style.marginTop = "0";
    burgerDown.style.zIndex="2"
    burgerUp.style.zIndex="1"; 
});


burgerDown.addEventListener('click', function(){
    menuresponsive.style.marginTop = "-100rem";
    burgerDown.style.zIndex="1"
    burgerUp.style.zIndex="2"; 
});
