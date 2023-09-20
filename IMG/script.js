let menu = document.querySelector('menu-btn');
let navbar = document.querySelector('.navbar');


menu.onclick =() =>{
    menu.classList.toggle('fa-solid fa-xmark');
    navbar.classList.toggle('fa-solid fa-xmark');
}
window.onscroll =() =>{
    menu.classList.remove('fa-solid fa-xmark');
    menu.classList.remove('active');
}