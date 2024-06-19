// Agregar Clase fade-in al nombre-frase-profesion //

document.addEventListener("DOMContentLoaded", function() {
    // Agregar la clase 'fade-in' a los elementos después de que la página haya cargado
    document.querySelector('.caro_nombre').classList.add('fade-in');
    document.querySelector('.caro_frase').classList.add('fade-in');
    document.querySelector('.caro_profesion').classList.add('fade-in');

    document.querySelector('.isaac_nombre').classList.add('fade-in');
    document.querySelector('.isaac_frase').classList.add('fade-in');
    document.querySelector('.isaac_profesion').classList.add('fade-in');
});

// Agregar Clase visible al nav //

const nav = document.getElementById('nav');
const abrirNav = document.getElementById('abrir');
const cerrarNav = document.getElementById('cerrar');
const menuItems = document.querySelectorAll('.menu a');

abrirNav.addEventListener('click', () => {
    nav.classList.add('visible');
})

cerrarNav.addEventListener('click', () => {
    nav.classList.remove('visible');
})

// Cerrar el menú al hacer clic en un enlace de la lista
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        nav.classList.remove('visible');
    });
});


// Proyecto Tarjetas //

const cards = document.querySelectorAll('.card');

cards.forEach(card =>{
    card.addEventListener('click', () =>{
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active')
    })
})

// Servicios //
let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 3;
function loadShow() {
    let stt = 0;
    const isSmallScreen = window.matchMedia("(min-width: 200px) and (max-width: 636px)").matches;
    
    // Resetea el estilo del elemento activo
    items[active].style.transform = 'none';
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    // Aplica el estilo a los elementos siguientes al activo
    for (var i = active + 1; i < items.length; i++) {
        stt++;
        if (isSmallScreen) {
            // Transformación vertical
            items[i].style.transform = `translateY(${100 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateX(-1deg)`;
        } else {
            // Transformación horizontal
            items[i].style.transform = `translateX(${100 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        }
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(2px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }

    stt = 0;

    // Aplica el estilo a los elementos anteriores al activo
    for (var i = active - 1; i >= 0; i--) {
        stt++;
        if (isSmallScreen) {
            // Transformación vertical
            items[i].style.transform = `translateY(${-100 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateX(1deg)`;
        } else {
            // Transformación horizontal
            items[i].style.transform = `translateX(${-100 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        }
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(2px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}

// Ejecuta loadShow inicialmente
loadShow();

// Añade el evento a los botones de navegación
next.onclick = function() {
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}

prev.onclick = function() {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}

// Escucha los cambios en el tamaño de la ventana y ajusta el slider
window.addEventListener('resize', loadShow);





