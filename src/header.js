const nav = document.querySelector('#header_menu');
const abrir = document.querySelector('#abrir_menu');
const cerrar = document.querySelector('#cerrar_menu');

window.addEventListener('scroll', function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY>0);
    nav.classList.add("header__position");
    if (window.scrollY==0) {
        nav.classList.remove("header__position");
    }
});

abrir.addEventListener("click", () => {
    nav.classList.add("header__visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("header__visible");
})

